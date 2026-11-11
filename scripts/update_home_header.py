import sys
import os
import re

# 1. Update header.html
header_path = r"C:\Users\brave\Downloads\VNR202_Quiz\header.html"
with open(header_path, "r", encoding="utf-8") as f:
    header = f.read()

# Update brand title
header = re.sub(
    r'PhiloVerse\s*<span[^>]*>.*?</span>',
    'PhiloVerse <span class="text-xs font-sans tracking-widest text-philo-gold uppercase font-semibold pl-1">VNR202</span>',
    header
)

# Update nav links to include Quizzes
old_nav = '''      <nav class="hidden lg:flex items-center gap-1 pl-6 border-l border-philo-gold/20">
        <a id="home-link"
          class="nav-link relative px-3 py-2 rounded-xl text-philo-gold text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="home.html">Trang chủ</a>
        <a id="modules-link"
          class="nav-link relative px-3 py-2 rounded-xl text-philo-gold text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="home.html#overview">Modules</a>
        <a id="practice-link"
          class="nav-link relative px-3 py-2 rounded-xl text-philo-gold text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="practice.html">Thực hành</a>
        <a id="articles-link"
          class="nav-link relative px-3 py-2 rounded-xl text-philo-gold text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="articles.html">Góc nhìn</a>
      </nav>'''

new_nav = '''      <nav class="hidden lg:flex items-center gap-1 pl-6 border-l border-philo-gold/20">
        <a id="home-link"
          class="nav-link relative px-3 py-2 rounded-xl text-philo-gold text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="home.html">Trang chủ</a>
        <a id="practice-link"
          class="nav-link relative px-3 py-2 rounded-xl text-philo-gold text-sm font-bold transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="practice.html">Ôn thi FE</a>
        <a id="quiz1-link"
          class="nav-link relative px-2.5 py-2 rounded-xl text-philo-ivory/80 text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="quiz1.html">Quiz 1</a>
        <a id="quiz2-link"
          class="nav-link relative px-2.5 py-2 rounded-xl text-philo-ivory/80 text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="quiz2.html">Quiz 2</a>
        <a id="quiz3-link"
          class="nav-link relative px-2.5 py-2 rounded-xl text-philo-ivory/80 text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="quiz3.html">Quiz 3</a>
        <a id="quiz4-link"
          class="nav-link relative px-2.5 py-2 rounded-xl text-philo-ivory/80 text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="quiz4.html">Quiz 4</a>
        <a id="quiz5-link"
          class="nav-link relative px-2.5 py-2 rounded-xl text-philo-ivory/80 text-sm font-medium transition-all duration-300 hover:text-philo-gold hover:bg-philo-gold/5"
          href="quiz5.html">Quiz 5</a>
      </nav>'''

header = header.replace(old_nav, new_nav)

with open(header_path, "w", encoding="utf-8") as f:
    f.write(header)

print("header.html updated successfully!")


# 2. Update home.html
home_path = r"C:\Users\brave\Downloads\VNR202_Quiz\home.html"
with open(home_path, "r", encoding="utf-8") as f:
    home = f.read()

# Update title
home = re.sub(
    r"<title>.*?</title>",
    "<title>PhiloVerse — Luyện Thi Trắc Nghiệm Lịch Sử Đảng (VNR202)</title>",
    home
)

# Update badge in hero
home = home.replace(
    "Giáo trình Chuẩn Quốc Gia • MLN131",
    "Giáo trình Chuẩn Bộ GD&ĐT • VNR202 (29 Sessions)"
)

# Update hero heading
old_heading = '''Kinh Tế <br />
<span class="bg-gradient-to-r from-[#FFD34E] to-[#D9A62E] bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(255,211,78,0.2)]">Chính Trị</span>'''

new_heading = '''Lịch Sử Đảng <br />
<span class="bg-gradient-to-r from-[#FFD34E] to-[#D9A62E] bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(255,211,78,0.2)]">Cộng Sản Việt Nam</span>'''

home = home.replace(old_heading, new_heading)

# Update quote
home = home.replace(
    '"Học thuyết giá trị thặng dư là hòn đá tảng trong toàn bộ lý luận kinh tế của C. Mác."',
    '"Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư." — Hồ Chí Minh'
)

# Update hero description
old_desc = "Nền tảng học tập tương tác theo 6 chương Kinh tế chính trị Mác - Lênin, với bài học, câu hỏi ôn tập, trợ lý AI và game giải đố."
new_desc = "Hệ thống trắc nghiệm và ôn thi FE môn Lịch sử Đảng Cộng sản Việt Nam (VNR202) bám sát 29 Sessions giáo trình Đại học FPT, gồm 5 bài Quiz theo dòng lịch sử và phòng thi thử mô phỏng 50 câu/60 phút."
home = home.replace(old_desc, new_desc)

# Update hero CTA buttons
old_cta = '''<a href="#overview" class="bg-gradient-to-r from-[#FFD34E] to-[#D9A62E] text-[#140303] font-semibold text-xs md:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(217,166,46,0.3)] flex items-center gap-2">
Khám phá 6 Chương
<span class="material-symbols-outlined text-base font-bold">arrow_forward</span>
</a>
<a href="ai-assistants.html" class="bg-[#3A0505]/40 backdrop-blur-md border border-[#FFD34E]/50 text-[#FFF4DC] hover:text-[#FFD34E] hover:border-[#FFD34E] text-xs md:text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2">
Hỏi Đáp AI MLN131
<span class="material-symbols-outlined text-base">auto_awesome</span>
</a>'''

new_cta = '''<a href="practice.html" class="bg-gradient-to-r from-[#FFD34E] to-[#D9A62E] text-[#140303] font-bold text-xs md:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(217,166,46,0.3)] flex items-center gap-2">
Vào Phòng Ôn Thi FE (72+ Câu)
<span class="material-symbols-outlined text-base font-bold">play_arrow</span>
</a>
<a href="#quiz-hub" class="bg-[#3A0505]/40 backdrop-blur-md border border-[#FFD34E]/50 text-[#FFF4DC] hover:text-[#FFD34E] hover:border-[#FFD34E] font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2">
5 Bài Quiz Chuyên Đề
<span class="material-symbols-outlined text-base">quiz</span>
</a>'''

home = home.replace(old_cta, new_cta)

# Replace the historical cards section with Communist Party leaders
old_thinkers_title = "Các nhà tư tưởng, đại biểu khoa học đã sáng lập và phát triển hệ thống Kinh tế chính trị Mác - Lênin"
new_thinkers_title = "Các lãnh tụ kiệt xuất và Tổng Bí thư của Đảng Cộng sản Việt Nam qua các mốc son lịch sử"
home = home.replace(old_thinkers_title, new_thinkers_title)

# Replace roadmap title
home = home.replace(
    "Chương Trình Học Tập MLN131",
    "Chương Trình Khảo Sát & Luyện Thi VNR202"
)
home = home.replace(
    "6 chương cốt lõi bám sát cấu trúc Giáo trình Kinh tế chính trị Mác - Lênin (Bộ Giáo dục & Đào tạo, NXB Chính trị Quốc gia Sự thật)",
    "Hệ thống Quiz & Ngân hàng trắc nghiệm bám sát toàn bộ 4 Chương & 29 Sessions bài giảng VNR202 Đại học FPT"
)

# Insert Quiz Hub section right above overview
quiz_hub_html = '''
<!-- QUIZ HUB SECTION -->
<section id="quiz-hub" class="py-16 px-4 md:px-10 max-w-7xl mx-auto">
  <div class="text-center mb-12">
    <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-philo-gold/20 border border-philo-gold/40 rounded-full text-xs font-bold text-philo-gold mb-3">
      <span class="material-symbols-outlined text-sm">quiz</span>
      Hệ Thống Trắc Nghiệm Theo Chuyên Đề
    </div>
    <h2 class="text-3xl md:text-4xl font-bold font-heading text-philo-gold">
      5 Bài Quiz Trọng Tâm Môn VNR202
    </h2>
    <p class="text-sm text-philo-ivory/80 max-w-2xl mx-auto mt-2">
      Luyện tập từng thời kỳ lịch sử với đáp án tức thì và giải thích chi tiết bám sát bài giảng 29 Sessions.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Quiz 1 -->
    <a href="quiz1.html" class="philo-card p-6 rounded-2xl border border-philo-gold/30 hover:border-philo-gold transition-all block group">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/30">Quiz 1 · 10 Câu</span>
        <span class="material-symbols-outlined text-philo-gold group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      <h3 class="text-lg font-bold text-philo-gold mb-2 group-hover:text-amber-300 transition-colors">
        Nhập Môn & Thành Lập Đảng (1920 - 1930)
      </h3>
      <p class="text-xs text-philo-ivory/80 leading-relaxed">
        Đối tượng, phương pháp Lịch sử Đảng, bối cảnh nước ta, Nguyễn Ái Quốc và Hội nghị thành lập Đảng 3/2/1930.
      </p>
    </a>

    <!-- Quiz 2 -->
    <a href="quiz2.html" class="philo-card p-6 rounded-2xl border border-philo-gold/30 hover:border-philo-gold transition-all block group">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-red-500/20 text-red-300 text-xs font-bold rounded-lg border border-red-500/30">Quiz 2 · 8 Câu</span>
        <span class="material-symbols-outlined text-philo-gold group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      <h3 class="text-lg font-bold text-philo-gold mb-2 group-hover:text-red-300 transition-colors">
        Giành Chính Quyền & CMT8 (1930 - 1945)
      </h3>
      <p class="text-xs text-philo-ivory/80 leading-relaxed">
        Luận cương 10/1930, cao trào Xô Viết Nghệ Tĩnh, chuyển hướng chiến lược Pác Bó và thắng lợi Cách mạng Tháng Tám.
      </p>
    </a>

    <!-- Quiz 3 -->
    <a href="quiz3.html" class="philo-card p-6 rounded-2xl border border-philo-gold/30 hover:border-philo-gold transition-all block group">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded-lg border border-green-500/30">Quiz 3 · 8 Câu</span>
        <span class="material-symbols-outlined text-philo-gold group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      <h3 class="text-lg font-bold text-philo-gold mb-2 group-hover:text-green-300 transition-colors">
        Kháng Chiến Chống Pháp (1945 - 1954)
      </h3>
      <p class="text-xs text-philo-ivory/80 leading-relaxed">
        Bảo vệ chính quyền cách mạng non trẻ, đường lối kháng chiến toàn dân trường kỳ và chiến thắng lịch sử Điện Biên Phủ.
      </p>
    </a>

    <!-- Quiz 4 -->
    <a href="quiz4.html" class="philo-card p-6 rounded-2xl border border-philo-gold/30 hover:border-philo-gold transition-all block group">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-lg border border-blue-500/30">Quiz 4 · 8 Câu</span>
        <span class="material-symbols-outlined text-philo-gold group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      <h3 class="text-lg font-bold text-philo-gold mb-2 group-hover:text-blue-300 transition-colors">
        Kháng Chiến Chống Mỹ (1954 - 1975)
      </h3>
      <p class="text-xs text-philo-ivory/80 leading-relaxed">
        Nghị quyết 15, phong trào Đồng Khởi, đánh bại 4 chiến lược chiến tranh của Mỹ và Đại thắng mùa Xuân 1975.
      </p>
    </a>

    <!-- Quiz 5 -->
    <a href="quiz5.html" class="philo-card p-6 rounded-2xl border border-philo-gold/30 hover:border-philo-gold transition-all block group">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-lg border border-purple-500/30">Quiz 5 · 8 Câu</span>
        <span class="material-symbols-outlined text-philo-gold group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      <h3 class="text-lg font-bold text-philo-gold mb-2 group-hover:text-purple-300 transition-colors">
        Thời Kỳ Đổi Mới & Hội Nhập (1975 - nay)
      </h3>
      <p class="text-xs text-philo-ivory/80 leading-relaxed">
        Thống nhất đất nước, Đại hội VI đổi mới toàn diện, Cương lĩnh 1991, kinh tế thị trường định hướng XHCN đến Đại hội XIII.
      </p>
    </a>

    <!-- FE Exam Mode Card -->
    <a href="practice.html" class="philo-card p-6 rounded-2xl border-2 border-philo-gold bg-philo-gold/10 hover:bg-philo-gold/20 transition-all block group">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-philo-gold text-black text-xs font-black rounded-lg">THI THỬ FE · 50 CÂU</span>
        <span class="material-symbols-outlined text-philo-gold group-hover:translate-x-1 transition-transform">play_arrow</span>
      </div>
      <h3 class="text-lg font-bold text-philo-gold mb-2">
        Phòng Thi Thử FE VNR202 (60 Phút)
      </h3>
      <p class="text-xs text-philo-ivory/80 leading-relaxed">
        Trộn ngẫu nhiên 50 câu trắc nghiệm từ ngân hàng 72+ câu hỏi toàn khóa, có bấm giờ và bảng điểm tự động.
      </p>
    </a>
  </div>
</section>
'''

if 'id="quiz-hub"' not in home:
    home = home.replace('<section\nid="overview"', quiz_hub_html + '\n<section\nid="overview"')

with open(home_path, "w", encoding="utf-8") as f:
    f.write(home)

print("home.html updated successfully!")
