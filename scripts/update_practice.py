import sys

file_path = r"C:\Users\brave\Downloads\VNR202_Quiz\practice.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    (
        "<title>Thực hành & Ôn thi FE — Kinh tế chính trị Mác - Lênin (MLN131)</title>",
        "<title>Thực hành & Ôn thi FE — Lịch sử Đảng Cộng sản Việt Nam (VNR202)</title>"
    ),
    (
        "Thực hành Kinh tế chính trị Mác - Lênin<br /><span class=\"text-philo-gold italic font-normal\">(Học phần MLN131)</span>",
        "Thực hành Lịch sử Đảng Cộng sản Việt Nam<br /><span class=\"text-philo-gold italic font-normal\">(Học phần VNR202 — 29 Sessions)</span>"
    ),
    (
        "Phòng thực hành & Ôn thi MLN131 Tương tác",
        "Phòng thực hành & Ôn thi VNR202 Tương tác"
    ),
    (
        "1. Ôn thi FE (Ngân hàng MLN131)",
        "1. Ôn thi FE (Ngân hàng VNR202 — 72+ Câu)"
    ),
    (
        "Kinh tế chính trị Mác - Lênin · 50 câu · 60 phút",
        "Lịch sử Đảng Cộng sản Việt Nam (VNR202) · 50 câu · 60 phút"
    ),
    (
        "Ngân hàng 66 câu hỏi ôn thi FE chuẩn giáo trình",
        "Ngân hàng 72+ câu hỏi ôn thi FE chuẩn 29 Sessions VNR202"
    )
]

for old, new in replacements:
    content = content.replace(old, new)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated practice.html successfully!")
