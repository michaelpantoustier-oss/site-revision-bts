// Read text from PPTX files (they are ZIP archives with XML slides)
const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const maxLen = parseInt(process.argv[3] || '5000');

// Read as buffer
const buf = fs.readFileSync(file);

// Simple extraction: find all text between <a:t> tags in the PPTX XML
// PPTX is a ZIP file, we need to parse the XML
// Use a simple regex approach on the raw buffer

// Convert to string (the XML parts are readable as latin-1/utf-8)
const raw = buf.toString('binary');

// Extract text content from XML tags
const matches = [];
const regex = /<a:t[^>]*>([^<]*)<\/a:t>/g;
let match;
while ((match = regex.exec(raw)) !== null) {
  const text = match[1].trim();
  if (text.length > 1) {
    matches.push(text);
  }
}

const result = matches.join(' | ');
process.stdout.write('=== PPTX text (' + matches.length + ' fragments) ===\n');
process.stdout.write(result.slice(0, maxLen) + '\n');
