// copy-css.cjs
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'lib', 'bundle.css');
const destPath = path.join(__dirname, 'public', 'bundle.css');

fs.copyFile(srcPath, destPath, (err) => {
  if (err) throw err;
  console.log('bundle.css was copied to public/');
});
