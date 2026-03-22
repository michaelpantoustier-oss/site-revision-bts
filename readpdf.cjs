const pdfParse = require('pdf-parse');
const fs = require('fs');
const file = process.argv[2];
const maxLen = parseInt(process.argv[3] || '5000');
const buf = fs.readFileSync(file);
pdfParse(buf).then(data => {
  console.log('=== Pages:', data.numpages, '===');
  console.log(data.text.slice(0, maxLen));
}).catch(e => console.error('ERR:', e.message));
