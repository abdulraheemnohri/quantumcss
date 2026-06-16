const fs = require('fs-extra');
const path = require('path');

async function deployCDN() {
  console.log('Deploying QuantumCSS to CDN...');
  const cdnPath = path.join(__dirname, '../cdn');
  await fs.ensureDir(cdnPath);

  const srcFile = path.join(__dirname, '../dist/quantum.min.css');
  const destFile = path.join(cdnPath, 'quantum.cdn.min.css');

  if (fs.existsSync(srcFile)) {
    await fs.copy(srcFile, destFile);
    console.log('Successfully deployed to CDN folder.');
  } else {
    console.error('Source file not found for CDN deployment.');
  }
}

deployCDN();
