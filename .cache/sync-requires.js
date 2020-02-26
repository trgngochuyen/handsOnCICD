const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/trgnghuyen/Workspace/Integrify/handson/.cache/dev-404-page.js"))),
  "component---src-pages-404-index-tsx": hot(preferDefault(require("/home/trgnghuyen/Workspace/Integrify/handson/src/pages/404/index.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/trgnghuyen/Workspace/Integrify/handson/src/pages/index.tsx"))),
  "component---src-pages-page-2-index-tsx": hot(preferDefault(require("/home/trgnghuyen/Workspace/Integrify/handson/src/pages/page-2/index.tsx")))
}

