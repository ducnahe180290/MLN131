const fs = require('fs');

function buildFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[OK] Generated ${filePath} (${Buffer.byteLength(content, 'utf8')} bytes)`);
}

module.exports = { buildFile };

