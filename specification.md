# Đặc tả ngắn — PhiloVerse MLN131

## Mục tiêu

Giúp sinh viên ôn tập Kinh tế chính trị Mác - Lênin bằng bài học, câu hỏi, trò chơi và trợ lý hỏi đáp. Sản phẩm là demo học phần, chưa phải hệ thống quản lý lớp học.

## Phạm vi đang triển khai

1. Đối tượng, phương pháp và chức năng của Kinh tế chính trị Mác - Lênin.
2. Hàng hóa, thị trường và các chủ thể tham gia thị trường.
3. Giá trị thặng dư trong nền kinh tế thị trường.
4. Cạnh tranh và độc quyền.
5. Kinh tế thị trường định hướng xã hội chủ nghĩa và quan hệ lợi ích ở Việt Nam.
6. Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế.

## Cấu trúc

- `home.html`, `Overview.html`, `module1.html`–`module6.html`: giao diện và bài học.
- `practice.html`, `js/quiz-fe-review.js`: ôn thi FE và thi thử.
- `games.html`, `js/games-config.js`: danh sách bốn game.
- `server.js`: máy chủ Express, API trò chơi và API hỏi đáp.
- `data/mln131-curriculum.json`: 16 mục tóm tắt dùng để tra cứu AI.
- `localStorage`: tiến độ cục bộ, không đồng bộ giữa thiết bị.

## Quy tắc nội dung

Không giới thiệu các mục tóm tắt như bản đầy đủ của giáo trình. Khi chưa có PDF của lớp, mọi số trang chỉ là tham chiếu cần kiểm chứng. AI phải trả lời trong phạm vi dữ liệu được cung cấp và nói rõ khi thiếu căn cứ.

## Tiêu chí hoàn thành bản demo

- Người học đi từ trang chủ đến sáu chương, ôn thi và bốn game bằng liên kết hoạt động.
- Game Ghế nóng tạo đủ 15 câu mỗi lượt và không nạp câu hỏi của môn khác.
- AI hoạt động khi cấu hình key, và có thông báo rõ ràng khi chỉ tra cứu dữ liệu tóm tắt.
- Nội dung hiển thị công khai nhất quán với môn MLN131.
- Đáp án và trích dẫn được đối chiếu với PDF giáo trình trước khi dùng làm học liệu chính thức.
