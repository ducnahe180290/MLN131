const fs = require('fs');
const path = require('path');
const { renderModulePage } = require('./render_module_html');

const modules = [
    { file: 'module1.html', data: require('./data_module1') },
    { file: 'module2.html', data: require('./data_module2') },
    { file: 'module3.html', data: require('./data_module3') },
    { file: 'module4.html', data: require('./data_module4') },
    { file: 'module5.html', data: require('./data_module5') },
    { file: 'module6.html', data: require('./data_module6') }
];

modules.forEach(({ file, data }) => {
    const html = renderModulePage(data);
    const destPath = path.resolve(__dirname, '..', file);
    fs.writeFileSync(destPath, html, 'utf8');
    const stats = fs.statSync(destPath);
    console.log(`[SUCCESS] Wrote ${file} (${stats.size} bytes)`);
});

console.log('All 6 VNR202 modules have been successfully generated!');

