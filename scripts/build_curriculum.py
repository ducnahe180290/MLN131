import zipfile
import xml.etree.ElementTree as ET
import os
import json
import sys

pptx_dir = r"C:\Users\brave\Downloads\VNR202_updated SP24-20261111T084938Z-1-001\VNR202_updated SP24\PPT"
output_file = r"C:\Users\brave\Downloads\VNR202_Quiz\data\vnr202-curriculum.json"

curriculum = []

for session_num in range(1, 30):
    pptx_path = os.path.join(pptx_dir, f"Session {session_num}.pptx")
    if not os.path.exists(pptx_path):
        continue
    
    with zipfile.ZipFile(pptx_path) as z:
        slides = sorted(
            [f for f in z.namelist() if f.startswith("ppt/slides/slide") and f.endswith(".xml")],
            key=lambda x: int(x.replace("ppt/slides/slide", "").replace(".xml", ""))
        )
        
        slide_contents = []
        for s_idx, s in enumerate(slides):
            root = ET.fromstring(z.read(s))
            texts = [elem.text.strip() for elem in root.iter() if elem.tag.endswith("}t") and elem.text and elem.text.strip()]
            if texts:
                slide_text = " ".join(texts)
                slide_contents.append({"slide": s_idx + 1, "text": slide_text})
                
        # Determine chapter
        if session_num in [1, 2]:
            chapter = 0
            chapter_title = "Chương nhập môn: Đối tượng, chức năng, nhiệm vụ, nội dung và phương pháp nghiên cứu Lịch sử Đảng"
        elif 3 <= session_num <= 10:
            chapter = 1
            chapter_title = "Chương 1: Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 - 1945)"
        elif 11 <= session_num <= 18:
            chapter = 2
            chapter_title = "Chương 2: Đảng lãnh đạo hai cuộc kháng chiến chống ngoại xâm, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975)"
        else:
            chapter = 3
            chapter_title = "Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 đến nay)"

        title = f"Session {session_num}"
        if slide_contents:
            title = f"Session {session_num}: " + slide_contents[0]["text"][:100]

        curriculum.append({
            "session": session_num,
            "chapter": chapter,
            "chapter_title": chapter_title,
            "title": title,
            "content": "\n".join([f"Slide {item['slide']}: {item['text']}" for item in slide_contents]),
            "slides_count": len(slides)
        })

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(curriculum, f, ensure_ascii=False, indent=2)

print(f"Successfully built {output_file} with {len(curriculum)} sessions!")
