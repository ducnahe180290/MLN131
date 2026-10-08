# Cấu hình AI cho PhiloVerse MLN131

## Chạy cục bộ

Nếu Terminal đang ở `D:\SPST MLN131`, chuyển vào thư mục chứa `package.json` trước:

```powershell
cd .\MLN131
```

Sau đó chạy:

```bash
npm ci
copy .env.example .env
npm start
```

Mở `http://localhost:3000/`. Điền key thật vào `.env`; không gửi key qua chat hoặc commit file này. Nếu một key cũ từng bị lộ, hãy thu hồi key đó tại nhà cung cấp trước khi dùng key mới.

## Biến môi trường

- `GEMINI_API_KEY`: dùng cho trợ lý chính khi không có phản hồi từ OpenRouter; cần cho API giải thích quiz `/api/ask-quiz`.
- `OPENROUTER_API_KEY`: tùy chọn, trợ lý chính thử trước Gemini.
- `PORT`: cổng chạy cục bộ, mặc định 3000.

Không có key, `/api/ask-mln131` chỉ trả về mục tóm tắt phù hợp từ `data/mln131-curriculum.json`. Chức năng AI giải thích quiz cần `GEMINI_API_KEY`.

## Kiểm tra nhanh

1. Mở `http://localhost:3000/ai-assistants.html` và hỏi về một khái niệm MLN131.
2. Xác nhận câu trả lời không nhắc Tư tưởng Hồ Chí Minh hoặc Triết học như môn đang học.
3. Mở trang `practice.html`, thử một câu FE và liên kết hỏi AI.
4. Khi triển khai, đặt key trong phần biến môi trường của hosting rồi thử lại trên domain thật.

Repo hiện chỉ có 16 mục tóm tắt MLN131 và chưa có PDF giáo trình của lớp. Cấu hình key không tự bổ sung hoặc kiểm chứng học liệu.
