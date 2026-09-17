// Preview-only static server for the BrightCasa vanilla HTML/CSS/JS site.
// Serves the repository root (/app) exactly as Netlify would from `publish = "."`.
// This wrapper exists solely so the Emergent preview can render the site on port 3000.
// It does NOT modify any site files.

const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// The static site lives in the repo root, one level up from this frontend/ wrapper.
const SITE_ROOT = path.resolve(__dirname, '..');

// Mirror netlify.toml redirects.
app.get('/getsortedbeta', (req, res) =>
  res.redirect(302, 'https://testflight.apple.com/join/HyEvpM5S')
);
app.get('/getsortedandroid', (req, res) =>
  res.redirect(302, 'https://play.google.com/apps/testing/com.brightcasa.getsorted')
);

// Serve static assets (html, css, js, images, favicons) from the repo root.
// `extensions: ['html']` lets extensionless paths resolve to their .html file.
app.use(
  express.static(SITE_ROOT, {
    extensions: ['html'],
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
    },
  })
);

app.listen(PORT, HOST, () => {
  console.log(`BrightCasa static site served from ${SITE_ROOT} on http://${HOST}:${PORT}`);
});
