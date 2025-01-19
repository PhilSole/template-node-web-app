TITLE: MyApp - Parcel + Sass + Workbox Template

DESCRIPTION: A minimal "no-framework" web app template featuring:

• Parcel 2 for bundling (HTML, JS, CSS/SCSS).
• Sass integration by default.
• Workbox to generate a service worker (precache + offline support).
• A “public” folder for static/unbundled files.
• Runtime code splitting if needed (using dynamic imports).
• A simple build pipeline (clean → bundle → generate SW → copy public files → inject SW registration).
• Scripts to serve the dist folder for testing.

FOLDER STRUCTURE

myapp/ ├─ package.json ├─ src/ │ ├─ index.html │ ├─ main.js │ └─ styles/ │ └─ main.scss ├─ public/ │ └─ register-sw.js ├─ dist/ (auto-generated on build) ├─ scripts/ │ └─ inject-sw.js ├─ workbox-config.js └─ (other optional config files)

EXPLANATION: • src/ – your main application code (HTML, JS, SCSS). Parcel bundles anything referenced from here.
• public/ – static files or scripts that Parcel should NOT transform.
• dist/ – output folder for the final, optimized build.
• scripts/ – small build-related scripts (like inject-sw.js).
• workbox-config.js – Workbox settings to define which files get precached.

PACKAGE.JSON SCRIPTS (EXAMPLE)

clean

Removes dist and the Parcel cache.
Typically uses rimraf or a similar tool to delete folders.
start

Runs Parcel’s dev server for src/index.html.
Use for quick local development (no service worker or file hashing in dev mode).
build

Cleans the old build.
Bundles production files via Parcel (which applies hashing, minification, etc.).
Generates a service worker with Workbox (workbox generateSW).
Copies all public folder files into dist.
Injects a script reference into dist/index.html (inject-sw.js modifies the HTML).
serve:dist

Serves the dist folder with a simple static server (e.g., using http-server or serve).
Useful for testing the production build, including service worker behavior.
USAGE STEPS

Install Dependencies:
npm install

Develop with Hot Reloading (optional):
npm start

Opens at localhost:1234. Edit src/ files. Parcel rebuilds automatically.
Build for Production:
npm run build

Creates an optimized dist/ folder with hashed file names, a Workbox-generated service-worker.js, and any static files from public/.
Test the Production Build Locally:
npm run serve:dist

Serves dist/ at localhost (port varies). Check DevTools to confirm service worker is registered.
CUSTOMIZING

• Sass: Put your SCSS in src/styles/ (or any folder). Parcel compiles it if you import or link to .scss files.
• Workbox Config: Adjust workbox-config.js if you need advanced caching strategies or to include other file types.
• inject-sw.js: Edits the final dist/index.html to reference register-sw.js (the SW registration). Modify or remove as needed.
• public/: Any file placed here is copied straight into dist/ without bundling (like register-sw.js).
• Code Splitting: Use dynamic imports (e.g., import('./largeFeature.js')) in JS to split bundles automatically.

NOTES

• If you see “string literal is not supported” errors for the service worker, that means Parcel is trying to bundle a file that no longer exists. By putting the registration script in public/ and referencing it post-build (or ignoring it in src/), you avoid that conflict.
• “public” vs. “static” folder naming is personal preference. “public” is common in modern setups.
• For cross-platform copying, we rely on copyfiles. On Windows, you can also use xcopy (though it isn’t cross-platform).
• For cross-platform serving, we recommend a node-based static server like serve or http-server.