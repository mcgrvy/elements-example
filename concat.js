const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
    './dist/elements-example/runtime.js',
    './dist/elements-example/polyfills.js',
    './dist/elements-example/main.js',
    ]
    await fs.ensureDir('web-components')
    await concat(files, 'web-components/leighton-quotes.js');
    await fs.copyFile('./dist/elements-example/styles.css', 'web-components/styles.css')
    await fs.copy('./dist/elements-example/assets/', 'web-components/assets/' )
})()