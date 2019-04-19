const rollupConfig = require('../rollup.config')
const fs = require('fs')
const path = require('path')
const os = require('os');
const bundleFilePath = path.join(__dirname, '..', rollupConfig.output.file)

if (fs.statSync(bundleFilePath)) {
  const distDir = path.dirname(bundleFilePath)
  const htmlFilePath = path.join(distDir,"mf.html")
  const htmlFileContent = [
    '<script>',
    fs.readFileSync(bundleFilePath),
    '</script>'
  ]
  fs.writeFileSync(htmlFilePath,htmlFileContent.join(os.EOL))
  console.log(distDir)
} else {
  console.warn('Can\'t find bundle file: ' + bundleFilePath)
}
