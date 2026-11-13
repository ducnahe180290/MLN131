function renderModulePage(cfg) {
    const m = cfg.moduleId;
    const lessonsJson = JSON.stringify(cfg.lessons.map(l => l.id));
    const formativeQuizzesJson = JSON.stringify(cfg.formativeQuizzes, null, 2);
    const moduleQuizJson = JSON.stringify(cfg.moduleQuiz, null, 2);
    const aiResponsesJson = JSON.stringify(cfg.aiResponses, null, 2);
    const achievementJson = JSON.stringify(cfg.achievement);

    let lessonTabsHtml = '';
    let lessonArticlesHtml = '';

    cfg.lessons.forEach((l, idx) => {
        const isFirst = idx === 0;
        const tabNumber = `${m}.${idx + 1}`;
        lessonTabsHtml += `
            <button onclick="showLesson('${l.id}')" id="tab-${l.id}" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all ${isFirst ? 'active-tab' : ''}">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài ${tabNumber}</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">${l.tabTitle}</span>
            </button>`;

        lessonArticlesHtml += `
        <!-- LESSON ${tabNumber}: ${l.tabTitle} -->
        <article id="lesson-${l.id}" class="lesson-content space-y-6 ${isFirst ? '' : 'hidden'}">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">${l.headerBadge}</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        ${l.headerTitle}
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">${l.headerSubtitle}</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    ${l.contentHtml}

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài ${tabNumber}
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>${l.reflection.question}</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> ${l.reflection.answer}
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        ${idx > 0 ? `<button onclick="showLesson('${cfg.lessons[idx - 1].id}')" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5 flex items-center gap-1.5"><span class="material-symbols-outlined text-sm">arrow_back</span> Bài trước</button>` : '<div></div>'}
                        <div class="flex items-center gap-3">
                            <button onclick="openFormativeQuiz('M${m}-FQ${Math.min(idx + 1, 3)}')" class="px-5 py-2.5 rounded-xl border border-philo-gold/40 text-philo-gold text-xs font-bold hover:bg-philo-gold/10 transition-colors flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">quiz</span> Trắc nghiệm nhanh
                            </button>
                            <button onclick="completeLesson('${l.id}')" id="btn-complete-${l.id}" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                                <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>`;
    });

    let aiPromptButtonsHtml = '';
    (cfg.aiPrompts || []).forEach(p => {
        aiPromptButtonsHtml += `<button onclick="sendAIPrompt('${p.replace(/'/g, "\\'")}')" class="text-[10px] bg-white/5 hover:bg-philo-gold/20 text-philo-gold px-2.5 py-1 rounded-full border border-philo-gold/20">${p}</button>\n`;
    });

    return `<!DOCTYPE html>
<html lang="vi" class="dark">
<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>${cfg.title} — PhiloVerse VNR202</title>
    <meta name="description" content="${cfg.description}" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    <script src="js/tailwind-config-global.js"></script>
    <link rel="stylesheet" href="css/philoverse-ui.css" />
    <style>
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            display: inline-block;
            line-height: 1;
            direction: ltr;
        }
        #m${m}-progress-bar { transition: width 0.6s ease; }
        .reflection-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s;
            opacity: 0;
        }
        .reflection-answer.open {
            max-height: 800px;
            opacity: 1;
        }
        .hidden-panel {
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        .lesson-tab.active-tab {
            border-color: #FFD34E !important;
            background: rgba(217, 166, 46, 0.15) !important;
            box-shadow: 0 0 20px rgba(217, 166, 46, 0.25);
        }
        .lesson-tab.active-tab .tab-label {
            color: #FFD34E !important;
        }
        .lesson-dot.completed {
            background-color: #D9A62E !important;
        }
        .lesson-header-academic {
            padding: 2rem 2rem 1.5rem;
            background: linear-gradient(135deg, rgba(20, 3, 3, 0.95) 0%, rgba(101, 7, 7, 0.85) 100%);
            border-bottom: 1px solid rgba(217, 166, 46, 0.2);
        }
        .module-page-hero {
            position: relative;
            padding: 3rem 2rem 2.5rem;
            overflow: hidden;
            background: linear-gradient(135deg, #0D0101 0%, #3A0505 50%, #140303 100%);
        }
        .module-page-hero > * {
            position: relative;
            z-index: 1;
        }
        .module-page-hero::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(217, 166, 46, 0.5), transparent);
        }
    </style>
</head>

<body class="bg-philo-blackBurgundy relative text-philo-ivory font-body transition-colors duration-300 min-h-screen flex flex-col overflow-x-hidden">
    <div id="header-placeholder"></div>

    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <!-- ===== MODULE HERO HEADER ===== -->
        <div class="module-page-hero -mx-4 sm:-mx-6 lg:-mx-8 mb-10">
            <div class="absolute inset-0 z-0 overflow-hidden">
                <img src="assets/images/shared/module-hero-bg.jpg" alt="" class="w-full h-full object-cover opacity-20" style="object-position: center 30%;" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#0D0101] via-[#3A0505]/80 to-transparent"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#140303] via-transparent to-transparent"></div>
            </div>
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div class="philo-breadcrumb mb-5">
                    <a href="home.html">TRANG CHỦ</a>
                    <span class="sep">/</span>
                    <a href="Overview.html">GIÁO TRÌNH VNR202</a>
                    <span class="sep">/</span>
                    <span>${cfg.breadcrumb}</span>
                </div>
                <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span class="philo-badge mb-3 inline-flex"><span class="material-symbols-outlined text-[14px]">${cfg.icon || 'history_edu'}</span> ${cfg.badge}</span>
                        <h1 class="font-heading text-3xl md:text-5xl font-bold leading-tight text-philo-ivory mt-2">
                            ${cfg.heroTitle}
                        </h1>
                        <p class="font-heading italic text-base md:text-lg text-philo-gold/80 mt-3 max-w-3xl leading-relaxed">
                            ${cfg.heroSubtitle}
                        </p>
                        <div class="flex flex-wrap items-center gap-4 mt-4 text-xs text-philo-ivory/60">
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-philo-gold">menu_book</span> 6 bài học chuẩn</span>
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-philo-gold">timer</span> ${cfg.timeEst || '~45 phút học'}</span>
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-philo-gold">quiz</span> 3 Formative Quizzes & 1 Module Exam</span>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button onclick="toggleAIPanel()" class="philo-btn-gold flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-[20px]">smart_toy</span>
                            <span>Trợ lý AI Chương ${m}</span>
                        </button>
                        <button onclick="openModuleQuiz()" class="philo-btn-secondary flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-[20px]">verified</span>
                            <span>Thi trắc nghiệm</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Progress Tracker Bar -->
        <div class="glass-panel p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <span class="text-sm font-semibold text-philo-ivory/80">Tiến độ bài học:</span>
                <span id="m${m}-progress-text" class="text-sm font-bold text-philo-gold">0 / 6 bài</span>
            </div>
            <div class="flex-grow max-w-md bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/10">
                <div id="m${m}-progress-bar" class="bg-gradient-to-r from-philo-gold to-yellow-500 h-full rounded-full" style="width: 0%"></div>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M${m}-L1"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M${m}-L2"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M${m}-L3"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M${m}-L4"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M${m}-L5"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M${m}-L6"></div>
            </div>
        </div>

        <!-- 6 Lesson Navigation Tabs -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            ${lessonTabsHtml}
        </div>

        <!-- LESSON ARTICLES -->
        ${lessonArticlesHtml}

        <!-- MODULE FINAL EXAM BANNER -->
        <div id="module-quiz-banner" class="hidden mt-8 p-6 rounded-2xl glass-panel border border-philo-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h3 class="font-heading text-xl font-bold text-philo-gold">Chúc mừng bạn đã hoàn thành 6 bài học Chương ${m}!</h3>
                <p class="text-xs text-philo-ivory/80 mt-1">Hãy tham gia bài thi tổng kết để củng cố toàn diện kiến thức và mở khóa danh hiệu vinh dự.</p>
            </div>
            <button onclick="openModuleQuiz()" class="philo-btn-gold shrink-0">Bắt đầu thi tổng kết</button>
        </div>
    </main>

    <!-- SLIDE-OVER AI PANEL -->
    <aside id="ai-panel" class="fixed top-0 right-0 w-full sm:w-96 h-full bg-[#120202] border-l border-philo-gold/30 shadow-2xl z-50 p-6 flex flex-col hidden-panel">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-philo-gold">smart_toy</span>
                <h3 class="font-heading font-bold text-philo-ivory">Trợ Lý AI Chương ${m}</h3>
            </div>
            <button onclick="toggleAIPanel()" class="text-philo-ivory/60 hover:text-white"><span class="material-symbols-outlined">close</span></button>
        </div>
        <div class="py-3 flex flex-wrap gap-1.5 border-b border-white/10">
            ${aiPromptButtonsHtml}
        </div>
        <div id="ai-chat-history" class="flex-grow overflow-y-auto py-4 space-y-3 text-xs">
            <div class="bg-white/5 rounded-xl p-3 border border-philo-gold/20">
                <p class="font-bold text-philo-gold mb-1">🤖 AI Giáo trình VNR202</p>
                <p class="text-philo-ivory/80">Chào bạn! Tôi là trợ lý AI chuyên sâu môn Lịch sử Đảng Cộng sản Việt Nam (VNR202) Chương ${m}. Bạn cần giải đáp câu hỏi hay tài liệu nào?</p>
            </div>
        </div>
        <div class="pt-3 border-t border-white/10 flex gap-2">
            <input type="text" id="ai-input" placeholder="Hỏi AI về Chương ${m}..." class="flex-grow bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-philo-gold" onkeydown="if(event.key==='Enter') sendAIMessage()" />
            <button onclick="sendAIMessage()" class="philo-btn-gold px-3 py-2 rounded-xl text-xs"><span class="material-symbols-outlined text-[16px]">send</span></button>
        </div>
    </aside>

    <!-- QUIZ MODAL -->
    <div id="quiz-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="glass-panel border border-philo-gold/40 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            <div class="p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                    <h3 id="quiz-modal-title" class="font-heading font-bold text-lg text-philo-gold">Bài kiểm tra trắc nghiệm</h3>
                    <p id="quiz-modal-sub" class="text-xs text-philo-ivory/60 mt-0.5">VNR202 Lịch sử Đảng</p>
                </div>
                <button onclick="closeQuizModal()" class="text-white/60 hover:text-white"><span class="material-symbols-outlined">close</span></button>
            </div>
            <div id="quiz-modal-body" class="p-6 overflow-y-auto space-y-6 flex-grow"></div>
        </div>
    </div>

    <!-- ACHIEVEMENT TOAST -->
    <div id="achievement-toast" class="fixed bottom-6 right-6 glass-panel border border-philo-gold p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 hidden">
        <span class="text-3xl" id="achievement-icon">🎖️</span>
        <div>
            <h4 class="font-bold text-philo-gold text-sm" id="achievement-name">Mở khóa danh hiệu</h4>
            <p class="text-xs text-philo-ivory/80" id="achievement-desc">Mô tả danh hiệu</p>
        </div>
    </div>

    <div id="footer-placeholder"></div>

    <!-- Component Loaders -->
    <script src="js/search-data-global.js"></script>
    <script src="js/load-components.js"></script>
    <script src="js/search-init.js"></script>

    <script>
        const M_LESSONS = ${lessonsJson};
        let M_STATE = {
            completedLessons: new Set(),
            quizResults: {}
        };

        const STORAGE_KEY = 'vnr202_m${m}_state';

        function loadMState() {
            try {
                const s = localStorage.getItem(STORAGE_KEY);
                if (s) {
                    const parsed = JSON.parse(s);
                    M_STATE.completedLessons = new Set(parsed.completedLessons || []);
                    M_STATE.quizResults = parsed.quizResults || {};
                }
            } catch(e) {}
        }

        function saveMState() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                completedLessons: Array.from(M_STATE.completedLessons),
                quizResults: M_STATE.quizResults
            }));
        }

        function showLesson(id) {
            M_LESSONS.forEach(l => {
                const el = document.getElementById('lesson-' + l);
                const tab = document.getElementById('tab-' + l);
                if (el) el.classList.add('hidden');
                if (tab) tab.classList.remove('active-tab');
            });
            const activeEl = document.getElementById('lesson-' + id);
            const activeTab = document.getElementById('tab-' + id);
            if (activeEl) activeEl.classList.remove('hidden');
            if (activeTab) activeTab.classList.add('active-tab');
            window.scrollTo({ top: 380, behavior: 'smooth' });
        }

        function completeLesson(id) {
            M_STATE.completedLessons.add(id);
            saveMState();
            updateProgress();
            const btn = document.getElementById('btn-complete-' + id);
            if (btn) {
                btn.classList.remove('philo-btn-gold');
                btn.classList.add('bg-emerald-600', 'text-white');
                btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span> Đã hoàn thành ✓';
            }
            const idx = M_LESSONS.indexOf(id);
            if (idx < M_LESSONS.length - 1) {
                setTimeout(() => showLesson(M_LESSONS[idx + 1]), 400);
            }
        }

        function updateProgress() {
            const count = M_STATE.completedLessons.size;
            const pct = Math.round((count / 6) * 100);
            const bar = document.getElementById('m${m}-progress-bar');
            const txt = document.getElementById('m${m}-progress-text');
            if (bar) bar.style.width = pct + '%';
            if (txt) txt.textContent = count + ' / 6 bài (' + pct + '%)';
            M_LESSONS.forEach(l => {
                const dot = document.getElementById('dot-' + l);
                if (dot) {
                    if (M_STATE.completedLessons.has(l)) dot.classList.add('completed');
                    else dot.classList.remove('completed');
                }
            });
            if (count === 6) {
                const banner = document.getElementById('module-quiz-banner');
                if (banner) banner.classList.remove('hidden');
            }
        }

        function toggleReflection(btn) {
            const answer = btn.nextElementSibling;
            if (answer) {
                answer.classList.toggle('open');
                const icon = btn.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = answer.classList.contains('open') ? 'expand_less' : 'expand_more';
            }
        }

        // QUIZ DATA
        const FORMATIVE_QUIZZES = ${formativeQuizzesJson};
        const MODULE_QUIZ = ${moduleQuizJson};
        const ACHIEVEMENT = ${achievementJson};

        let currentQuizData = null;
        let currentQuizAnswers = {};

        function openFormativeQuiz(id) {
            const q = FORMATIVE_QUIZZES[id] || FORMATIVE_QUIZZES['M${m}-FQ1'];
            if (q) renderQuizModal(q);
        }

        function openModuleQuiz() {
            renderQuizModal(MODULE_QUIZ);
        }

        function renderQuizModal(quiz) {
            currentQuizData = quiz;
            currentQuizAnswers = {};
            document.getElementById('quiz-modal-title').textContent = quiz.title;
            document.getElementById('quiz-modal-sub').textContent = 'Cần đạt ' + quiz.passingScore + '% • ' + quiz.questions.length + ' câu hỏi trắc nghiệm';
            let h = '<div class="space-y-6">';
            quiz.questions.forEach((q, i) => {
                h += '<div class="quiz-question" data-qid="' + q.id + '">' +
                    '<p class="font-medium text-sm mb-3">' + (i + 1) + '. ' + q.text + '</p>' +
                    '<div class="space-y-2">';
                q.options.forEach(o => {
                    h += '<label class="quiz-option flex items-start gap-3 p-3 rounded-xl border border-white/10 cursor-pointer hover:border-philo-gold/50 hover:bg-white/5 transition-all">' +
                        '<input type="radio" name="q_' + q.id + '" value="' + o.id + '" onclick="selectAnswer(\\'' + q.id + '\\',\\'' + o.id + '\\')" class="mt-0.5 flex-shrink-0 text-philo-gold focus:ring-philo-gold">' +
                        '<span class="text-xs md:text-sm text-philo-ivory/90">' + o.text + '</span>' +
                    '</label>';
                });
                h += '</div></div>';
            });
            h += '</div>' +
            '<div class="mt-6 flex justify-end gap-3 pt-4 border-t border-white/10">' +
                '<button onclick="closeQuizModal()" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Đóng</button>' +
                '<button onclick="submitQuiz()" id="btn-submit-quiz" class="bg-white/10 text-white/40 font-bold px-8 py-2.5 rounded-xl cursor-not-allowed text-xs" data-ready="false">Nộp bài</button>' +
            '</div>';
            document.getElementById('quiz-modal-body').innerHTML = h;
            document.getElementById('quiz-modal').classList.remove('hidden');
        }

        function selectAnswer(q, o) {
            currentQuizAnswers[q] = o;
            const all = currentQuizData.questions.every(x => currentQuizAnswers[x.id]);
            const b = document.getElementById('btn-submit-quiz');
            if (b) {
                if (all) {
                    b.setAttribute('data-ready', 'true');
                    b.className = 'philo-btn-gold font-bold px-8 py-2.5 rounded-xl cursor-pointer text-xs';
                } else {
                    b.setAttribute('data-ready', 'false');
                    b.className = 'bg-white/10 text-white/40 font-bold px-8 py-2.5 rounded-xl cursor-not-allowed text-xs';
                }
            }
        }

        function submitQuiz() {
            const b = document.getElementById('btn-submit-quiz');
            if (b && b.getAttribute('data-ready') !== 'true') return;
            const quiz = currentQuizData;
            let correct = 0;

            quiz.questions.forEach(q => {
                const u = currentQuizAnswers[q.id], ok = u === q.correctOptionId;
                if (ok) correct++;
                const qEl = document.querySelector('[data-qid="' + q.id + '"]');
                if (!qEl) return;
                qEl.querySelectorAll('.quiz-option').forEach(l => {
                    const r = l.querySelector('input');
                    if (!r) return;
                    if (r.value === q.correctOptionId) {
                        l.classList.add('border-emerald-500', 'bg-emerald-950/30');
                    }
                    if (r.value === u && !ok) {
                        l.classList.add('border-red-500', 'bg-red-950/30');
                    }
                });
                const re = document.createElement('div');
                re.className = 'mt-2 p-3 bg-philo-gold/10 border border-philo-gold/20 rounded-lg text-xs';
                re.innerHTML = '<strong class="text-philo-gold">📖 Trích dẫn Giáo trình VNR202:</strong> ' + q.rationale;
                qEl.appendChild(re);
            });

            const score = Math.round((correct / quiz.questions.length) * 100);
            const passed = score >= quiz.passingScore;
            M_STATE.quizResults[quiz.id || 'module_quiz'] = { score, correct, total: quiz.questions.length, passed, timestamp: Date.now() };
            saveMState();

            const rh = '<div class="mb-6 p-4 rounded-2xl text-center border ' + (passed ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-red-950/30 border-red-500/50') + '">' +
                '<p class="text-3xl mb-1">' + (passed ? '🎉' : '📚') + '</p>' +
                '<p class="text-xl font-bold ' + (passed ? 'text-emerald-400' : 'text-red-400') + '">' + score + '% (' + correct + '/' + quiz.questions.length + ' câu đúng)</p>' +
                '<p class="text-xs mt-1 ' + (passed ? 'text-emerald-400' : 'text-red-400') + '">' + (passed ? '✅ Đạt yêu cầu kiến thức Chương ${m}!' : '❌ Chưa đạt (Yêu cầu ' + quiz.passingScore + '%). Hãy xem lại giải thích và thử lại!') + '</p>' +
            '</div>';
            document.getElementById('quiz-modal-body').insertAdjacentHTML('afterbegin', rh);

            b.textContent = passed ? 'Hoàn tất ✓' : 'Làm lại';
            b.onclick = passed ? closeQuizModal : () => {
                closeQuizModal();
                setTimeout(() => openModuleQuiz(), 300);
            };

            if (passed && ACHIEVEMENT) {
                showAchievement(ACHIEVEMENT.name, ACHIEVEMENT.desc);
            }
        }

        function closeQuizModal() {
            document.getElementById('quiz-modal').classList.add('hidden');
        }

        function showAchievement(name, desc) {
            const t = document.getElementById('achievement-toast');
            document.getElementById('achievement-name').textContent = name;
            document.getElementById('achievement-desc').textContent = desc;
            t.classList.remove('hidden');
            setTimeout(() => t.classList.add('hidden'), 4000);
        }

        let aiPanelOpen = false;
        function toggleAIPanel() {
            aiPanelOpen = !aiPanelOpen;
            const p = document.getElementById('ai-panel');
            if (aiPanelOpen) p.classList.remove('hidden-panel');
            else p.classList.add('hidden-panel');
        }

        const AI_RESPONSES = ${aiResponsesJson};

        function getAIResponse(q) {
            const l = q.toLowerCase();
            for (const [k, r] of Object.entries(AI_RESPONSES)) {
                if (l.includes(k)) return r;
            }
            return {
                answer: 'Trọng tâm Chương ${m} VNR202 bám sát giáo trình Lịch sử Đảng: các kỳ Đại hội, đường lối chiến lược, các bước đột phá và bài học lịch sử cốt lõi.',
                sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202) — Chương ${m}'
            };
        }

        function sendAIPrompt(p) {
            document.getElementById('ai-input').value = p;
            sendAIMessage();
        }

        function sendAIMessage() {
            const i = document.getElementById('ai-input'), q = i.value.trim();
            if (!q) return;
            i.value = '';
            const h = document.getElementById('ai-chat-history');
            h.insertAdjacentHTML('beforeend', '<div class="flex justify-end"><div class="bg-philo-gold text-black font-medium rounded-xl p-3 max-w-[85%] text-xs"><p>' + q + '</p></div></div>');
            const lid = 'l' + Date.now();
            h.insertAdjacentHTML('beforeend', '<div id="' + lid + '" class="bg-white/5 rounded-xl p-3 text-xs"><p>⏳ Đang tra cứu Giáo trình VNR202...</p></div>');
            h.scrollTop = h.scrollHeight;
            setTimeout(() => {
                const r = getAIResponse(q);
                const le = document.getElementById(lid);
                if (le) le.outerHTML = '<div class="bg-white/5 rounded-xl p-3 border border-philo-gold/20 text-xs"><p class="text-xs font-bold text-philo-gold mb-1">🤖 AI Giáo trình VNR202</p><p class="text-philo-ivory/90 leading-relaxed mb-2">' + r.answer + '</p><p class="text-[10px] text-philo-gold/70 border-t border-white/10 pt-1">📖 <em>' + r.sourceRef + '</em></p></div>';
                h.scrollTop = h.scrollHeight;
            }, 500);
        }

        document.addEventListener('DOMContentLoaded', () => {
            loadMState();
            updateProgress();
            showLesson('M${m}-L1');
        });
    </script>
</body>
</html>`;
}

module.exports = { renderModulePage };

