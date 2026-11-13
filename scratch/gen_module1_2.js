const fs = require('fs');

function createModule1() {
    return `<!DOCTYPE html>
<html lang="vi" class="dark">
<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Chương 1: Nhập Môn & Sự Ra Đời Của Đảng (1920 - 1930) — VNR202</title>
    <meta name="description" content="Chương 1 Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202): Đối tượng, chức năng, phương pháp nghiên cứu, bối cảnh lịch sử, Nguyễn Ái Quốc và Cương lĩnh chính trị đầu tiên 3/2/1930." />
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
        #m1-progress-bar { transition: width 0.6s ease; }
        .reflection-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s;
            opacity: 0;
        }
        .reflection-answer.open {
            max-height: 600px;
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
                    <span>CHƯƠNG 1 • NHẬP MÔN & SỰ RA ĐỜI CỦA ĐẢNG (1920 - 1930)</span>
                </div>
                <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span class="philo-badge mb-3 inline-flex"><span class="material-symbols-outlined text-[14px]">history_edu</span> CHƯƠNG 01 • SESSIONS 1 - 4</span>
                        <h1 class="font-heading text-3xl md:text-5xl font-bold leading-tight text-philo-ivory mt-2">
                            Nhập Môn &amp;<br class="hidden md:block" />
                            <span class="text-philo-gold font-serif italic">Sự Ra Đời Của Đảng (1920 - 1930)</span>
                        </h1>
                        <p class="font-heading italic text-base md:text-lg text-philo-gold/80 mt-3 max-w-3xl leading-relaxed">
                            "Đảng muốn vững thì phải có chủ nghĩa làm cốt, trong Đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy." — Đối tượng, phương pháp nghiên cứu, phong trào yêu nước, Nguyễn Ái Quốc và Cương lĩnh chính trị đầu tiên 3/2/1930.
                        </p>
                        <div class="flex flex-wrap items-center gap-4 mt-4 text-xs text-philo-ivory/60">
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-philo-gold">menu_book</span> 6 bài học chuẩn</span>
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-philo-gold">timer</span> ~40 phút học</span>
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-philo-gold">quiz</span> 3 Formative Quizzes & 1 Module Exam</span>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button onclick="toggleAIPanel()" class="philo-btn-gold flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-[20px]">smart_toy</span>
                            <span>Trợ lý AI Chương 1</span>
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
                <span id="m1-progress-text" class="text-sm font-bold text-philo-gold">0 / 6 bài</span>
            </div>
            <div class="flex-grow max-w-md bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/10">
                <div id="m1-progress-bar" class="bg-gradient-to-r from-philo-gold to-yellow-500 h-full rounded-full" style="width: 0%"></div>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M1-L1"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M1-L2"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M1-L3"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M1-L4"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M1-L5"></div>
                <div class="w-3 h-3 rounded-full lesson-dot bg-white/20" id="dot-M1-L6"></div>
            </div>
        </div>

        <!-- 6 Lesson Navigation Tabs -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            <button onclick="showLesson('M1-L1')" id="tab-M1-L1" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài 1.1</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">Đối tượng, chức năng, nhiệm vụ</span>
            </button>
            <button onclick="showLesson('M1-L2')" id="tab-M1-L2" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài 1.2</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">Phương pháp nghiên cứu, học tập</span>
            </button>
            <button onclick="showLesson('M1-L3')" id="tab-M1-L3" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài 1.3</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">Bối cảnh lịch sử & Các phong trào</span>
            </button>
            <button onclick="showLesson('M1-L4')" id="tab-M1-L4" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài 1.4</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">Nguyễn Ái Quốc chuẩn bị thành lập Đảng</span>
            </button>
            <button onclick="showLesson('M1-L5')" id="tab-M1-L5" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài 1.5</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">Hội nghị 3/2/1930 & Cương lĩnh đầu tiên</span>
            </button>
            <button onclick="showLesson('M1-L6')" id="tab-M1-L6" class="lesson-tab p-3 rounded-xl border border-white/10 glass-panel text-left transition-all">
                <span class="text-[10px] uppercase tracking-wider block text-philo-gold/70 font-semibold">Bài 1.6</span>
                <span class="text-xs font-semibold tab-label text-philo-ivory line-clamp-2 mt-1">Ý nghĩa lịch sử thành lập Đảng</span>
            </button>
        </div>

        <!-- ======================================================== -->
        <!-- LESSON 1.1: ĐỐI TƯỢNG, CHỨC NĂNG, NHIỆM VỤ                 -->
        <!-- ======================================================== -->
        <article id="lesson-M1-L1" class="lesson-content space-y-6">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">BÀI HỌC 1.1 • SESSION 1 CHƯƠNG NHẬP MÔN</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        Đối tượng, chức năng và nhiệm vụ của môn Lịch sử Đảng
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">Vị trí khoa học, đối tượng nghiên cứu, 3 chức năng cốt lõi và 4 nhiệm vụ chủ yếu của môn học</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    <div class="p-4 rounded-xl border border-philo-gold/30 bg-philo-gold/5 text-sm">
                        <p class="font-bold text-philo-gold mb-1">Vị trí khoa học:</p>
                        <p class="leading-relaxed">
                            Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành, một bộ phận cấu thành của khoa học lịch sử. Môn học nghiên cứu có hệ thống các sự kiện lịch sử, cương lĩnh, đường lối, chủ trương, chính sách và sự chỉ đạo thực tiễn của Đảng từ khi thành lập (1930) đến nay.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="glass-panel p-5 rounded-xl border border-white/10">
                            <h4 class="font-heading font-bold text-philo-gold flex items-center gap-2 mb-3">
                                <span class="material-symbols-outlined text-[18px]">category</span>
                                1. Đối tượng nghiên cứu
                            </h4>
                            <ul class="text-sm space-y-2 list-disc list-inside">
                                <li><strong>Hệ thống sự kiện lịch sử Đảng:</strong> Quá trình Đảng ra đời, phát triển và lãnh đạo cách mạng qua các thời kỳ.</li>
                                <li><strong>Cương lĩnh, đường lối:</strong> Các cương lĩnh chính trị (2/1930, 10/1930, 1951, 1991, bổ sung 2011), chiến lược và sách lược.</li>
                                <li><strong>Tổ chức và xây dựng Đảng:</strong> Công tác chính trị, tư tưởng, tổ chức và đạo đức của Đảng qua các thời kỳ.</li>
                                <li><strong>Quy luật & bài học lịch sử:</strong> Tổng kết những thắng lợi, bài học kinh nghiệm và quy luật phát triển cách mạng.</li>
                            </ul>
                        </div>
                        <div class="glass-panel p-5 rounded-xl border border-philo-gold/30 bg-philo-gold/5">
                            <h4 class="font-heading font-bold text-philo-gold flex items-center gap-2 mb-3">
                                <span class="material-symbols-outlined text-[18px]">verified</span>
                                2. Hệ thống 3 chức năng cốt lõi
                            </h4>
                            <ul class="text-sm space-y-2 list-disc list-inside">
                                <li><strong>Chức năng nhận thức:</strong> Cung cấp tri thức khoa học, có hệ thống về quy luật ra đời và phát triển của Đảng cầm quyền.</li>
                                <li><strong>Chức năng giáo dục:</strong> Bồi dưỡng lý tưởng cách mạng, tinh thần yêu nước, chủ nghĩa anh hùng và đạo đức cách mạng.</li>
                                <li><strong>Chức năng dự báo và phê phán:</strong> Nhận thức quá khứ để hiểu rõ hiện tại và dự báo xu thế phát triển tương lai; tự phê bình và phê bình.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-5 bg-white/5 border border-white/10 rounded-xl">
                        <h4 class="font-heading font-bold text-philo-gold mb-3 flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">task_alt</span>
                            3. Bốn nhiệm vụ trọng yếu của khoa học Lịch sử Đảng
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                            <div class="p-3 bg-black/40 rounded-lg border border-white/5">
                                <strong>Nhiệm vụ 1:</strong> Trình bày có hệ thống Cương lĩnh, đường lối của Đảng qua các giai đoạn lịch sử cách mạng.
                            </div>
                            <div class="p-3 bg-black/40 rounded-lg border border-white/5">
                                <strong>Nhiệm vụ 2:</strong> Tái hiện chân thực, sinh động tiến trình lịch sử lãnh đạo, đấu tranh anh dũng của Đảng và nhân dân.
                            </div>
                            <div class="p-3 bg-black/40 rounded-lg border border-white/5">
                                <strong>Nhiệm vụ 3:</strong> Tổng kết lịch sử Đảng, làm rõ những kinh nghiệm lịch sử, quy luật cách mạng và bài học quý giá.
                            </div>
                            <div class="p-3 bg-black/40 rounded-lg border border-white/5">
                                <strong>Nhiệm vụ 4:</strong> Làm rõ vai trò lãnh đạo, sức chiến đấu của hệ thống tổ chức Đảng từ Trung ương đến cơ sở.
                            </div>
                        </div>
                    </div>

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài 1.1
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>Vì sao chức năng giáo dục của môn Lịch sử Đảng có ý nghĩa đặc biệt quan trọng đối với thế hệ trẻ và sinh viên hiện nay?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> Giáo dục truyền thống yêu nước nồng nàn, chủ nghĩa anh hùng cách mạng, củng cố niềm tin khoa học vào sự lãnh đạo của Đảng và con đường đi lên chủ nghĩa xã hội; rèn luyện bản lĩnh chính trị và tinh thần tự lực tự cường trước các luận điệu xuyên tạc lịch sử.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        <button onclick="openFormativeQuiz('M1-FQ1')" class="px-5 py-2.5 rounded-xl border border-philo-gold/40 text-philo-gold text-xs font-bold hover:bg-philo-gold/10 transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined text-sm">quiz</span> Trắc nghiệm nhanh Bài 1.1 &amp; 1.2
                        </button>
                        <button onclick="completeLesson('M1-L1')" id="btn-complete-M1-L1" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- LESSON 1.2: PHƯƠNG PHÁP NGHIÊN CỨU & HỌC TẬP -->
        <article id="lesson-M1-L2" class="lesson-content space-y-6 hidden">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">BÀI HỌC 1.2 • SESSION 2 CHƯƠNG NHẬP MÔN</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        Phương pháp nghiên cứu, học tập môn Lịch sử Đảng
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">Phương pháp luận sử học Mácxít, phương pháp lịch sử và phương pháp logic, các nguyên tắc khoa học</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="p-5 rounded-xl bg-white/5 border border-white/10">
                            <h4 class="font-heading font-bold text-philo-gold mb-2 flex items-center gap-2">
                                <span class="material-symbols-outlined text-[18px]">timeline</span>
                                Phương pháp lịch sử
                            </h4>
                            <p class="text-xs leading-relaxed text-philo-ivory/80">
                                Nghiên cứu và trình bày các sự kiện, quá trình phát triển của Đảng theo đúng <strong>trình tự thời gian</strong>, không gian cụ thể, tái hiện lại lịch sử với đầy đủ tính sống động, chân thực, quanh co và phức tạp vốn có của hiện thực.
                            </p>
                        </div>
                        <div class="p-5 rounded-xl bg-white/5 border border-white/10">
                            <h4 class="font-heading font-bold text-philo-gold mb-2 flex items-center gap-2">
                                <span class="material-symbols-outlined text-[18px]">account_tree</span>
                                Phương pháp logic
                            </h4>
                            <p class="text-xs leading-relaxed text-philo-ivory/80">
                                Đi sâu tìm hiểu cái <strong>bản chất, cái quy luật phổ biến</strong>, cái tất yếu của các sự kiện lịch sử; phân tích, so sánh, tổng hợp để rút ra những kết luận khái quát, không bị chi phối bởi các chi tiết ngẫu nhiên, thứ yếu.
                            </p>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl border border-philo-gold/30 bg-philo-gold/5 text-sm space-y-2">
                        <h4 class="font-bold text-philo-gold">Mối quan hệ thống nhất biện chứng:</h4>
                        <p class="leading-relaxed">
                            Phương pháp lịch sử và logic luôn gắn bó mật thiết. Phương pháp lịch sử là cơ sở, cung cấp chất liệu thực tiễn phong phú; phương pháp logic định hướng tư duy để tìm ra bản chất, quy luật vận động nội tại của lịch sử Đảng.
                        </p>
                    </div>

                    <div class="p-5 rounded-xl bg-black/40 border border-philo-warmGold/20">
                        <h4 class="font-heading font-bold text-philo-gold mb-3 flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px]">balance</span>
                            Nguyên tắc phương pháp luận hàng đầu: Tính Đảng & Tính Khoa học
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="p-3 bg-white/5 rounded-lg">
                                <strong class="text-white block mb-1">Tính Đảng:</strong> Đứng vững trên lập trường của giai cấp vô sản, chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh; kiên định mục tiêu độc lập dân tộc và CNXH.
                            </div>
                            <div class="p-3 bg-white/5 rounded-lg">
                                <strong class="text-white block mb-1">Tính Khoa học:</strong> Tôn trọng sự thật lịch sử khách quan, dựa trên các cứ liệu, tài liệu văn kiện chính xác; đánh giá toàn diện, biện chứng, không tô hồng hay bôi đen lịch sử.
                            </div>
                        </div>
                    </div>

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài 1.2
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>Vì sao nghiên cứu Lịch sử Đảng phải kết hợp nhuần nhuyễn tính Đảng với tính khoa học?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> Tính Đảng và tính khoa học thống nhất chặt chẽ. Tính Đảng đúng đắn chỉ đạt được khi dựa trên cơ sở khoa học khách quan, trung thực; ngược lại tính khoa học phục vụ đắc lực cho mục tiêu chính trị chân chính của Đảng và dân tộc.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        <button onclick="showLesson('M1-L1')" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Bài trước</button>
                        <button onclick="completeLesson('M1-L2')" id="btn-complete-M1-L2" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- LESSON 1.3: BỐI CẢNH LỊCH SỬ & PHONG TRÀO YÊU NƯỚC -->
        <article id="lesson-M1-L3" class="lesson-content space-y-6 hidden">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">BÀI HỌC 1.3 • SESSION 3 CHƯƠNG 1</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        Bối cảnh lịch sử & Các phong trào yêu nước trước 1930
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">Chính sách thống trị của thực dân Pháp, biến đổi cơ cấu xã hội và sự bế tắc của các phong trào yêu nước</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    <div class="space-y-4">
                        <h3 class="font-heading text-lg font-bold text-philo-gold flex items-center gap-2">
                            <span class="material-symbols-outlined text-[20px]">public</span>
                            1. Tình hình thế giới và chính sách thuộc địa của Pháp
                        </h3>
                        <p class="text-sm">
                            Từ cuối thế kỷ XIX, chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, đẩy mạnh xâm chiếm và áp bức thuộc địa. Ngày 1/9/1858, thực dân Pháp nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), chính thức xâm lược Việt Nam. Qua các bản Hiệp ước Nhâm Tuất (1862), Giáp Tuất (1874), Hácmăng (1883) và Patơnốt (1884), Pháp đã biến Việt Nam từ một nước phong kiến độc lập thành thuộc địa nửa phong kiến.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                            <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
                                <strong class="text-philo-gold block mb-1">Chính trị:</strong>
                                Thực hiện chính sách "chia để trị" (chia thành 3 kỳ: Bắc Kỳ, Trung Kỳ, Nam Kỳ với 3 chế độ cai trị khác nhau), tước đoạt toàn bộ quyền tự do dân chủ.
                            </div>
                            <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
                                <strong class="text-philo-gold block mb-1">Kinh tế:</strong>
                                Hai cuộc khai thác thuộc địa (1897-1914 và 1919-1929) vơ vét tài nguyên khoáng sản, độc quyền ngoại thương, đánh thuế khóa nặng nề (thuế muối, rượu, thuốc phiện).
                            </div>
                            <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
                                <strong class="text-philo-gold block mb-1">Văn hóa - Xã hội:</strong>
                                Thực hiện chính sách "ngu dân", lập nhiều nhà tù hơn trường học, dùng rượu cồn và thuốc phiện đầu độc thế hệ trẻ, kìm hãm nhân dân trong tăm tối.
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <h3 class="font-heading text-lg font-bold text-philo-gold flex items-center gap-2">
                            <span class="material-symbols-outlined text-[20px]">groups</span>
                            2. Các phong trào yêu nước và nguyên nhân thất bại
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="p-4 bg-black/40 rounded-xl border border-white/10">
                                <strong class="text-philo-gold block text-sm mb-1">Khuynh hướng phong kiến:</strong>
                                Phong trào Cần Vương (1885 - 1896) do vua Hàm Nghi và Tôn Thất Thuyết khởi xướng; Khởi nghĩa nông dân Yên Thế (1884 - 1913) do Hoàng Hoa Thám lãnh đạo. Thất bại do hệ tư tưởng phong kiến đã lỗi thời.
                            </div>
                            <div class="p-4 bg-black/40 rounded-xl border border-white/10">
                                <strong class="text-philo-gold block text-sm mb-1">Khuynh hướng dân chủ tư sản:</strong>
                                Xu hướng bạo động của Phan Bội Châu (phong trào Đông Du); Xu hướng cải cách của Phan Châu Trinh ("Khai dân trí, chấn dân khí"); Khởi nghĩa Yên Bái (2/1930) của Việt Nam Quốc dân Đảng do Nguyễn Thái Học lãnh đạo ("Không thành công cũng thành nhân").
                            </div>
                        </div>
                        <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-xs text-red-200">
                            <strong>Khủng hoảng sâu sắc:</strong> Sự thất bại của các phong trào yêu nước chứng tỏ giai cấp phong kiến và tư sản dân tộc không đủ khả năng lãnh đạo cách mạng giải phóng dân tộc. Lịch sử đặt ra yêu cầu cấp bách phải tìm ra một con đường cứu nước mới và một giai cấp tiên phong lãnh đạo.
                        </div>
                    </div>

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài 1.3
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>Mâu thuẫn chủ yếu và cơ bản nhất trong lòng xã hội Việt Nam thời kỳ thuộc địa nửa phong kiến là gì?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai phản động (mâu thuẫn dân tộc); bên cạnh mâu thuẫn giữa nhân dân lao động (chủ yếu là nông dân) với giai cấp địa chủ phong kiến (mâu thuẫn giai cấp). Trong đó, mâu thuẫn dân tộc là chủ yếu nhất.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        <button onclick="showLesson('M1-L2')" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Bài trước</button>
                        <button onclick="completeLesson('M1-L3')" id="btn-complete-M1-L3" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- LESSON 1.4: NGUYỄN ÁI QUỐC CHUẨN BỊ -->
        <article id="lesson-M1-L4" class="lesson-content space-y-6 hidden">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">BÀI HỌC 1.4 • SESSIONS 3 - 4</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        Nguyễn Ái Quốc chuẩn bị về tư tưởng, chính trị & tổ chức
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">Từ người thanh niên yêu nước đến người chiến sĩ cộng sản; ba mặt chuẩn bị chu đáo để thành lập Đảng</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    <div class="p-4 rounded-xl border border-philo-gold/30 bg-philo-gold/5 text-sm">
                        <h4 class="font-bold text-philo-gold mb-1">Bước ngoặt lịch sử năm 1920:</h4>
                        <p class="leading-relaxed">
                            Tháng 7/1920, Nguyễn Ái Quốc đọc bản *Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa* của V.I. Lênin trên báo L'Humanité. Người khẳng định: <em>"Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản"</em>. Tháng 12/1920 tại Đại hội Tours, Người bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        <div class="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <strong class="text-philo-gold block text-sm">1. Chuẩn bị Tư tưởng</strong>
                            <p class="leading-relaxed text-philo-ivory/80">
                                Tích cực truyền bá chủ nghĩa Mác - Lênin vào phong trào công nhân và phong trào yêu nước Việt Nam qua báo *Le Paria (Người cùng khổ)*, báo *Thanh niên*, tác phẩm *Bản án chế độ thực dân Pháp* (1925).
                            </p>
                        </div>
                        <div class="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <strong class="text-philo-gold block text-sm">2. Chuẩn bị Chính trị</strong>
                            <p class="leading-relaxed text-philo-ivory/80">
                                Xuất bản tác phẩm *Đường Kách mệnh* (1927). Người chỉ rõ: Cách mạng giải phóng dân tộc là sự nghiệp của quần chúng, công - nông là gốc của cách mạng; phải có Đảng cách mạng lãnh đạo và liên minh với phong trào cách mạng thế giới.
                            </p>
                        </div>
                        <div class="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <strong class="text-philo-gold block text-sm">3. Chuẩn bị Tổ chức</strong>
                            <p class="leading-relaxed text-philo-ivory/80">
                                Tháng 6/1925 tại Quảng Châu (Trung Quốc), thành lập **Hội Việt Nam Cách mạng Thanh niên**, hạt nhân là Cộng sản Đoàn. Mở các lớp đào tạo cán bộ cốt cán, đưa về nước thực hiện phong trào "Vô sản hóa" (1928).
                            </p>
                        </div>
                    </div>

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài 1.4
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>Phong trào "Vô sản hóa" (1928) có tác động quyết định như thế nào đối với phong trào công nhân Việt Nam?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> Đưa cán bộ hội viên vào các hầm mỏ, nhà máy, đồn điền cùng lao động với công nhân để rèn luyện lập trường giai cấp vô sản, truyền bá sâu rộng chủ nghĩa Mác - Lênin, đưa phong trào công nhân chuyển nhanh từ trình độ "tự phát" lên "tự giác".
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        <button onclick="showLesson('M1-L3')" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Bài trước</button>
                        <button onclick="completeLesson('M1-L4')" id="btn-complete-M1-L4" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- LESSON 1.5: HỘI NGHỊ THÀNH LẬP ĐẢNG & CƯƠNG LĨNH ĐẦU TIÊN -->
        <article id="lesson-M1-L5" class="lesson-content space-y-6 hidden">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">BÀI HỌC 1.5 • SESSION 4 CHƯƠNG 1</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        Hội nghị thành lập Đảng & Cương lĩnh chính trị đầu tiên (3/2/1930)
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">Sự xuất hiện 3 tổ chức cộng sản năm 1929, Hội nghị hợp nhất tại Cửu Long và nội dung Cương lĩnh đầu tiên</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    <div class="space-y-3">
                        <h4 class="font-heading text-base font-bold text-philo-gold">1. Bối cảnh hợp nhất ba tổ chức cộng sản</h4>
                        <p class="text-sm">
                            Năm 1929, phong trào cách mạng dâng cao dẫn đến sự ra đời của 3 tổ chức cộng sản:
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div class="p-3 bg-white/5 border border-white/10 rounded-lg"><strong>Đông Dương Cộng sản Đảng</strong> (6/1929 tại Bắc Kỳ).</div>
                            <div class="p-3 bg-white/5 border border-white/10 rounded-lg"><strong>An Nam Cộng sản Đảng</strong> (11/1929 tại Nam Kỳ).</div>
                            <div class="p-3 bg-white/5 border border-white/10 rounded-lg"><strong>Đông Dương Cộng sản Liên đoàn</strong> (9/1929 tại Trung Kỳ, chính thức 24/2/1930).</div>
                        </div>
                        <p class="text-xs text-philo-gold/90 italic">
                            Sự tồn tại biệt lập và tranh giành ảnh hưởng của ba tổ chức đặt cách mạng trước nguy cơ phân liệt. Trước tình hình đó, với tư cách phái viên Quốc tế Cộng sản, Nguyễn Ái Quốc triệu tập Hội nghị hợp nhất tại Cửu Long (Hương Cảng, Trung Quốc) từ 6/1 đến 7/2/1930.
                        </p>
                    </div>

                    <div class="p-5 bg-black/40 border border-philo-warmGold/20 rounded-xl space-y-4">
                        <h4 class="font-heading text-base font-bold text-philo-gold">2. Nội dung Cương lĩnh chính trị đầu tiên của Đảng</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="p-3 bg-white/5 rounded-lg space-y-1">
                                <strong class="text-philo-gold">Phương hướng chiến lược:</strong>
                                <p>Làm "tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản".</p>
                            </div>
                            <div class="p-3 bg-white/5 rounded-lg space-y-1">
                                <strong class="text-philo-gold">Nhiệm vụ cách mạng:</strong>
                                <p>Đánh đổ đế quốc Pháp và phong kiến, làm cho nước Việt Nam hoàn toàn độc lập; tịch thu ruộng đất chia cho dân cày nghèo; thực hiện ngày làm 8 giờ.</p>
                            </div>
                            <div class="p-3 bg-white/5 rounded-lg space-y-1">
                                <strong class="text-philo-gold">Lực lượng cách mạng:</strong>
                                <p>Công nhân và nông dân là lực lượng cơ bản (gốc cách mạng); liên minh chặt chẽ với tiểu tư sản, trí thức; tranh thủ hoặc trung lập phú nông, trung tiểu địa chủ, tư sản dân tộc.</p>
                            </div>
                            <div class="p-3 bg-white/5 rounded-lg space-y-1">
                                <strong class="text-philo-gold">Vai trò lãnh đạo:</strong>
                                <p>Giai cấp vô sản là lực lượng lãnh đạo thông qua đội tiên phong là Đảng Cộng sản Việt Nam vũ trang bằng chủ nghĩa Mác - Lênin.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài 1.5
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>Tính chất khoa học và sáng tạo của Cương lĩnh chính trị đầu tiên thể hiện ở điểm mấu chốt nào?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu; đánh giá đúng vai trò động lực to lớn của công - nông và tập hợp được mọi lực lượng yêu nước, tiến bộ trong mặt trận dân tộc thống nhất, giải quyết đúng đắn mối quan hệ giữa dân tộc và giai cấp.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        <button onclick="showLesson('M1-L4')" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Bài trước</button>
                        <button onclick="completeLesson('M1-L5')" id="btn-complete-M1-L5" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- LESSON 1.6: Ý NGHĨA LỊCH SỬ THÀNH LẬP ĐẢNG -->
        <article id="lesson-M1-L6" class="lesson-content space-y-6 hidden">
            <div class="rounded-2xl border border-philo-gold/20 overflow-hidden glass-panel">
                <div class="lesson-header-academic">
                    <span class="philo-badge mb-2 inline-flex">BÀI HỌC 1.6 • SESSION 4 TỔNG KẾT</span>
                    <h2 class="font-heading text-2xl md:text-3xl font-bold text-philo-ivory">
                        Ý nghĩa lịch sử của việc thành lập Đảng Cộng sản Việt Nam
                    </h2>
                    <p class="text-sm text-philo-ivory/70 mt-1">Quy luật ra đời của Đảng, chấm dứt khủng hoảng đường lối cứu nước và bước ngoặt lịch sử vĩ đại</p>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-philo-ivory/90 leading-relaxed font-light">
                    <div class="p-5 rounded-xl bg-philo-gold/10 border border-philo-gold/30">
                        <h4 class="font-heading font-bold text-philo-gold text-base mb-2">Quy luật đặc thù về sự ra đời của Đảng:</h4>
                        <p class="text-sm leading-relaxed">
                            Khác với các đảng cộng sản ở các nước tư bản Tây Âu (chỉ gồm Chủ nghĩa Mác kết hợp với Phong trào công nhân), Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố:
                        </p>
                        <div class="mt-3 p-3 bg-black/50 border border-philo-gold/40 rounded-lg text-center font-bold text-philo-gold text-sm tracking-wider">
                            Chủ nghĩa Mác - Lênin &nbsp;+&nbsp; Phong trào công nhân &nbsp;+&nbsp; Phong trào yêu nước
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div class="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <strong class="text-philo-gold block text-sm">Chấm dứt khủng hoảng đường lối</strong>
                            <p class="leading-relaxed text-philo-ivory/80">
                                Chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước và tổ chức lãnh đạo kéo dài suốt hơn hai phần ba thế kỷ (kể từ khi thực dân Pháp xâm lược 1858).
                            </p>
                        </div>
                        <div class="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <strong class="text-philo-gold block text-sm">Bước ngoặt vĩ đại của dân tộc</strong>
                            <p class="leading-relaxed text-philo-ivory/80">
                                Đưa cách mạng Việt Nam trở thành một bộ phận khăng khít của phong trào cách mạng vô sản thế giới, khẳng định quyền lãnh đạo duy nhất thuộc về giai cấp công nhân.
                            </p>
                        </div>
                    </div>

                    <!-- Reflection Question -->
                    <div class="border-t border-philo-warmGold/20 pt-6">
                        <h3 class="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-philo-warmGold">psychology</span> Câu hỏi phản tư Bài 1.6
                        </h3>
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-black/30 rounded-xl hover:bg-philo-warmGold/10 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>Vì sao việc phong trào yêu nước trở thành một yếu tố cấu thành Đảng là sáng tạo lý luận độc đáo của Chủ tịch Hồ Chí Minh?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-philo-ivory/70">
                                <strong class="text-philo-gold block mb-1">Gợi ý trả lời:</strong> Xuất phát từ thực tiễn Việt Nam là một nước thuộc địa, truyền thống yêu nước có chiều sâu nghìn năm lịch sử, phong trào công nhân và phong trào yêu nước có mối liên hệ máu thịt gắn bó, chia sẻ cùng mục tiêu độc lập dân tộc.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-philo-warmGold/20">
                        <button onclick="showLesson('M1-L5')" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Bài trước</button>
                        <button onclick="completeLesson('M1-L6')" id="btn-complete-M1-L6" class="philo-btn-gold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                            <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- MODULE FINAL EXAM BANNER -->
        <div id="module-quiz-banner" class="hidden mt-8 p-6 rounded-2xl glass-panel border border-philo-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h3 class="font-heading text-xl font-bold text-philo-gold">Chúc mừng bạn đã hoàn thành 6 bài học Chương 1!</h3>
                <p class="text-xs text-philo-ivory/80 mt-1">Hãy tham gia bài thi tổng kết 10 câu hỏi để củng cố toàn bộ kiến thức và mở khóa danh hiệu vinh dự.</p>
            </div>
            <button onclick="openModuleQuiz()" class="philo-btn-gold shrink-0">Bắt đầu thi tổng kết</button>
        </div>
    </main>

    <!-- SLIDE-OVER AI PANEL -->
    <aside id="ai-panel" class="fixed top-0 right-0 w-full sm:w-96 h-full bg-[#120202] border-l border-philo-gold/30 shadow-2xl z-50 p-6 flex flex-col hidden-panel">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-philo-gold">smart_toy</span>
                <h3 class="font-heading font-bold text-philo-ivory">Trợ Lý AI Chương 1</h3>
            </div>
            <button onclick="toggleAIPanel()" class="text-philo-ivory/60 hover:text-white"><span class="material-symbols-outlined">close</span></button>
        </div>
        <div class="py-3 flex flex-wrap gap-1.5 border-b border-white/10">
            <button onclick="sendAIPrompt('Đối tượng nghiên cứu Lịch sử Đảng?')" class="text-[10px] bg-white/5 hover:bg-philo-gold/20 text-philo-gold px-2.5 py-1 rounded-full border border-philo-gold/20">Đối tượng Lịch sử Đảng</button>
            <button onclick="sendAIPrompt('Quy luật ra đời của Đảng?')" class="text-[10px] bg-white/5 hover:bg-philo-gold/20 text-philo-gold px-2.5 py-1 rounded-full border border-philo-gold/20">Quy luật ra đời của Đảng</button>
            <button onclick="sendAIPrompt('Cương lĩnh chính trị đầu tiên 3/2/1930?')" class="text-[10px] bg-white/5 hover:bg-philo-gold/20 text-philo-gold px-2.5 py-1 rounded-full border border-philo-gold/20">Cương lĩnh đầu tiên</button>
        </div>
        <div id="ai-chat-history" class="flex-grow overflow-y-auto py-4 space-y-3 text-xs">
            <div class="bg-white/5 rounded-xl p-3 border border-philo-gold/20">
                <p class="font-bold text-philo-gold mb-1">🤖 AI Giáo trình VNR202</p>
                <p class="text-philo-ivory/80">Chào bạn! Tôi là trợ lý AI chuyên sâu môn Lịch sử Đảng Cộng sản Việt Nam (VNR202) Chương 1. Bạn cần giải đáp câu hỏi hay tài liệu nào?</p>
            </div>
        </div>
        <div class="pt-3 border-t border-white/10 flex gap-2">
            <input type="text" id="ai-input" placeholder="Hỏi AI về Chương 1..." class="flex-grow bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-philo-gold" onkeydown="if(event.key==='Enter') sendAIMessage()" />
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
    <div id="achievement-toast" class="fixed bottom-6 right-6 glass-panel border border-philo-gold p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 hidden achievement-earned">
        <span class="text-3xl" id="achievement-icon">🎖️</span>
        <div>
            <h4 class="font-bold text-philo-gold text-sm" id="achievement-name">Mở khóa danh hiệu</h4>
            <p class="text-xs text-philo-ivory/80" id="achievement-desc">Mô tả danh hiệu</p>
        </div>
    </div>

    <div id="footer-placeholder"></div>

    <script>
        const M1_LESSONS = ['M1-L1', 'M1-L2', 'M1-L3', 'M1-L4', 'M1-L5', 'M1-L6'];
        let M1_STATE = {
            completedLessons: new Set(),
            quizResults: {}
        };

        function loadM1State() {
            try {
                const s = localStorage.getItem('vnr202_m1_state');
                if (s) {
                    const parsed = JSON.parse(s);
                    M1_STATE.completedLessons = new Set(parsed.completedLessons || []);
                    M1_STATE.quizResults = parsed.quizResults || {};
                }
            } catch(e) {}
        }

        function saveM1State() {
            localStorage.setItem('vnr202_m1_state', JSON.stringify({
                completedLessons: Array.from(M1_STATE.completedLessons),
                quizResults: M1_STATE.quizResults
            }));
        }

        function showLesson(id) {
            M1_LESSONS.forEach(l => {
                const el = document.getElementById('lesson-' + l);
                const tab = document.getElementById('tab-' + l);
                if (el) el.classList.add('hidden');
                if (tab) tab.classList.remove('active-tab');
            });
            const activeEl = document.getElementById('lesson-' + id);
            const activeTab = document.getElementById('tab-' + id);
            if (activeEl) activeEl.classList.remove('hidden');
            if (activeTab) activeTab.classList.add('active-tab');
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }

        function completeLesson(id) {
            M1_STATE.completedLessons.add(id);
            saveM1State();
            updateProgress();
            const btn = document.getElementById('btn-complete-' + id);
            if (btn) {
                btn.classList.remove('philo-btn-gold');
                btn.classList.add('bg-emerald-600', 'text-white');
                btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span> Đã hoàn thành ✓';
            }
            const idx = M1_LESSONS.indexOf(id);
            if (idx < M1_LESSONS.length - 1) {
                setTimeout(() => showLesson(M1_LESSONS[idx + 1]), 400);
            }
        }

        function updateProgress() {
            const count = M1_STATE.completedLessons.size;
            const pct = Math.round((count / 6) * 100);
            const bar = document.getElementById('m1-progress-bar');
            const txt = document.getElementById('m1-progress-text');
            if (bar) bar.style.width = pct + '%';
            if (txt) txt.textContent = count + ' / 6 bài (' + pct + '%)';
            M1_LESSONS.forEach(l => {
                const dot = document.getElementById('dot-' + l);
                if (dot) {
                    if (M1_STATE.completedLessons.has(l)) dot.classList.add('completed');
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
        const FORMATIVE_QUIZZES_M1 = {
            'M1-FQ1': {
                id: 'M1-FQ1',
                title: 'Trắc nghiệm nhanh: Đối tượng, Chức năng & Phương pháp Lịch sử Đảng',
                passingScore: 75,
                questions: [
                    {
                        id: 'fq1_1',
                        text: 'Đối tượng nghiên cứu chủ yếu của môn Lịch sử Đảng Cộng sản Việt Nam là gì?',
                        options: [
                            { id: 'a', text: 'Quá trình biến đổi của tự nhiên và môi trường xã hội Việt Nam' },
                            { id: 'b', text: 'Sự ra đời, phát triển và hoạt động lãnh đạo của Đảng qua các thời kỳ' },
                            { id: 'c', text: 'Toàn bộ lịch sử các triều đại phong kiến phương Đông' },
                            { id: 'd', text: 'Hoạt động ngoại giao của các nước lớn trên thế giới' }
                        ],
                        correctOptionId: 'b',
                        rationale: 'Đối tượng môn học là nghiên cứu các sự kiện lịch sử, cương lĩnh đường lối và sự lãnh đạo của Đảng Cộng sản Việt Nam.'
                    },
                    {
                        id: 'fq1_2',
                        text: 'Hệ thống chức năng cơ bản của môn Lịch sử Đảng gồm những chức năng nào?',
                        options: [
                            { id: 'a', text: 'Nhận thức, Giáo dục, Dự báo và phê phán' },
                            { id: 'b', text: 'Lưu trữ, Thống kê, Mô tả' },
                            { id: 'c', text: 'Quân sự, Ngoại giao, Quốc phòng' },
                            { id: 'd', text: 'Kinh tế, Thương mại, Đầu tư' }
                        ],
                        correctOptionId: 'a',
                        rationale: 'Môn học có 3 chức năng cốt lõi: Chức năng nhận thức, Chức năng giáo dục và Chức năng dự báo - phê phán.'
                    },
                    {
                        id: 'fq1_3',
                        text: 'Quy luật ra đời của Đảng Cộng sản Việt Nam là sự kết hợp của những yếu tố nào?',
                        options: [
                            { id: 'a', text: 'Chủ nghĩa Mác - Lênin kết hợp với phong trào công nhân' },
                            { id: 'b', text: 'Chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước' },
                            { id: 'c', text: 'Phong trào nông dân kết hợp với trí thức tiểu tư sản' },
                            { id: 'd', text: 'Phong trào Cần Vương kết hợp với tư sản dân tộc' }
                        ],
                        correctOptionId: 'b',
                        rationale: 'Đây là luận điểm sáng tạo của Chủ tịch Hồ Chí Minh: Đảng ra đời từ sự kết hợp của Chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước.'
                    }
                ]
            }
        };

        const MODULE_QUIZ_M1 = {
            id: 'MODULE_QUIZ_M1',
            title: 'Kiểm tra Tổng kết Chương 1: Sự ra đời của Đảng & Cương lĩnh đầu tiên',
            passingScore: 70,
            achievement: 'm1-scholar',
            questions: [
                {
                    id: 'mq1_1',
                    text: 'Thực dân Pháp chính thức nổ súng xâm lược Việt Nam vào thời gian nào và ở đâu?',
                    options: [
                        { id: 'a', text: '1/9/1858 tại bán đảo Sơn Trà (Đà Nẵng)' },
                        { id: 'b', text: '20/11/1873 tại thành Hà Nội' },
                        { id: 'c', text: '5/6/1911 tại Bến Nhà Rồng' },
                        { id: 'd', text: '17/2/1859 tại Gia Định' }
                    ],
                    correctOptionId: 'a',
                    rationale: 'Ngày 1/9/1858 liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng).'
                },
                {
                    id: 'mq1_2',
                    text: 'Mâu thuẫn cơ bản và chủ yếu nhất trong xã hội Việt Nam thời thuộc địa nửa phong kiến là:',
                    options: [
                        { id: 'a', text: 'Mâu thuẫn giữa giai cấp nông dân với giai cấp địa chủ phong kiến' },
                        { id: 'b', text: 'Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp và tay sai phản động' },
                        { id: 'c', text: 'Mâu thuẫn giữa tư sản dân tộc với tư sản mại bản' },
                        { id: 'd', text: 'Mâu thuẫn giữa vô sản và tư sản' }
                    ],
                    correctOptionId: 'b',
                    rationale: 'Mâu thuẫn dân tộc giữa toàn thể nhân dân Việt Nam với thực dân Pháp là mâu thuẫn chủ yếu hàng đầu.'
                },
                {
                    id: 'mq1_3',
                    text: 'Tác phẩm nào của Nguyễn Ái Quốc xuất bản năm 1927 đã chuẩn bị về mặt chính trị và tư tưởng cho sự ra đời của Đảng?',
                    options: [
                        { id: 'a', text: 'Bản án chế độ thực dân Pháp' },
                        { id: 'b', text: 'Đường Kách mệnh' },
                        { id: 'c', text: 'Tuyên ngôn của Hội Liên hiệp thuộc địa' },
                        { id: 'd', text: 'Con rồng tre' }
                    ],
                    correctOptionId: 'b',
                    rationale: 'Tác phẩm "Đường Kách mệnh" (1927) tập hợp các bài giảng huấn luyện cán bộ của Nguyễn Ái Quốc tại Quảng Châu.'
                },
                {
                    id: 'mq1_4',
                    text: 'Tổ chức tiền thân trực tiếp chuẩn bị về mặt tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam là:',
                    options: [
                        { id: 'a', text: 'Hội Việt Nam Cách mạng Thanh niên (6/1925)' },
                        { id: 'b', text: 'Việt Nam Quang phục Hội' },
                        { id: 'c', text: 'Tân Việt Cách mạng Đảng' },
                        { id: 'd', text: 'Việt Nam Quốc dân Đảng' }
                    ],
                    correctOptionId: 'a',
                    rationale: 'Hội Việt Nam Cách mạng Thanh niên do Nguyễn Ái Quốc sáng lập tháng 6/1925 là tổ chức quá độ chuẩn bị cho sự ra đời của Đảng.'
                },
                {
                    id: 'mq1_5',
                    text: 'Hội nghị hợp nhất các tổ chức cộng sản Việt Nam diễn ra từ ngày 6/1 đến 7/2/1930 tại đâu và do ai chủ trì?',
                    options: [
                        { id: 'a', text: 'Tại Ma Cao (Trung Quốc), do đồng chí Lê Hồng Phong chủ trì' },
                        { id: 'b', text: 'Tại Cửu Long (Hương Cảng, Trung Quốc), do đồng chí Nguyễn Ái Quốc chủ trì' },
                        { id: 'c', text: 'Tại Pác Bó (Cao Bằng), do đồng chí Trường Chinh chủ trì' },
                        { id: 'd', text: 'Tại Quảng Châu (Trung Quốc), do đồng chí Trần Phú chủ trì' }
                    ],
                    correctOptionId: 'b',
                    rationale: 'Hội nghị thành lập Đảng họp tại Cửu Long (Hương Cảng) từ 6/1 đến 7/2/1930 dưới sự chủ trì của lãnh tụ Nguyễn Ái Quốc.'
                },
                {
                    id: 'mq1_6',
                    text: 'Cương lĩnh chính trị đầu tiên của Đảng xác định phương hướng chiến lược của cách mạng Việt Nam là gì?',
                    options: [
                        { id: 'a', text: 'Làm cách mạng thổ địa trước, sau đó làm cách mạng giải phóng dân tộc' },
                        { id: 'b', text: 'Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản' },
                        { id: 'c', text: 'Lập ngay nền chuyên chính vô sản và xóa bỏ hoàn toàn quyền tư hữu' },
                        { id: 'd', text: 'Tiến hành cải cách kinh tế theo con đường tư bản chủ nghĩa' }
                    ],
                    correctOptionId: 'b',
                    rationale: 'Trích Chánh cương vắn tắt của Đảng: "chủ trương làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản".'
                },
                {
                    id: 'mq1_7',
                    text: 'Theo Cương lĩnh chính trị đầu tiên, hai lực lượng nòng cốt cơ bản ("gốc của cách mạng") là giai cấp nào?',
                    options: [
                        { id: 'a', text: 'Công nhân và Nông dân' },
                        { id: 'b', text: 'Tiểu tư sản và Trí thức' },
                        { id: 'c', text: 'Tư sản dân tộc và Địa chủ vừa' },
                        { id: 'd', text: 'Binh lính và Thanh niên' }
                    ],
                    correctOptionId: 'a',
                    rationale: 'Cương lĩnh chỉ rõ: Công nhân và nông dân là lực lượng cách mạng đông đảo và là gốc cách mạng.'
                },
                {
                    id: 'mq1_8',
                    text: 'Ý nghĩa lịch sử quan trọng nhất của sự kiện thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930 là gì?',
                    options: [
                        { id: 'a', text: 'Lật đổ hoàn toàn chính quyền thực dân Pháp trên toàn cõi Đông Dương' },
                        { id: 'b', text: 'Chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo' },
                        { id: 'c', text: 'Buộc đế quốc Mỹ phải rút quân về nước' },
                        { id: 'd', text: 'Xóa bỏ hoàn toàn tình trạng đói nghèo trong xã hội' }
                    ],
                    correctOptionId: 'b',
                    rationale: 'Sự kiện thành lập Đảng chấm dứt khủng hoảng kéo dài về đường lối và tổ chức cứu nước trong suốt 2/3 thế kỷ.'
                }
            ]
        };

        let currentQuizData = null;
        let currentQuizAnswers = {};

        function openFormativeQuiz(id) {
            const q = FORMATIVE_QUIZZES_M1[id];
            if (q) renderQuizModal(q);
        }

        function openModuleQuiz() {
            renderQuizModal(MODULE_QUIZ_M1);
        }

        function renderQuizModal(quiz) {
            currentQuizData = quiz;
            currentQuizAnswers = {};
            document.getElementById('quiz-modal-title').textContent = quiz.title;
            document.getElementById('quiz-modal-sub').textContent = 'Cần đạt ' + quiz.passingScore + '% • ' + quiz.questions.length + ' câu hỏi trắc nghiệm';
            let h = '<div class="space-y-6">';
            quiz.questions.forEach((q, i) => {
                h += `<div class="quiz-question" data-qid="${q.id}">
                    <p class="font-medium text-sm mb-3">${i + 1}. ${q.text}</p>
                    <div class="space-y-2">`;
                q.options.forEach(o => {
                    h += `<label class="quiz-option flex items-start gap-3 p-3 rounded-xl border border-white/10 cursor-pointer hover:border-philo-gold/50 hover:bg-white/5 transition-all">
                        <input type="radio" name="q_${q.id}" value="${o.id}" onclick="selectAnswer('${q.id}','${o.id}')" class="mt-0.5 flex-shrink-0 text-philo-gold focus:ring-philo-gold">
                        <span class="text-xs md:text-sm text-philo-ivory/90">${o.text}</span>
                    </label>`;
                });
                h += `</div></div>`;
            });
            h += `</div>
            <div class="mt-6 flex justify-end gap-3 pt-4 border-t border-white/10">
                <button onclick="closeQuizModal()" class="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-philo-ivory/70 hover:bg-white/5">Đóng</button>
                <button onclick="submitQuiz()" id="btn-submit-quiz" class="bg-white/10 text-white/40 font-bold px-8 py-2.5 rounded-xl cursor-not-allowed text-xs" data-ready="false">Nộp bài</button>
            </div>`;
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
                const qEl = document.querySelector(`[data-qid="${q.id}"]`);
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
            M1_STATE.quizResults[quiz.id || 'module_quiz'] = { score, correct, total: quiz.questions.length, passed, timestamp: Date.now() };
            saveM1State();

            const rh = `<div class="mb-6 p-4 rounded-2xl text-center border ${passed ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-red-950/30 border-red-500/50'}">
                <p class="text-3xl mb-1">${passed ? '🎉' : '📚'}</p>
                <p class="text-xl font-bold ${passed ? 'text-emerald-400' : 'text-red-400'}">${score}% (${correct}/${quiz.questions.length} câu đúng)</p>
                <p class="text-xs mt-1 ${passed ? 'text-emerald-400' : 'text-red-400'}">${passed ? '✅ Đạt yêu cầu kiến thức Chương 1!' : '❌ Chưa đạt (Yêu cầu ' + quiz.passingScore + '%). Hãy xem lại giải thích và thử lại!'}</p>
            </div>`;
            document.getElementById('quiz-modal-body').insertAdjacentHTML('afterbegin', rh);

            b.textContent = passed ? 'Hoàn tất ✓' : 'Làm lại';
            b.onclick = passed ? closeQuizModal : () => {
                closeQuizModal();
                setTimeout(() => openModuleQuiz(), 300);
            };

            if (passed && quiz.achievement) {
                showAchievement('Học Giả Lịch Sử Đảng Khởi Điểm', 'Hoàn thành xuất sắc bài kiểm tra tổng kết Chương 1 VNR202!');
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

        const AI_M1 = {
            'đối tượng': { answer: 'Đối tượng nghiên cứu của môn Lịch sử Đảng Cộng sản Việt Nam là các sự kiện lịch sử của Đảng; Cương lĩnh, đường lối, chủ trương, chính sách; quá trình Đảng lãnh đạo và tổ chức thực tiễn; các kinh nghiệm và bài học lịch sử.', sourceRef: 'Giáo trình VNR202 — Chương Nhập môn, Mục I' },
            'chức năng': { answer: 'Khoa học Lịch sử Đảng có 3 chức năng: 1) Chức năng nhận thức (cung cấp tri thức có hệ thống); 2) Chức năng giáo dục (bồi dưỡng lý tưởng, lòng yêu nước, đạo đức cách mạng); 3) Chức năng dự báo và phê phán (hiểu hiện tại, dự báo tương lai và tự chỉnh đốn).', sourceRef: 'Giáo trình VNR202 — Chương Nhập môn, Mục II' },
            'quy luật': { answer: 'Chủ tịch Hồ Chí Minh khẳng định: Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố: Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước Việt Nam.', sourceRef: 'Giáo trình VNR202 — Chương 1, Mục I' },
            'cương lĩnh': { answer: 'Cương lĩnh chính trị đầu tiên (tháng 2/1930) xác định đường lối: Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản; đánh đổ đế quốc Pháp và phong kiến; giải phóng dân tộc là hàng đầu; liên minh công nông là gốc.', sourceRef: 'Giáo trình VNR202 — Chương 1, Mục I' }
        };

        function getAIResponse(q) {
            const l = q.toLowerCase();
            for (const [k, r] of Object.entries(AI_M1)) {
                if (l.includes(k)) return r;
            }
            return {
                answer: 'Trọng tâm Chương 1 VNR202: Đối tượng, 3 chức năng, 4 nhiệm vụ của môn học; Phương pháp lịch sử và logic; Phong trào yêu nước trước 1930; Nguyễn Ái Quốc chuẩn bị về tư tưởng, chính trị, tổ chức; Hội nghị thành lập Đảng 3/2/1930 và Cương lĩnh chính trị đầu tiên.',
                sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202) — Chương 1'
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
            h.insertAdjacentHTML('beforeend', `<div class="flex justify-end"><div class="bg-philo-gold text-black font-medium rounded-xl p-3 max-w-[85%] text-xs"><p>${q}</p></div></div>`);
            const lid = 'l' + Date.now();
            h.insertAdjacentHTML('beforeend', `<div id="${lid}" class="bg-white/5 rounded-xl p-3 text-xs"><p>⏳ Đang tra cứu Giáo trình VNR202...</p></div>`);
            h.scrollTop = h.scrollHeight;
            setTimeout(() => {
                const r = getAIResponse(q);
                const le = document.getElementById(lid);
                if (le) le.outerHTML = `<div class="bg-white/5 rounded-xl p-3 border border-philo-gold/20 text-xs"><p class="text-xs font-bold text-philo-gold mb-1">🤖 AI Giáo trình VNR202</p><p class="text-philo-ivory/90 leading-relaxed mb-2">${r.answer}</p><p class="text-[10px] text-philo-gold/70 border-t border-white/10 pt-1">📖 <em>${r.sourceRef}</em></p></div>`;
                h.scrollTop = h.scrollHeight;
            }, 500);
        }

        document.addEventListener('DOMContentLoaded', () => {
            loadM1State();
            updateProgress();
            showLesson('M1-L1');
        });
    </script>
</body>
</html>`;
}

fs.writeFileSync('module1.html', createModule1(), 'utf8');
console.log('Successfully generated module1.html with full VNR202 content!');

