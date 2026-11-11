# PhiloVerse VNR202 — Lịch Sử Đảng Cộng Sản Việt Nam

Website học tập và luyện thi trắc nghiệm tương tác cho môn **Lịch sử Đảng Cộng sản Việt Nam (VNR202)** bám sát bài giảng **29 Sessions** (Đại học FPT) và Giáo trình chuẩn Bộ Giáo dục & Đào tạo.

---

## 🚀 Tính năng nổi bật

1. **Phòng Ôn thi FE & Thi thử trắc nghiệm (`practice.html`)**:
   - **Ngân hàng 72+ câu hỏi** bao quát toàn bộ 29 Sessions.
   - **6 Modules phân loại chi tiết**:
     - **M1**: Chương Nhập Môn — Đối tượng, chức năng & phương pháp nghiên cứu Lịch sử Đảng
     - **M2**: Chương 1 — Sự ra đời của Đảng & Cương lĩnh chính trị đầu tiên (1920 - 1930)
     - **M3**: Chương 1 — Lãnh đạo giành chính quyền & Cách mạng Tháng Tám (1930 - 1945)
     - **M4**: Chương 2 — Kháng chiến chống thực dân Pháp và can thiệp Mỹ (1945 - 1954)
     - **M5**: Chương 2 — Xây dựng miền Bắc & Kháng chiến chống Mỹ cứu nước (1954 - 1975)
     - **M6**: Chương 3 — Thời kỳ quá độ lên CNXH & Công cuộc Đổi mới toàn diện (1975 - nay)
   - **Chế độ Thi thử FE (Exam Mode)**: Tự động bốc ngẫu nhiên **50 câu hỏi** trong 60 phút, chấm điểm tự động, xem lại câu sai/đúng và giải thích cặn kẽ.

2. **5 Bài Quiz chuyên đề theo từng thời kỳ lịch sử**:
   - `quiz1.html`: **Quiz 1** — Nhập môn & Sự ra đời của Đảng (1920 - 1930)
   - `quiz2.html`: **Quiz 2** — Giành chính quyền & Cách mạng Tháng Tám (1930 - 1945)
   - `quiz3.html`: **Quiz 3** — Kháng chiến chống thực dân Pháp (1945 - 1954)
   - `quiz4.html`: **Quiz 4** — Kháng chiến chống Mỹ cứu nước (1954 - 1975)
   - `quiz5.html`: **Quiz 5** — Thời kỳ Đổi mới & Hội nhập quốc tế (1975 - nay)

3. **Cơ sở dữ liệu 29 Sessions (`data/vnr202-curriculum.json`)**:
   - Trích xuất toàn văn nội dung slide từ bộ bài giảng gốc 29 Sessions PPTX/PDF.
   - Phục vụ tra cứu học phần và kết nối Trợ lý AI hỏi đáp.

---

## 💻 Cách chạy ứng dụng

### Cách 1: Mở trực tiếp (Không cần cài đặt)
Bạn có thể mở trực tiếp các file HTML bằng trình duyệt web bất kỳ (Chrome, Edge, Cốc Cốc, v.v.):
- Mở `home.html` để vào Trang chủ.
- Mở `practice.html` để vào Phòng Ôn thi FE & Thi thử.
- Mở `quiz1.html` đến `quiz5.html` để làm từng bài Quiz chuyên đề.

### Cách 2: Chạy qua Node.js Web Server (Khuyên dùng)
```powershell
# Di chuyển vào thư mục dự án
cd "C:\Users\brave\Downloads\VNR202_Quiz"

# Cài đặt thư viện (nếu cần dùng server & AI)
npm install

# Khởi động máy chủ
npm start
```
Truy cập: `http://localhost:3000/home.html` hoặc `http://localhost:3000/practice.html`.
