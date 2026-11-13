const fs = require('fs');
const path = require('path');

function createArticlePage(article) {
    return `<!DOCTYPE html>
<html class="dark" lang="vi">
<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>${article.title} | VNR202 PhiloVerse</title>
    <meta name="description" content="${article.description}" />
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script>
        window.componentPrefix = "../";
    </script>
    <script src="../js/tailwind-config-global.js"></script>
    <link rel="stylesheet" href="../css/philoverse-ui.css" />
    <style>
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        html { scroll-behavior: smooth; }
        .drop-cap::first-letter { float: left; font-size: 3.5em; line-height: 0.8; margin-right: 8px; margin-top: 4px; font-family: 'Lora', serif; font-weight: 700; color: #D4A017; }
        .quote-box { background: rgba(212,160,23,0.08); border-left: 4px solid #D4A017; border-radius: 0 12px 12px 0; padding: 1.25rem 1.5rem; }
    </style>
</head>

<body class="bg-philo-blackBurgundy relative font-heading min-h-screen flex flex-col transition-colors duration-500 text-philo-ivory">
    <div id="header-placeholder"></div>

    <main class="flex-grow py-12">
        <div class="max-w-4xl mx-auto px-4 md:px-6">
            <div class="rounded-3xl shadow-cinematic border border-philo-gold/20 relative p-6 md:p-10" style="background:rgba(58,5,5,0.85);">
                <div class="absolute inset-0 bg-[radial-gradient(#8B6F47_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none rounded-3xl"></div>
                <a href="../articles.html" class="inline-flex items-center text-philo-ivory/70 hover:text-philo-gold mb-8 transition-colors text-xs font-bold gap-1.5">
                    <span class="material-symbols-outlined text-base">arrow_back</span> Quay lại danh sách chuyên khảo
                </a>

                <div class="mb-4">
                    <span class="px-3 py-1 bg-philo-warmGold/20 text-philo-gold text-xs font-bold rounded-full uppercase tracking-wider border border-philo-gold/30">
                        ${article.badge}
                    </span>
                </div>

                <h1 class="text-3xl md:text-4xl font-heading font-bold text-philo-ivory mb-6 leading-tight">
                    ${article.headline}
                </h1>

                <div class="w-full h-80 rounded-2xl overflow-hidden mb-10 shadow-md border border-philo-gold/30 relative">
                    <div class="w-full h-full bg-gradient-to-br from-black/80 via-[#3A0505] to-[#140303] flex items-center justify-center">
                        <span class="material-symbols-outlined text-7xl text-philo-gold/60">${article.icon}</span>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-philo-blackBurgundy/90 via-transparent to-transparent"></div>
                    <span class="absolute bottom-4 left-4 text-xs text-philo-ivory/80 font-mono bg-philo-blackBurgundy/70 px-3 py-1 rounded">Tài liệu tham khảo: ${article.sourceRef}</span>
                </div>

                <div class="philo-prose max-w-none text-sm md:text-base leading-relaxed space-y-6 font-heading text-philo-ivory/90">
                    <div class="quote-box mb-8">
                        <p class="font-bold text-philo-ivory italic leading-relaxed text-sm md:text-base">
                            "${article.quoteText}"
                            <span class="block mt-2 text-philo-gold font-bold not-italic text-xs">— ${article.quoteAuthor}</span>
                        </p>
                    </div>

                    ${article.bodyHtml}

                    <div class="mt-8 p-5 rounded-2xl bg-philo-blackBurgundy border border-philo-gold/30">
                        <h4 class="font-bold text-philo-gold mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined">lightbulb</span> Bài học rút ra cho sinh viên hôm nay
                        </h4>
                        <p class="text-xs md:text-sm text-philo-ivory/80 leading-relaxed">
                            ${article.takeaway}
                        </p>
                    </div>

                    <div class="mt-10 pt-6 border-t border-philo-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <a href="../${article.moduleUrl}" class="philo-btn-gold text-xs px-6 py-2.5 rounded-xl font-bold flex items-center gap-2">
                            <span class="material-symbols-outlined text-base">school</span> Vào học ${article.moduleName}
                        </a>
                        <a href="../articles.html" class="text-xs text-philo-ivory/70 hover:text-philo-gold flex items-center gap-1">
                            Xem tất cả chuyên khảo <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>
    <script src="../js/search-data-global.js"></script>
    <script src="../js/load-components.js"></script>
    <script src="../js/search-init.js"></script>
</body>
</html>`;
}

const articlesData = [
    {
        filename: 'nguon-goc-lich-su-dang.html',
        title: 'Cương Lĩnh 1930 & Khát Vọng Độc Lập Dân Tộc',
        description: 'Phân tích sự chuẩn bị công phu của Nguyễn Ái Quốc và tính độc lập, tự chủ, sáng tạo của bản Cương lĩnh chính trị đầu tiên ngày 3/2/1930.',
        badge: 'Chuyên Khảo I • Lịch Sử Sự Ra Đời Của Đảng',
        headline: 'Cương Lĩnh Chính Trị Đầu Tiên (1930): Ngọn Cờ Khai Sinh Thời Đại Mới',
        icon: 'history_edu',
        sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202), Chương 1',
        quoteText: 'Đảng muốn vững thì phải có chủ nghĩa làm cốt, trong Đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam.',
        quoteAuthor: 'Nguyễn Ái Quốc, Đường Kách mệnh (1927)',
        moduleUrl: 'module1.html',
        moduleName: 'Chương 1 VNR202',
        bodyHtml: `
            <p class="drop-cap">
                Mùa xuân năm 1930, tại bán đảo Cửu Long (Hương Cảng, Trung Quốc), dưới sự chủ trì sáng suốt của lãnh tụ Nguyễn Ái Quốc, Hội nghị hợp nhất các tổ chức cộng sản đã diễn ra, khai sinh ra Đảng Cộng sản Việt Nam. Điểm đặc sắc và có sức sống bền bỉ nhất của sự kiện này chính là bản <em>Cương lĩnh chính trị đầu tiên</em> (gồm Chánh cương vắn tắt, Sách lược vắn tắt) do chính Người soạn thảo.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                1. Quy luật đặc thù về sự ra đời của Đảng
            </h2>
            <p>
                Khác với các nước tư bản phương Tây (nơi đảng cộng sản ra đời từ sự kết hợp thuần túy giữa chủ nghĩa Mác và phong trào công nhân), ở Việt Nam - một xứ thuộc địa nửa phong kiến, Nguyễn Ái Quốc đã sáng tạo bổ sung thêm một yếu tố thứ ba có tính quyết định: <strong>Phong trào yêu nước</strong>. Người hiểu sâu sắc rằng truyền thống yêu nước nghìn năm của dân tộc là dòng thác cách mạng vĩ đại nhất cần được giác ngộ bởi chủ nghĩa Mác - Lênin.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                2. Sáng tạo lý luận trong Cương lĩnh đầu tiên
            </h2>
            <p>
                Cương lĩnh đầu tiên đã giải quyết hài hòa mối quan hệ giữa <strong>Dân tộc và Giai cấp</strong>. Đặt nhiệm vụ giải phóng dân tộc lên trên hết, trước hết; đánh đuổi đế quốc Pháp và phong kiến tay sai giành độc lập hoàn toàn cho non sông. Cương lĩnh xác định công nông là gốc, nhưng đồng thời chủ trương đoàn kết hết thảy các giai tầng yêu nước (tiểu tư sản, trí thức, tư sản dân tộc, địa chủ vừa và nhỏ) trong một mặt trận thống nhất.
            </p>`,
        takeaway: 'Kiên định ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội, phát huy tinh thần độc lập tự chủ và sáng tạo trong mọi hoàn cảnh thực tiễn của thời đại mới.'
    },
    {
        filename: 'cach-mang-thang-tam-bai-hoc-thoi-co.html',
        title: 'Nghệ Thuật Chớp Thời Cơ Trong CMT8 (1945)',
        description: 'Dự báo chiến lược, nắm bắt thời cơ ngàn năm có một và bài học phát động Tổng khởi nghĩa giành chính quyền thần tốc mùa Thu 1945.',
        badge: 'Chuyên Khảo II • Đấu Tranh Giành Chính Quyền',
        headline: 'Cách Mạng Tháng Tám 1945: Đỉnh Cao Nghệ Thuật Nắm Bắt Thời Cơ Chiến Lược',
        icon: 'flag',
        sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202), Chương 2',
        quoteText: 'Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!',
        quoteAuthor: 'Hồ Chí Minh dặn dò đồng chí Võ Nguyên Giáp tại lán Nà Nưa (8/1945)',
        moduleUrl: 'module2.html',
        moduleName: 'Chương 2 VNR202',
        bodyHtml: `
            <p class="drop-cap">
                Cách mạng Tháng Tám năm 1945 là một trong những kỳ tích vĩ đại nhất trong lịch sử dựng nước và giữ nước của dân tộc Việt Nam. Chỉ trong vòng 15 ngày (từ 14 đến 28/8/1945), toàn thể nhân dân ta dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh đã vùng dậy đập tan ách thống trị gần một thế kỷ của thực dân Pháp và phát xít Nhật, lật đổ ngai vàng phong kiến ngót nghìn năm.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                1. Nghệ thuật dự báo và đón đầu thời cơ
            </h2>
            <p>
                Ngay từ năm 1941 tại Pác Bó, lãnh tụ Hồ Chí Minh đã dự báo thiên tài: <em>"Năm 1945 Việt Nam sẽ độc lập"</em>. Khi phát xít Nhật đảo chính Pháp đêm 9/3/1945, Đảng ra ngay bản Chỉ thị lịch sử <em>"Nhật - Pháp bắn nhau và hành động của chúng ta"</em>, kịp thời phát động cao trào kháng Nhật cứu nước làm tiền đề trực tiếp cho cuộc Tổng khởi nghĩa.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                2. Khoảng khắc thời cơ ngàn năm có một
            </h2>
            <p>
                Thời cơ cách mạng chỉ xuất hiện trong một "khoảng vàng" vô cùng ngắn ngủi: từ khi phát xít Nhật đầu hàng Đồng minh (15/8/1945) đến trước khi quân đội Đồng minh kéo vào tước khí giới. Đảng ta đã khẩn trương triệu tập Hội nghị toàn quốc và Đại hội Quốc dân Tân Trào, ra lệnh Tổng khởi nghĩa thần tốc giành chính quyền trong cả nước trước khi đối thủ kịp định hình cục diện mới.
            </p>`,
        takeaway: 'Trong kỷ nguyên số hóa và cạnh tranh toàn cầu hiện nay, bài học về tầm nhìn dự báo, sự chuẩn bị nội lực vững chắc và quyết đoán chớp thời cơ vẫn giữ nguyên giá trị thời đại đối với thế hệ trẻ.'
    },
    {
        filename: 'dien-bien-phu-va-nghe-thuat-quan-su.html',
        title: 'Chiến Thắng Điện Biên Phủ & Nghệ Thuật Quân Sự',
        description: 'Đỉnh cao nghệ thuật chiến tranh nhân dân và quyết định chuyển phương châm tác chiến sang đánh chắc tiến chắc năm 1954.',
        badge: 'Chuyên Khảo III • Kháng Chiến Chống Pháp',
        headline: 'Điện Biên Phủ 1954: Bản Anh Hùng Ca Của Nghệ Thuật Quân Sự Nhân Dân',
        icon: 'military_tech',
        sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202), Chương 3',
        quoteText: 'Chiến thắng Điện Biên Phủ như một mốc son chói lọi bằng vàng của lịch sử. Nó ghi nhận nơi chủ nghĩa thực dân lăn xuống dốc và tan rã, đồng thời phong trào giải phóng dân tộc khắp thế giới đang lên cao.',
        quoteAuthor: 'Chủ tịch Hồ Chí Minh (1964)',
        moduleUrl: 'module3.html',
        moduleName: 'Chương 3 VNR202',
        bodyHtml: `
            <p class="drop-cap">
                56 ngày đêm khoét núi, ngủ hầm, mưa dầm, cơm vắt, máu trộn bùn non của quân và dân ta tại lòng chảo Mường Thanh đã làm nên chiến thắng lịch sử Điện Biên Phủ <em>"lừng lẫy năm châu, chấn động địa cầu"</em>. Chiến thắng này không chỉ buộc thực dân Pháp phải ký Hiệp định Giơnevơ năm 1954 mà còn mở đầu cho sự sụp đổ không thể đảo ngược của hệ thống thuộc địa chủ nghĩa thực dân cũ trên toàn thế giới.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                1. Quyết định lịch sử chuyển phương châm tác chiến
            </h2>
            <p>
                Đại tướng Tổng Tư lệnh Võ Nguyên Giáp đã đúc kết: quyết định khó khăn nhất trong cuộc đời cầm quân của ông chính là quyết định hoãn giờ nổ súng ngày 26/1/1954 để kéo pháo ra, chuyển từ phương châm <strong>"Đánh nhanh, thắng nhanh"</strong> sang <strong>"Đánh chắc, tiến chắc"</strong>. Đây là quyết định xuất phát từ sự tôn trọng tuyệt đối thực tế khách quan, bảo đảm "chắc thắng mới đánh, không chắc thắng không đánh".
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                2. Sức mạnh vô song của chiến tranh nhân dân
            </h2>
            <p>
                Tập đoàn cứ điểm Điện Biên Phủ được các tướng lĩnh phương Tây ca ngợi là "pháo đài bất khả xâm phạm" đã bị đánh bại bởi sức mạnh tổng hợp của toàn dân tộc: hàng chục vạn dân công hỏa tuyến, hàng vạn chiếc xe đạp thồ thô sơ băng rừng xẻ núi, tinh thần quả cảm sẵn sàng hy sinh của các anh hùng Phan Đình Giót, Tô Vĩnh Diện, Bế Văn Đàn...
            </p>`,
        takeaway: 'Bài học về sự tỉnh táo đánh giá thực lực, dũng cảm thay đổi chiến lược để thích ứng với tình hình thực tế và phát huy sức mạnh đoàn kết tập thể để vượt qua những thử thách tưởng chừng bất khả thi.'
    },
    {
        filename: 'dai-thang-mua-xuan-1975.html',
        title: 'Đại Thắng Mùa Xuân 1975 & Thống Nhất Non Sông',
        description: 'Chiến dịch Hồ Chí Minh lịch sử, tinh thần thần tốc táo bạo chắc thắng và bài học giải phóng hoàn toàn miền Nam thu non sông về một mối.',
        badge: 'Chuyên Khảo IV • Kháng Chiến Chống Mỹ',
        headline: 'Đại Thắng Mùa Xuân 1975: Đỉnh Cao Trí Tuệ & Sức Mạnh Thống Nhất Non Sông',
        icon: 'emoji_events',
        sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202), Chương 4',
        quoteText: 'Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa; bất ngờ, chắc thắng. Tranh thủ từng giờ, từng phút, xốc tới mặt trận, giải phóng miền Nam. Quyết chiến và toàn thắng!',
        quoteAuthor: 'Mệnh lệnh của Đại tướng Võ Nguyên Giáp (7/4/1975)',
        moduleUrl: 'module4.html',
        moduleName: 'Chương 4 VNR202',
        bodyHtml: `
            <p class="drop-cap">
                Đúng 11 giờ 30 phút ngày 30 tháng 4 năm 1975, lá cờ giải phóng kiêu hãnh tung bay trên nóc Dinh Độc Lập, đánh dấu Chiến dịch Hồ Chí Minh toàn thắng. Cuộc kháng chiến chống Mỹ cứu nước kéo dài 21 năm ròng rã và cuộc chiến tranh giải phóng dân tộc suốt 30 năm kết thúc thắng lợi trọn vẹn, non sông Việt Nam thu về một mối, mở ra kỷ nguyên độc lập, tự do và đi lên chủ nghĩa xã hội.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                1. Đường lối chiến lược độc lập, tự chủ và sáng tạo
            </h2>
            <p>
                Đảng ta đã lãnh đạo cuộc kháng chiến với đường lối chiến lược vô cùng tài tình: tiến hành đồng thời hai nhiệm vụ chiến lược ở hai miền; kết hợp chặt chẽ ba mặt trận quân sự, chính trị và ngoại giao; đánh địch bằng cả ba mũi giáp công trên cả ba vùng chiến lược. Đỉnh cao là nghệ thuật tạo thời cơ và chớp thời cơ giải phóng miền Nam ngay trong mùa xuân 1975.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                2. Tinh thần 'Không có gì quý hơn độc lập, tự do'
            </h2>
            <p>
                Thắng lợi lịch sử ngày 30/4 là sự kết tinh của ý chí sắt đá và lòng yêu nước vô bờ bến của hàng triệu người con đất Việt: thanh niên "xẻ dọc Trường Sơn đi cứu nước", hậu phương miền Bắc "thóc không thiếu một cân, quân không thiếu một người", tất cả vì miền Nam ruột thịt.
            </p>`,
        takeaway: 'Lòng tự hào dân tộc, ý chí tự lực tự cường và tinh thần đoàn kết keo sơn là nguồn sức mạnh nội sinh vô tận giúp đất nước vượt qua mọi phong ba bão táp để vươn tới đài vinh quang.'
    },
    {
        filename: 'doi-moi-1986-va-khat-vong-phat-trien.html',
        title: 'Đại Hội VI (1986) & Bước Ngoặt Đổi Mới Toàn Diện',
        description: 'Tinh thần nhìn thẳng vào sự thật, bài học lấy dân làm gốc và khát vọng phát triển đất nước phồn vinh hạnh phúc đến năm 2045.',
        badge: 'Chuyên Khảo V • Thời Kỳ Đổi Mới',
        headline: 'Đại Hội VI (1986): Bước Ngoặt Đổi Mới Tư Duy & Khát Vọng Việt Nam 2045',
        icon: 'trending_up',
        sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202), Chương 5',
        quoteText: 'Phải nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật. Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng "lấy dân làm gốc".',
        quoteAuthor: 'Văn kiện Đại hội đại biểu toàn quốc lần thứ VI (12/1986)',
        moduleUrl: 'module5.html',
        moduleName: 'Chương 5 VNR202',
        bodyHtml: `
            <p class="drop-cap">
                Tháng 12 năm 1986, Đại hội đại biểu toàn quốc lần thứ VI của Đảng đã đi vào lịch sử dân tộc như một mốc son chói lọi, mở ra thời kỳ Đổi mới toàn diện đất nước. Dưới sự chèo lái của Tổng Bí thư Nguyễn Văn Linh, Đảng đã dũng cảm đoạn tuyệt với cơ chế tập trung quan liêu bao cấp, chuyển hướng sang phát triển nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                1. Bài học 'Lấy dân làm gốc' và tôn trọng quy luật khách quan
            </h2>
            <p>
                Đại hội VI đã tổng kết 4 bài học lớn, trong đó nổi bật là tư tưởng <em>"Lấy dân làm gốc"</em> và nguyên tắc <em>hành động theo quy luật khách quan</em>. Những sáng kiến từ thực tiễn như "Khoán 100", "Khoán 10" trong nông nghiệp đã giải phóng mạnh mẽ sức sản xuất, đưa Việt Nam từ một nước thiếu ăn kinh niên vươn lên thành một trong những cường quốc xuất khẩu nông sản hàng đầu thế giới.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                2. Nâng tầm tư duy hướng tới mục tiêu 2030 và 2045
            </h2>
            <p>
                Gần 40 năm thực hiện công cuộc Đổi mới, đất nước đã đạt được những thành tựu to lớn, có ý nghĩa lịch sử. Đúng như Tổng Bí thư Nguyễn Phú Trọng đã khẳng định tại Đại hội XIII: <em>"Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay"</em>, thắp sáng khát vọng đưa Việt Nam trở thành quốc gia phát triển, thu nhập cao vào năm 2045.
            </p>`,
        takeaway: 'Dám nghĩ, dám làm, dám chịu trách nhiệm, không ngừng đổi mới sáng tạo, tôn trọng quy luật khách quan và luôn đặt lợi ích của nhân dân, đất nước lên vị trí tối thượng.'
    },
    {
        filename: 'xay-dung-chinh-don-dang-hien-nay.html',
        title: 'Xây Dựng, Chỉnh Đốn Đảng & Bài Học Lịch Sử',
        description: 'Kiên quyết phòng chống tham nhũng, lãng phí, tiêu cực và 5 bài học lớn qua hơn 90 năm lãnh đạo của Đảng Cộng sản Việt Nam.',
        badge: 'Chuyên Khảo VI • Xây Dựng Đảng & Bài Học Lịch Sử',
        headline: 'Xây Dựng, Chỉnh Đốn Đảng: Giữ Vững Bản Chất Cách Mạng & Lòng Dân',
        icon: 'public',
        sourceRef: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (VNR202), Chương 6',
        quoteText: 'Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đày tớ thật trung thành của nhân dân.',
        quoteAuthor: 'Chủ tịch Hồ Chí Minh, Di chúc thiêng liêng (1969)',
        moduleUrl: 'module6.html',
        moduleName: 'Chương 6 VNR202',
        bodyHtml: `
            <p class="drop-cap">
                Trong suốt hơn 90 năm lịch sử vẻ vang, Đảng Cộng sản Việt Nam luôn coi công tác xây dựng, chỉnh đốn Đảng là nhiệm vụ then chốt, quyết định sự sống còn của Đảng và chế độ. Bước vào giai đoạn phát triển mới, công tác phòng chống tham nhũng, lãng phí, tiêu cực được tiến hành quyết liệt với phương châm <em>"Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai"</em>.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                1. Cuộc chiến chống 'giặc nội xâm' củng cố niềm tin
            </h2>
            <p>
                Tham nhũng, lãng phí và sự suy thoái về tư tưởng chính trị, đạo đức, lối sống của một bộ phận cán bộ đảng viên là một thứ "giặc nội xâm" đe dọa trực tiếp sự tồn vong của chế độ. Việc kiên quyết xử lý kỷ luật nghiêm minh các sai phạm vừa có tác dụng răn đe, cảnh tỉnh, vừa là minh chứng cho sự tự soi, tự sửa của một chính đảng cách mạng chân chính vì dân, vì nước.
            </p>
            <h2 class="text-xl font-bold text-philo-gold mt-8 mb-3 font-heading border-b border-philo-gold/25 pb-2">
                2. Năm bài học lịch sử xuyên suốt của Đảng
            </h2>
            <p>
                Lịch sử Đảng đúc kết 5 bài học vô giá: Giương cao ngọn cờ độc lập dân tộc và CNXH; Dân là gốc - sự nghiệp của nhân dân, do nhân dân, vì nhân dân; Không ngừng củng cố đoàn kết; Kết hợp sức mạnh dân tộc với sức mạnh thời đại; và Nâng cao năng lực lãnh đạo, bản lĩnh cầm quyền của Đảng.
            </p>`,
        takeaway: 'Rèn luyện đạo đức trong sáng, sống có trách nhiệm với cộng đồng, trung thực và liêm chính trong công việc, tích cực đóng góp công sức xây dựng quê hương đất nước phồn vinh.'
    }
];

const articlesDir = path.resolve(__dirname, '..', 'articles');
articlesData.forEach(art => {
    const html = createArticlePage(art);
    const dest = path.join(articlesDir, art.filename);
    fs.writeFileSync(dest, html, 'utf8');
    console.log(`[SUCCESS] Wrote article: ${art.filename}`);
});

console.log('All 6 VNR202 article files have been generated!');

