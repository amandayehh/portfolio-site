const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/.cache/dev-404-page.js"))),
  "component---src-pages-clubzy-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/clubzy.js"))),
  "component---src-pages-easel-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/easel.js"))),
  "component---src-pages-google-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/google.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/index.js"))),
  "component---src-pages-poster-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/poster.js"))),
  "component---src-pages-shaap-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/shaap.js"))),
  "component---src-pages-sketches-pumpkin-js": hot(preferDefault(require("/Users/amandayeh/Documents/GitHub/portfolio-site/src/pages/sketches/pumpkin.js")))
}

