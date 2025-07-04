// scripts/test-colors.js
const fs = require('fs');
const path = require('path');

const themesDir = path.resolve(__dirname, '../themes');
const files = fs.readdirSync(themesDir).filter(f => f.endsWith('.json'));

files.forEach(file => {
  const filePath = path.join(themesDir, file);
  try {
    const theme = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (!theme.name || !theme.colors || !theme.tokenColors) {
      throw new Error('Missing required fields (name, colors, tokenColors)');
    }

    console.log(`✅ ${file} passed validation`);
  } catch (err) {
    console.error(`❌ ${file} failed:`, err.message);
  }
});
