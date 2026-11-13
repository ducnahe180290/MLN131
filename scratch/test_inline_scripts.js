const fs = require('fs');
const vm = require('vm');

const files = ['module1.html', 'module2.html', 'module3.html', 'module4.html', 'module5.html', 'module6.html'];

files.forEach(f => {
    const html = fs.readFileSync(f, 'utf8');
    const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
    
    scripts.forEach((s, idx) => {
        // Skip external scripts with src=
        if (/src=["']/.test(s)) return;
        const code = s.replace(/<script[\s\S]*?>/i, '').replace(/<\/script>/i, '');
        try {
            // Mock minimal browser globals
            const sandbox = {
                document: {
                    getElementById: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{} }, textContent: '' }),
                    addEventListener: () => {},
                    querySelector: () => null,
                    querySelectorAll: () => []
                },
                localStorage: { getItem: () => null, setItem: () => {} },
                window: { scrollTo: () => {} },
                setTimeout: () => {}
            };
            vm.createContext(sandbox);
            vm.runInContext(code, sandbox);
            console.log(`[PASS] ${f} inline script #${idx+1} syntax OK`);
        } catch(e) {
            console.error(`[FAIL] ${f} inline script #${idx+1} error:`, e.message);
        }
    });
});

