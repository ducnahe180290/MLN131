const fs = require('fs');
const txt = fs.readFileSync('home.html', 'utf8');
const lines = txt.split('\n');
lines.forEach((l, i) => {
    if (l.includes('header-placeholder') || l.includes('footer-placeholder') || l.includes('header.html')) {
        console.log(`Line ${i+1}: ${l.trim()}`);
    }
});

