const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const { normalizeVietnamese, tokenizePhrase } = require(path.join(rootDir, 'utils', 'normalizeVietnamese'));
const seedFile = path.join(rootDir, 'data', 'wordleChapters.seed.js');
const seedModule = require(seedFile);
const chapters = seedModule.wordleChapters || seedModule;

let fixedCount = 0;
chapters.forEach(ch => {
    ch.rounds.forEach(r => {
        const expectedNorm = normalizeVietnamese(r.targetPhrase, { preserveSpaces: true });
        const expectedTokens = tokenizePhrase(r.targetPhrase);
        if (r.normalizedTarget !== expectedNorm || JSON.stringify(r.tokens) !== JSON.stringify(expectedTokens)) {
            console.log(`Fixing round ${r.id}: "${r.targetPhrase}"`);
            console.log(`  old norm: "${r.normalizedTarget}" -> new norm: "${expectedNorm}"`);
            console.log(`  old tokens: ${JSON.stringify(r.tokens)} -> new tokens: ${JSON.stringify(expectedTokens)}`);
            r.normalizedTarget = expectedNorm;
            r.tokens = expectedTokens;
            fixedCount++;
        }
    });
});

if (fixedCount > 0) {
    const fs = require('fs');
    fs.writeFileSync(seedFile, 'const wordleChapters = ' + JSON.stringify(chapters, null, 2) + ';\n\nmodule.exports = { wordleChapters };\n', 'utf8');
    console.log(`Fixed ${fixedCount} rounds in ${seedFile}!`);
} else {
    console.log('All rounds valid!');
}
