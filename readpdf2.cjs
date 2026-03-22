const pdfParse = require('pdf-parse');
const fs = require('fs');
// Read from stdin to avoid path encoding issues
const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  const buf = Buffer.concat(chunks);
  const maxLen = parseInt(process.argv[2] || '4000');
  pdfParse(buf).then(data => {
    process.stdout.write('=== Pages: ' + data.numpages + ' ===\n');
    process.stdout.write(data.text.slice(0, maxLen));
  }).catch(e => process.stderr.write('ERR: ' + e.message + '\n'));
});
