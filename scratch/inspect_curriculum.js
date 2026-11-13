const fs = require('fs');
const cur = JSON.parse(fs.readFileSync('data/vnr202-curriculum.json', 'utf8'));
console.log('Total sessions:', cur.length);
cur.forEach(s => {
    console.log(`[Session ${s.session}] [Chương ${s.chapter}] ${s.title}`);
});

