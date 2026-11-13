const fs = require('fs');

let content = fs.readFileSync('home.html', 'utf8');

const regex = /<div class="grid grid-cols-1 md:grid-cols-3 gap-8">[\s\S]*?<\/article>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Article 1 -->
            <article class="bg-[rgba(70,8,8,0.65)] backdrop-blur-md shadow-cinematic rounded-2xl overflow-hidden border border-[#D9A62E]/25 hover-lift relative group flex flex-col">
              <a href="articles/nguon-goc-lich-su-dang.html" class="absolute inset-0 z-0"></a>
              <div class="h-44 relative overflow-hidden z-10 pointer-events-none bg-black/60">
                <div class="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-[#D4A017]/20 to-transparent">
                  <span class="material-symbols-outlined text-5xl">history_edu</span>
                </div>
                <span class="absolute top-4 left-4 px-2.5 py-1 bg-slate-900/70 backdrop-blur-md rounded text-white text-[9px] font-bold uppercase tracking-wider">VNR202</span>
              </div>
              <div class="p-6 flex flex-col justify-between flex-grow z-10 relative pointer-events-none">
                <div>
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#D4A017] transition-colors line-clamp-2">
                    Cương Lĩnh 1930 & Khát Vọng Độc Lập Dân Tộc
                  </h3>
                  <p class="text-[11px] text-philo-ivory/70 line-clamp-3 leading-relaxed mt-2">
                    Sự chuẩn bị toàn diện của Nguyễn Ái Quốc và tính độc lập, sáng tạo của bản Cương lĩnh chính trị đầu tiên ngày 3/2/1930.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#D9A62E]/25 flex items-center justify-between pointer-events-auto">
                  <a href="articles/nguon-goc-lich-su-dang.html" class="text-[10px] font-bold text-[#D4A017] flex items-center gap-1">
                    Đọc Ngay <span class="material-symbols-outlined text-[12px]">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </article>

            <!-- Article 2 -->
            <article class="bg-[rgba(70,8,8,0.65)] backdrop-blur-md shadow-cinematic rounded-2xl overflow-hidden border border-[#D9A62E]/25 hover-lift relative group flex flex-col">
              <a href="articles/dien-bien-phu-va-nghe-thuat-quan-su.html" class="absolute inset-0 z-0"></a>
              <div class="h-44 relative overflow-hidden z-10 pointer-events-none bg-black/60">
                <div class="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-[#D4A017]/20 to-transparent">
                  <span class="material-symbols-outlined text-5xl">military_tech</span>
                </div>
                <span class="absolute top-4 left-4 px-2.5 py-1 bg-slate-900/70 backdrop-blur-md rounded text-white text-[9px] font-bold uppercase tracking-wider">VNR202</span>
              </div>
              <div class="p-6 flex flex-col justify-between flex-grow z-10 relative pointer-events-none">
                <div>
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#D4A017] transition-colors line-clamp-2">
                    Nghệ Thuật Quân Sự Từ Điện Biên Phủ Đến Mùa Xuân 1975
                  </h3>
                  <p class="text-[11px] text-philo-ivory/70 line-clamp-3 leading-relaxed mt-2">
                    Đỉnh cao nghệ thuật chiến tranh nhân dân, kết hợp 3 mũi giáp công trên 3 vùng chiến lược và tinh thần đại thắng thống nhất non sông.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#D9A62E]/25 flex items-center justify-between pointer-events-auto">
                  <a href="articles/dien-bien-phu-va-nghe-thuat-quan-su.html" class="text-[10px] font-bold text-[#D4A017] flex items-center gap-1">
                    Đọc Ngay <span class="material-symbols-outlined text-[12px]">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </article>

            <!-- Article 3 -->
            <article class="bg-[rgba(70,8,8,0.65)] backdrop-blur-md shadow-cinematic rounded-2xl overflow-hidden border border-[#D9A62E]/25 hover-lift relative group flex flex-col">
              <a href="articles/doi-moi-1986-va-khat-vong-phat-trien.html" class="absolute inset-0 z-0"></a>
              <div class="h-44 relative overflow-hidden z-10 pointer-events-none bg-black/60">
                <div class="w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-[#D4A017]/20 to-transparent">
                  <span class="material-symbols-outlined text-5xl">trending_up</span>
                </div>
                <span class="absolute top-4 left-4 px-2.5 py-1 bg-slate-900/70 backdrop-blur-md rounded text-white text-[9px] font-bold uppercase tracking-wider">VNR202</span>
              </div>
              <div class="p-6 flex flex-col justify-between flex-grow z-10 relative pointer-events-none">
                <div>
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#D4A017] transition-colors line-clamp-2">
                    Đại Hội VI (1986) & Bước Ngoặt Đổi Mới Toàn Diện
                  </h3>
                  <p class="text-[11px] text-philo-ivory/70 line-clamp-3 leading-relaxed mt-2">
                    Tinh thần nhìn thẳng vào sự thật, bài học lấy dân làm gốc và khát vọng phát triển đất nước phồn vinh đến năm 2045.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#D9A62E]/25 flex items-center justify-between pointer-events-auto">
                  <a href="articles/doi-moi-1986-va-khat-vong-phat-trien.html" class="text-[10px] font-bold text-[#D4A017] flex items-center gap-1">
                    Đọc Ngay <span class="material-symbols-outlined text-[12px]">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>`;

if (regex.test(content)) {
    content = content.replace(regex, newSection);
    fs.writeFileSync('home.html', content, 'utf8');
    console.log('[SUCCESS] Replaced articles section in home.html');
} else {
    console.error('[ERROR] Regex match failed');
}
