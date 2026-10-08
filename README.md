# PhiloVerse MLN131

Website học tập tương tác cho môn **Kinh tế chính trị Mác - Lênin (MLN131)**.

## Tính năng

- Sáu chương bài học tại `Overview.html` và `module1.html` đến `module6.html`.
- Ôn thi FE với 66 câu trong `js/quiz-fe-review.js`, mỗi đề thi thử chọn 50 câu.
- Bốn game ở `games.html`: giải mã thuật ngữ, bản đồ tư duy, ô chữ và Ghế nóng.
- Trợ lý hỏi đáp tại `ai-assistants.html`; API trong `server.js` tra dữ liệu ở `data/mln131-curriculum.json`.
- Tiến độ một số hoạt động được lưu trong `localStorage` của trình duyệt.

## Chạy trên máy

Yêu cầu Node.js và npm. Nếu Terminal đang ở thư mục workspace `D:\SPST MLN131`, vào thư mục dự án trước:

```powershell
cd .\MLN131
```

Sau đó chạy:

```bash
npm ci
copy .env.example .env
npm start
```

Mở `http://localhost:3000/`. Điền key vào `.env` nếu muốn gọi mô hình AI. Không đưa key vào mã frontend hoặc commit `.env`. Xem `SETUP_GUIDE.md` để biết biến môi trường nào cần dùng.

## Giới hạn học liệu hiện tại

`data/mln131-curriculum.json` có **16 mục tóm tắt** thuộc sáu chương. Repo chưa có PDF giáo trình Kinh tế chính trị Mác - Lênin của lớp; các số trang trong bài học, câu hỏi và dữ liệu AI **chưa được đối chiếu với PDF đó**. Trợ lý chỉ nên dùng để ôn tập và gợi ý tra cứu, không dùng làm nguồn trích dẫn học thuật cuối cùng.

Các file trong `game-hcm/`, `quiz1.html` đến `quiz5.html` và một số nội dung Triết học/Tư tưởng Hồ Chí Minh là phần kế thừa của phiên bản trước. Trang `games.html` chỉ dẫn tới game Ghế nóng MLN131 trong `game-hcm/game2/`; các game lịch sử cũ không nằm trong luồng học MLN131.

## Việc còn cần làm trước khi nộp

1. Nhận PDF giáo trình MLN131 của lớp và đối chiếu từng số trang, đáp án, giải thích và bài viết.
2. Kiểm thử toàn bộ luồng trên máy tính và điện thoại, đặc biệt game, thi thử và AI khi có key.
3. Gỡ hoặc chuyển riêng nội dung của môn học cũ nếu muốn bàn giao repo chỉ chứa MLN131.
