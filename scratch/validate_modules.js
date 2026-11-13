const fs = require('fs');

const files = ['module1.html', 'module2.html', 'module3.html', 'module4.html', 'module5.html', 'module6.html'];

files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const checks = {
        hasHeaderPlaceholder: content.includes('<div id="header-placeholder"></div>'),
        hasFooterPlaceholder: content.includes('<div id="footer-placeholder"></div>'),
        hasAiPanel: content.includes('id="ai-panel"'),
        hasQuizModal: content.includes('id="quiz-modal"'),
        hasAchievementToast: content.includes('id="achievement-toast"'),
        has6Lessons: (content.match(/<article id="lesson-M\d-L\d"/g) || []).length === 6,
        hasTailwind: content.includes('cdn.tailwindcss.com'),
        hasUIStyles: content.includes('css/philoverse-ui.css')
    };

    const failed = Object.entries(checks).filter(([_, v]) => !v);
    if (failed.length > 0) {
        console.error(`[FAIL] ${f}: Failed checks:`, failed.map(([k]) => k));
    } else {
        console.log(`[PASS] ${f}: All 8 structural checks passed!`);
    }
});

