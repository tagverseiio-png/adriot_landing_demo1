const fs = require('fs');

const src = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\cb5e9629-201b-4f4b-80b9-2179efa252b6\\media__1783684836229.jpg';
const dest = 'e:\\work\\adroit\\androit demo 1\\adriot_landing_demo1\\public\\hero-building.jpg';

try {
  fs.copyFileSync(src, dest);
  console.log('File copied successfully.');
} catch (err) {
  console.error('Error copying file:', err);
}
