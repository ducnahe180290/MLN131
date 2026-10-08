# Hướng dẫn bảo trì PhiloVerse MLN131

Đây là website học Kinh tế chính trị Mác - Lênin. Ưu tiên sửa đơn giản trong HTML, CSS, JavaScript và Express hiện có; không thêm lớp trừu tượng hoặc dịch vụ mới cho tính năng nhỏ.

## Điểm vào

- Trang chủ: `home.html`; tổng quan chương: `Overview.html`.
- Bài học: `module1.html`–`module6.html`.
- Ôn thi FE: `practice.html`, `js/quiz-fe-review.js`.
- Game: `games.html`, `js/games-config.js`; Ghế nóng nằm tại `game-hcm/game2/` vì liên kết kế thừa.
- API: `server.js`, `routes/`, `controllers/`.
- Dữ liệu AI: `data/mln131-curriculum.json`.

## Lưu ý

Repo còn file từ phiên bản Triết học và Tư tưởng Hồ Chí Minh. Không dùng các file đó làm nguồn MLN131 hoặc nạp chúng vào game MLN131. Chưa có PDF giáo trình Kinh tế chính trị của lớp nên mọi số trang cần được đối chiếu trước khi công bố là trích dẫn chuẩn.

API key chỉ đặt trong `.env` hoặc biến môi trường hosting. `.env` đã có trong `.gitignore`. Xem `README.md` và `SETUP_GUIDE.md` để chạy dự án.
