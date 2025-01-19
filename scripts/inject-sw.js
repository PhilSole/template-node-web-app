// scripts/inject-sw.js
const fs = require('fs');
const path = require('path');

(function injectServiceWorkerScript() {
    const distIndexPath = path.join(__dirname, '../dist/index.html');

    // Read the built index.html
    let html = fs.readFileSync(distIndexPath, 'utf8');

    // Insert a script tag before the closing </body>
    // Adjust the exact path to match where register-sw.js ends up in dist
    const scriptTag = '  <script src="./register-sw.js"></script>\n</body>';
    html = html.replace('</body>', scriptTag);

    // Write it back to dist
    fs.writeFileSync(distIndexPath, html, 'utf8');

    console.log('Injected SW registration script into dist/index.html');
})();
