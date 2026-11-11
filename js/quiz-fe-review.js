// Ngân hàng câu hỏi ôn thi FE — Môn Lịch sử Đảng Cộng sản Việt Nam (VNR202)
// Căn cứ theo Giáo trình chuẩn Bộ Giáo dục & Đào tạo & Bài giảng 29 Sessions VNR202 - Đại học FPT
// Bao gồm toàn bộ Chương Nhập môn, Chương 1, Chương 2 và Chương 3

const FE_REVIEW_MODULES = [
  {
    "id": "m1",
    "title": "Chương Nhập Môn: Đối tượng, chức năng & phương pháp nghiên cứu Lịch sử Đảng"
  },
  {
    "id": "m2",
    "title": "Chương 1: Đảng Cộng sản Việt Nam ra đời & Cương lĩnh đầu tiên (1920 - 1930)"
  },
  {
    "id": "m3",
    "title": "Chương 1: Lãnh đạo giành chính quyền & Cách mạng Tháng Tám (1930 - 1945)"
  },
  {
    "id": "m4",
    "title": "Chương 2: Kháng chiến chống thực dân Pháp và can thiệp Mỹ (1945 - 1954)"
  },
  {
    "id": "m5",
    "title": "Chương 2: Xây dựng miền Bắc & Kháng chiến chống Mỹ cứu nước (1954 - 1975)"
  },
  {
    "id": "m6",
    "title": "Chương 3: Thời kỳ quá độ lên CNXH & Công cuộc Đổi mới toàn diện (1975 - nay)"
  }
];

const FE_REVIEW_QUESTIONS = [
  {
    "id": "vnr-m1-01",
    "module": "m1",
    "question": "Bộ môn Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành thuộc ngành khoa học nào?",
    "options": [
      "A. Khoa học Triết học",
      "B. Khoa học Lịch sử",
      "C. Khoa học Xã hội học",
      "D. Khoa học Chính trị học"
    ],
    "correct": 1,
    "explanation": "Giáo trình VNR202 - Session 1: Bộ môn Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành, là một bộ phận hợp thành của khoa học lịch sử nói chung."
  },
  {
    "id": "vnr-m1-02",
    "module": "m1",
    "question": "Tác phẩm lịch sử đầu tiên viết về phong trào cộng sản Đông Dương xuất bản năm 1933 là của ai?",
    "options": [
      "A. Nguyễn Ái Quốc",
      "B. Trần Phú",
      "C. Hà Huy Tập",
      "D. Lê Hồng Phong"
    ],
    "correct": 2,
    "explanation": "Session 1: Năm 1933, đồng chí Hà Huy Tập xuất bản cuốn sách 'Sơ khảo lịch sử phong trào cộng sản Đông Dương' - công trình lịch sử Đảng đầu tiên."
  },
  {
    "id": "vnr-m1-03",
    "module": "m1",
    "question": "Đại hội nào của Đảng đã nêu rõ nhiệm vụ tổng kết, nghiên cứu lịch sử Đảng?",
    "options": [
      "A. Đại hội I (1935)",
      "B. Đại hội II (1951)",
      "C. Đại hội III (1960)",
      "D. Đại hội IV (1976)"
    ],
    "correct": 2,
    "explanation": "Session 1: Đại hội III của Đảng (tháng 9/1960) đã nêu rõ nhiệm vụ phải tiến hành tổng kết, nghiên cứu lịch sử vẻ vang của Đảng."
  },
  {
    "id": "vnr-m1-04",
    "module": "m1",
    "question": "Ban Nghiên cứu Lịch sử Đảng Trung ương (tiền thân của Viện Lịch sử Đảng ngày nay) được thành lập vào năm nào?",
    "options": [
      "A. 1954",
      "B. 1960",
      "C. 1962",
      "D. 1975"
    ],
    "correct": 2,
    "explanation": "Session 1: Năm 1962, Ban Bí thư Trung ương Đảng quyết định thành lập Ban Nghiên cứu Lịch sử Đảng Trung ương."
  },
  {
    "id": "vnr-m1-05",
    "module": "m1",
    "question": "Đối tượng nghiên cứu của môn học Lịch sử Đảng Cộng sản Việt Nam bao gồm những nội dung nào?",
    "options": [
      "A. Các sự kiện lịch sử của Đảng; Cương lĩnh, đường lối; quá trình lãnh đạo và bài học kinh nghiệm",
      "B. Chỉ nghiên cứu tiểu sử của các đồng chí Tổng Bí thư qua các thời kỳ",
      "C. Chỉ nghiên cứu tiến trình lịch sử các cuộc chiến tranh giải phóng dân tộc",
      "D. Quá trình vận động địa chất và văn hóa khảo cổ học trên lãnh thổ Việt Nam"
    ],
    "correct": 0,
    "explanation": "Session 1-2: Đối tượng nghiên cứu của khoa học Lịch sử Đảng là sự ra đời, phát triển và hoạt động lãnh đạo của Đảng; Cương lĩnh, đường lối; công tác xây dựng Đảng và tổng kết bài học kinh nghiệm cách mạng."
  },
  {
    "id": "vnr-m1-06",
    "module": "m1",
    "question": "Khoa học Lịch sử Đảng Cộng sản Việt Nam có những chức năng cơ bản nào?",
    "options": [
      "A. Chức năng nhận thức, chức năng giáo dục, chức năng dự báo và phê phán",
      "B. Chức năng kinh tế, chức năng hành chính, chức năng tư pháp",
      "C. Chức năng giải trí, chức năng thương mại, chức năng đối ngoại",
      "D. Chức năng kiểm soát, chức năng cưỡng chế, chức năng trừng phạt"
    ],
    "correct": 0,
    "explanation": "Session 1: Khoa học Lịch sử Đảng có 3 chức năng căn bản: Chức năng nhận thức, Chức năng giáo dục, Chức năng dự báo và phê phán."
  },
  {
    "id": "vnr-m1-07",
    "module": "m1",
    "question": "Chức năng nào của Lịch sử Đảng giúp trang bị hệ thống tri thức về quy luật ra đời, phát triển và sự lãnh đạo tất yếu của Đảng?",
    "options": [
      "A. Chức năng dự báo",
      "B. Chức năng giáo dục",
      "C. Chức năng nhận thức",
      "D. Chức năng phê phán"
    ],
    "correct": 2,
    "explanation": "Session 1: Chức năng nhận thức giúp người học nắm vững quy luật khách quan của sự ra đời Đảng và vai trò lãnh đạo độc tôn quyết định thắng lợi của cách mạng Việt Nam."
  },
  {
    "id": "vnr-m1-08",
    "module": "m1",
    "question": "Nhiệm vụ hàng đầu của môn học Lịch sử Đảng Cộng sản Việt Nam là gì?",
    "options": [
      "A. Trình bày có hệ thống Cương lĩnh, đường lối và chủ trương lãnh đạo của Đảng",
      "B. Liệt kê các niên đại chiến dịch mà không cần phân tích nguyên nhân",
      "C. Phê phán tuyệt đối tất cả các lực lượng chính trị đối lập",
      "D. Thay thế hoàn toàn môn Lịch sử Việt Nam phổ thông"
    ],
    "correct": 0,
    "explanation": "Session 1-2: Nhiệm vụ cơ bản gồm: Trình bày có hệ thống Cương lĩnh, đường lối; tái hiện tiến trình lịch sử lãnh đạo; tổng kết lịch sử và làm rõ vai trò tổ chức của Đảng."
  },
  {
    "id": "vnr-m1-09",
    "module": "m1",
    "question": "Phương pháp nghiên cứu cơ bản, chủ yếu nhất của môn học Lịch sử Đảng là gì?",
    "options": [
      "A. Phương pháp phân tích tâm lý học cá nhân",
      "B. Phương pháp lịch sử kết hợp chặt chẽ với phương pháp logic",
      "C. Phương pháp điều tra xã hội học định lượng thuần túy",
      "D. Phương pháp suy diễn trực giác trừu tượng"
    ],
    "correct": 1,
    "explanation": "Session 2: Phương pháp lịch sử và phương pháp logic là hai phương pháp cơ bản, gắn bó hữu cơ để vừa tái hiện chân thực tiến trình lịch sử, vừa rút ra bản chất quy luật."
  },
  {
    "id": "vnr-m1-10",
    "module": "m1",
    "question": "Nền tảng phương pháp luận chỉ đạo việc nghiên cứu môn Lịch sử Đảng là gì?",
    "options": [
      "A. Chủ nghĩa thực dụng và chủ nghĩa kinh nghiệm",
      "B. Chủ nghĩa duy tâm khách quan",
      "C. Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử",
      "D. Thuyết tương đối văn hóa phương Đông"
    ],
    "correct": 2,
    "explanation": "Session 2: Nghiên cứu Lịch sử Đảng phải đứng vững trên lập trường chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh."
  },
  {
    "id": "vnr-m1-11",
    "module": "m1",
    "question": "Chức năng 'dự báo và phê phán' của khoa học Lịch sử Đảng có ý nghĩa gì?",
    "options": [
      "A. Chỉ trích các sai lầm trong quá khứ nhằm phủ nhận thành quả cách mạng",
      "B. Nhận thức quá khứ để hiểu rõ hiện tại, dự báo xu thế tương lai và tự phê bình, phê phán biểu hiện tiêu cực",
      "C. Dự đoán chính xác các biến động thị trường chứng khoán ngắn hạn",
      "D. Tiên tri tương lai bằng phương pháp huyền học"
    ],
    "correct": 1,
    "explanation": "Session 1: Chức năng dự báo và phê phán giúp tổng kết bài học quá khứ để định hướng tương lai, đồng thời kiên quyết tự phê bình và phê phán các biểu hiện suy thoái, sai lầm."
  },
  {
    "id": "vnr-m1-12",
    "module": "m1",
    "question": "Văn bản nào của Nhà nước quyết định việc biên soạn giáo trình quốc gia môn Lịch sử Đảng Cộng sản Việt Nam vào năm 1992?",
    "options": [
      "A. Quyết định của Chủ tịch Hội đồng Bộ trưởng ngày 13/7/1992",
      "B. Nghị quyết của Quốc hội khóa I năm 1946",
      "C. Chỉ thị của Bộ Chính trị năm 1986",
      "D. Thông tư liên bộ năm 2005"
    ],
    "correct": 0,
    "explanation": "Session 1: Ngày 13/7/1992, Chủ tịch Hội đồng Bộ trưởng (nay là Thủ tướng Chính phủ) ban hành quyết định biên soạn giáo trình quốc gia các môn KH Mác - Lênin, Lịch sử Đảng."
  },
  {
    "id": "vnr-m2-01",
    "module": "m2",
    "question": "Đặc điểm cơ bản của xã hội Việt Nam sau khi thực dân Pháp thiết lập bộ máy thống trị là gì?",
    "options": [
      "A. Xã hội phong kiến độc lập",
      "B. Xã hội tư bản chủ nghĩa phát triển",
      "C. Xã hội thuộc địa nửa phong kiến",
      "D. Xã hội dân chủ nhân dân"
    ],
    "correct": 2,
    "explanation": "Session 3: Chính sách cai trị và khai thác thuộc địa của Pháp biến Việt Nam từ một quốc gia phong kiến độc lập thành một nước thuộc địa nửa phong kiến."
  },
  {
    "id": "vnr-m2-02",
    "module": "m2",
    "question": "Mâu thuẫn chủ yếu và gay gắt nhất trong xã hội Việt Nam thuộc địa nửa phong kiến là mâu thuẫn giữa:",
    "options": [
      "A. Giai cấp công nhân với giai cấp tư sản",
      "B. Giai cấp nông dân với giai cấp địa chủ phong kiến",
      "C. Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
      "D. Tầng lớp tiểu tư sản trí thức với bọn phong kiến phản động"
    ],
    "correct": 2,
    "explanation": "Session 3: Mâu thuẫn dân tộc giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn bao trùm, chủ yếu và cấp bách nhất đòi hỏi phải giải quyết."
  },
  {
    "id": "vnr-m2-03",
    "module": "m2",
    "question": "Sự kiện nào đánh dấu bước chuyển biến quyết định trong lập trường tư tưởng của Nguyễn Ái Quốc từ người yêu nước thành người cộng sản?",
    "options": [
      "A. Ra đi tìm đường cứu nước tại bến cảng Nhà Rồng (5/6/1911)",
      "B. Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Véc-xây (1919)",
      "C. Đọc Luận cương của Lênin và bỏ phiếu tán thành gia nhập Quốc tế III, sáng lập Đảng Cộng sản Pháp (12/1920)",
      "D. Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (6/1925)"
    ],
    "correct": 2,
    "explanation": "Session 3: Tại Đại hội Tours (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển sang chủ nghĩa cộng sản."
  },
  {
    "id": "vnr-m2-04",
    "module": "m2",
    "question": "Tổ chức cách mạng tiền thân trực tiếp chuẩn bị về mặt chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam là:",
    "options": [
      "A. Hội Duy Tân",
      "B. Việt Nam Quang phục Hội",
      "C. Hội Việt Nam Cách mạng Thanh niên",
      "D. Tân Việt Cách mạng Đảng"
    ],
    "correct": 2,
    "explanation": "Session 3: Tháng 6/1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (Trung Quốc), làm hạt nhân chuẩn bị cho việc thành lập Đảng."
  },
  {
    "id": "vnr-m2-05",
    "module": "m2",
    "question": "Tác phẩm nào của Nguyễn Ái Quốc xuất bản năm 1927 được coi là cuốn cẩm nang lý luận chuẩn bị về chính trị, tư tưởng cho việc lập Đảng?",
    "options": [
      "A. Bản án chế độ thực dân Pháp",
      "B. Đường Kách mệnh",
      "C. Lời kêu gọi toàn quốc kháng chiến",
      "D. Kháng chiến nhất định thắng lợi"
    ],
    "correct": 1,
    "explanation": "Session 3: 'Đường Kách mệnh' (1927) tập hợp các bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện chính trị ở Quảng Châu, chỉ rõ bản chất cách mạng vô sản."
  },
  {
    "id": "vnr-m2-06",
    "module": "m2",
    "question": "Tổ chức cộng sản nào ra đời đầu tiên tại Việt Nam vào tháng 6 năm 1929?",
    "options": [
      "A. An Nam Cộng sản Đảng",
      "B. Đông Dương Cộng sản Liên đoàn",
      "C. Đông Dương Cộng sản Đảng",
      "D. Đảng Tân Việt"
    ],
    "correct": 2,
    "explanation": "Session 3: Ngày 17/6/1929, Đông Dương Cộng sản Đảng được thành lập tại số 312 Khâm Thiên (Hà Nội) bởi các đại biểu cộng sản Bắc Kỳ."
  },
  {
    "id": "vnr-m2-07",
    "module": "m2",
    "question": "Hội nghị thành lập Đảng Cộng sản Việt Nam diễn ra vào thời gian và địa điểm nào?",
    "options": [
      "A. Tháng 3/1935 tại Ma Cao (Trung Quốc)",
      "B. Từ ngày 6/1/1930 đến đầu tháng 2/1930 tại Cửu Long (Hương Cảng, Trung Quốc)",
      "C. Tháng 5/1941 tại Pác Bó (Cao Bằng)",
      "D. Tháng 10/1930 tại Quảng Châu (Trung Quốc)"
    ],
    "correct": 1,
    "explanation": "Session 4: Hội nghị hợp nhất các tổ chức cộng sản do Nguyễn Ái Quốc chủ trì diễn ra từ 6/1/1930 đến 7/2/1930 tại Cửu Long (Hương Cảng, Trung Quốc)."
  },
  {
    "id": "vnr-m2-08",
    "module": "m2",
    "question": "Những tổ chức cộng sản nào đã cử đại biểu tham dự Hội nghị thành lập Đảng đầu năm 1930?",
    "options": [
      "A. Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng",
      "B. Đông Dương Cộng sản Liên đoàn và Đảng Tân Việt",
      "C. Việt Nam Quốc dân Đảng và Hội Việt Nam Cách mạng Thanh niên",
      "D. Cả 3 tổ chức cộng sản cùng họp ngay từ ngày đầu"
    ],
    "correct": 0,
    "explanation": "Session 4: Tham gia Hội nghị gồm đại biểu Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng dưới sự chủ trì của Nguyễn Ái Quốc. Đông Dương Cộng sản Liên đoàn gia nhập vào ngày 24/2/1930."
  },
  {
    "id": "vnr-m2-09",
    "module": "m2",
    "question": "Các văn kiện nào hợp thành Cương lĩnh chính trị đầu tiên của Đảng do Nguyễn Ái Quốc soạn thảo năm 1930?",
    "options": [
      "A. Luận cương chính trị và Điều lệ Đảng tháng 10/1930",
      "B. Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt và Điều lệ vắn tắt",
      "C. Tác phẩm Đường Kách mệnh và Bản án chế độ thực dân Pháp",
      "D. Lời kêu gọi toàn quốc kháng chiến và Chỉ thị Kháng chiến kiến quốc"
    ],
    "correct": 1,
    "explanation": "Session 4: Cương lĩnh chính trị đầu tiên gồm: 'Chánh cương vắn tắt của Đảng', 'Sách lược vắn tắt của Đảng', 'Chương trình tóm tắt' và 'Điều lệ vắn tắt của Đảng'."
  },
  {
    "id": "vnr-m2-10",
    "module": "m2",
    "question": "Phương hướng chiến lược của cách mạng Việt Nam được nêu trong Cương lĩnh chính trị đầu tiên (2/1930) là:",
    "options": [
      "A. Tiến hành cách mạng tư sản dân quyền ngay lập tức để lập chế độ tư bản",
      "B. Chủ trương làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản",
      "C. Làm cách mạng xã hội chủ nghĩa bỏ qua giai đoạn giải phóng dân tộc",
      "D. Đấu tranh nghị trường kết hợp vận động cải cách kinh tế"
    ],
    "correct": 1,
    "explanation": "Session 4: Cương lĩnh xác định phương hướng chiến lược: 'Chủ trương làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'."
  },
  {
    "id": "vnr-m2-11",
    "module": "m2",
    "question": "Theo Cương lĩnh chính trị đầu tiên (2/1930), hai lực lượng nòng cốt cơ bản của cách mạng Việt Nam là gì?",
    "options": [
      "A. Trí thức và tiểu tư sản",
      "B. Công nhân và nông dân",
      "C. Địa chủ yêu nước và tư sản dân tộc",
      "D. Binh lính và thanh niên học sinh"
    ],
    "correct": 1,
    "explanation": "Session 4: Cương lĩnh chỉ rõ: Đảng phải thu phục cho được đại bộ phận giai cấp công nhân và đại bộ phận nông dân; công - nông là gốc của cách mạng."
  },
  {
    "id": "vnr-m2-12",
    "module": "m2",
    "question": "Ý nghĩa lịch sử vĩ đại của sự kiện thành lập Đảng Cộng sản Việt Nam vào ngày 3/2/1930 là gì?",
    "options": [
      "A. Chấm dứt sự khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo cách mạng Việt Nam",
      "B. Làm cho thực dân Pháp lập tức rút quân khỏi Đông Dương",
      "C. Hoàn thành ngay cuộc cách mạng ruộng đất cho nông dân nghèo",
      "D. Đưa đất nước bước thẳng vào thời kỳ công nghiệp hóa"
    ],
    "correct": 0,
    "explanation": "Session 4: Đảng ra đời chấm dứt thời kỳ khủng hoảng, bế tắc về đường lối và tổ chức lãnh đạo phong trào yêu nước, mở ra bước ngoặt quyết định cho lịch sử dân tộc."
  },
  {
    "id": "vnr-m3-01",
    "module": "m3",
    "question": "Hội nghị Ban Chấp hành Trung ương Đảng tháng 10 năm 1930 tại Hương Cảng đã bầu ai làm Tổng Bí thư đầu tiên của Đảng?",
    "options": [
      "A. Nguyễn Ái Quốc",
      "B. Trần Phú",
      "C. Hà Huy Tập",
      "D. Lê Hồng Phong"
    ],
    "correct": 1,
    "explanation": "Session 6: Hội nghị Trung ương tháng 10/1930 đã cử Ban Chấp hành Trung ương chính thức và bầu đồng chí Trần Phú làm Tổng Bí thư đầu tiên."
  },
  {
    "id": "vnr-m3-02",
    "module": "m3",
    "question": "Hội nghị tháng 10/1930 đã thông qua văn kiện quan trọng nào và đổi tên Đảng thành gì?",
    "options": [
      "A. Cương lĩnh chính trị đầu tiên; đổi tên thành Việt Nam Độc lập Đảng",
      "B. Luận cương chính trị; đổi tên thành Đảng Cộng sản Đông Dương",
      "C. Chính cương Đảng Lao động; đổi tên thành Đảng Lao động Việt Nam",
      "D. Lời kêu gọi toàn quốc; giữ nguyên Đảng Cộng sản Việt Nam"
    ],
    "correct": 1,
    "explanation": "Session 6: Hội nghị tháng 10/1930 thông qua Luận cương chính trị do Trần Phú khởi thảo và quyết định đổi tên Đảng thành Đảng Cộng sản Đông Dương."
  },
  {
    "id": "vnr-m3-03",
    "module": "m3",
    "question": "Điểm hạn chế cơ bản của Luận cương chính trị tháng 10/1930 so với Cương lĩnh tháng 2/1930 là gì?",
    "options": [
      "A. Chưa nêu được vấn đề đấu tranh giai cấp",
      "B. Nặng về đấu tranh giai cấp và thổ địa, chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu; đánh giá hẹp hòi các lực lượng tiểu tư sản, tư sản dân tộc",
      "C. Quá đề cao vai trò của địa chủ và phú nông",
      "D. Chủ trương hòa hoãn vô điều kiện với đế quốc Pháp"
    ],
    "correct": 1,
    "explanation": "Session 6: Luận cương 10/1930 coi 'vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền', xem nhẹ mâu thuẫn dân tộc và chưa thấy được khả năng cách mạng của tầng lớp trung gian."
  },
  {
    "id": "vnr-m3-04",
    "module": "m3",
    "question": "Đỉnh cao của phong trào cách mạng 1930 - 1931 là sự kiện nào?",
    "options": [
      "A. Cuộc bãi công của công nhân Ba Son",
      "B. Sự ra đời của chính quyền Xô Viết Nghệ - Tĩnh",
      "C. Khởi nghĩa Nam Kỳ",
      "D. Khởi nghĩa Bắc Sơn"
    ],
    "correct": 1,
    "explanation": "Session 5: Phong trào 1930-1931 đạt đỉnh cao với sự ra đời của các Xô Viết ở Nghệ An và Hà Tĩnh - hình thức chính quyền của nhân dân lao động đầu tiên."
  },
  {
    "id": "vnr-m3-05",
    "module": "m3",
    "question": "Đại hội đại biểu lần thứ I của Đảng Cộng sản Đông Dương (tháng 3/1935) họp ở đâu và có ý nghĩa gì?",
    "options": [
      "A. Họp tại Tân Trào; quyết định phát động Tổng khởi nghĩa",
      "B. Họp tại Pác Bó; quyết định thành lập Mặt trận Việt Minh",
      "C. Họp tại Ma Cao (Trung Quốc); đánh dấu thắng lợi của cuộc đấu tranh khôi phục tổ chức Đảng và phong trào cách mạng",
      "D. Họp tại Hà Nội; thông qua Hiến pháp đầu tiên"
    ],
    "correct": 2,
    "explanation": "Session 5: Đại hội I (3/1935 tại Ma Cao) đã bầu Lê Hồng Phong làm Tổng Bí thư, đánh dấu sự khôi phục hoàn chỉnh hệ thống tổ chức của Đảng sau thời kỳ thoái trào."
  },
  {
    "id": "vnr-m3-06",
    "module": "m3",
    "question": "Chủ trương đấu tranh của Đảng trong phong trào Dân chủ 1936 - 1939 tập trung vào mục tiêu nào?",
    "options": [
      "A. Đánh đổ hoàn toàn đế quốc Pháp, tịch thu toàn bộ ruộng đất",
      "B. Đòi tự do, dân chủ, cơm áo, hòa bình; kết hợp đấu tranh công khai, hợp pháp với bí mật, bất hợp pháp",
      "C. Khởi nghĩa vũ trang giành chính quyền ngay lập tức",
      "D. Hợp tác liên minh quân sự với phát xít Nhật"
    ],
    "correct": 1,
    "explanation": "Session 7: Thời kỳ 1936-1939, Đảng chuyển hướng đấu tranh sang đòi các quyền dân sinh, dân chủ, chống phát xít và chống chiến tranh đế quốc."
  },
  {
    "id": "vnr-m3-07",
    "module": "m3",
    "question": "Hội nghị nào của Trung ương Đảng đã hoàn thành việc chuyển hướng chỉ đạo chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và thành lập Mặt trận Việt Minh?",
    "options": [
      "A. Hội nghị Trung ương 6 (11/1939)",
      "B. Hội nghị Trung ương 7 (11/1940)",
      "C. Hội nghị Trung ương 8 (5/1941) tại Pác Bó",
      "D. Hội nghị toàn quốc tại Tân Trào (8/1945)"
    ],
    "correct": 2,
    "explanation": "Session 8: Hội nghị Trung ương 8 (5/1941) do Nguyễn Ái Quốc chủ trì tại Pác Bó (Cao Bằng) đã quyết định đặt quyền lợi dân tộc lên trên hết, thành lập Mặt trận Việt Minh ngày 19/5/1941."
  },
  {
    "id": "vnr-m3-08",
    "module": "m3",
    "question": "Chỉ thị lịch sử nào của Ban Thường vụ Trung ương Đảng ra đời ngay sau khi Nhật đảo chính Pháp ngày 9/3/1945?",
    "options": [
      "A. Chỉ thị 'Kháng chiến kiến quốc'",
      "B. Chỉ thị 'Toàn dân kháng chiến'",
      "C. Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' (12/3/1945)",
      "D. Chỉ thị 'Sửa đổi lề lối làm việc'"
    ],
    "correct": 2,
    "explanation": "Session 9: Ngày 12/3/1945, Ban Thường vụ TƯ Đảng ra Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta', xác định phát xít Nhật là kẻ thù chính, cụ thể trước mắt."
  },
  {
    "id": "vnr-m3-09",
    "module": "m3",
    "question": "Khẩu hiệu nào được Đảng phát động trong cao trào kháng Nhật cứu nước đã đáp ứng nguyện vọng cấp bách nhất của nhân dân đang chịu nạn đói khủng khiếp năm 1945?",
    "options": [
      "A. 'Người cày có ruộng'",
      "B. 'Phá kho thóc Nhật, giải quyết nạn đói'",
      "C. 'Tịch thu gia sản của bọn tay sai'",
      "D. 'Giảm tô, giảm tức 25%'"
    ],
    "correct": 1,
    "explanation": "Session 9: Khẩu hiệu 'Phá kho thóc của Nhật để giải quyết nạn đói' thổi bùng ngọn lửa đấu tranh, thu hút hàng triệu quần chúng tiến hành khởi nghĩa từng phần."
  },
  {
    "id": "vnr-m3-10",
    "module": "m3",
    "question": "Hội nghị toàn quốc của Đảng họp tại Tân Trào (14 - 15/8/1945) đã đưa ra quyết sách lịch sử gì?",
    "options": [
      "A. Phát động Tổng khởi nghĩa giành chính quyền trong cả nước trước khi quân Đồng minh vào Đông Dương",
      "B. Chờ quân Đồng minh vào giải giáp phát xít Nhật rồi mới khởi nghĩa",
      "C. Đàm phán với chính phủ Trần Trọng Kim để thành lập nội các liên hiệp",
      "D. Giải tán các căn cứ du kích để tránh thương vong"
    ],
    "correct": 0,
    "explanation": "Session 9-10: Hội nghị Tân Trào quyết định chớp thời cơ thuận lợi ngàn năm có một khi Nhật đầu hàng, phát động toàn dân Tổng khởi nghĩa giành chính quyền."
  },
  {
    "id": "vnr-m3-11",
    "module": "m3",
    "question": "Sự kiện ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội) có ý nghĩa như thế nào?",
    "options": [
      "A. Thành lập Mặt trận Liên Việt",
      "B. Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa",
      "C. Đón tiếp phái đoàn quân Đồng minh",
      "D. Bầu Quốc hội khóa đầu tiên của nước ta"
    ],
    "correct": 1,
    "explanation": "Session 10: Ngày 2/9/1945, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản Tuyên ngôn Độc lập, tuyên bố nền độc lập tự do của nước Việt Nam mới."
  },
  {
    "id": "vnr-m3-12",
    "module": "m3",
    "question": "Nguyên nhân then chốt quyết định nhất dẫn tới thắng lợi của Cách mạng Tháng Tám năm 1945 là:",
    "options": [
      "A. Sự viện trợ quân sự trực tiếp của phe Đồng minh",
      "B. Sự lãnh đạo đúng đắn, sáng tạo của Đảng Cộng sản Đông Dương đứng đầu là Chủ tịch Hồ Chí Minh",
      "C. Thực dân Pháp tự nguyện trao trả nền độc lập",
      "D. Tình hình kinh tế thế giới ổn định"
    ],
    "correct": 1,
    "explanation": "Session 10: Sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh với đường lối cứu nước đúng đắn, nghệ thuật chớp thời cơ tài tình là nhân tố quyết định số một thắng lợi CMT8."
  },
  {
    "id": "vnr-m4-01",
    "module": "m4",
    "question": "Tình hình nước Việt Nam Dân chủ Cộng hòa sau Cách mạng Tháng Tám năm 1945 được ví như thế nào?",
    "options": [
      "A. Vững như bàn thạch",
      "B. 'Ngàn cân treo sợi tóc'",
      "C. Cờ đến tay phải phất",
      "D. Trăm hoa đua nở"
    ],
    "correct": 1,
    "explanation": "Session 11: Đất nước vừa giành được độc lập đã phải đối mặt cùng lúc với ba thứ giặc: giặc đói, giặc dốt và giặc ngoại xâm, rơi vào tình thế 'ngàn cân treo sợi tóc'."
  },
  {
    "id": "vnr-m4-02",
    "module": "m4",
    "question": "Chỉ thị 'Kháng chiến kiến quốc' ngày 25/11/1945 của Trung ương Đảng đã xác định kẻ thù chính của nhân dân Đông Dương lúc này là:",
    "options": [
      "A. Quân đội Tưởng Giới Thạch",
      "B. Quân đội Anh",
      "C. Thực dân Pháp xâm lược",
      "D. Phát xít Nhật còn lại"
    ],
    "correct": 2,
    "explanation": "Session 11: Chỉ thị xác định: Kẻ thù chính của ta lúc này là thực dân Pháp xâm lược; khẩu hiệu hành động là 'Dân tộc trên hết, Tổ quốc trên hết'."
  },
  {
    "id": "vnr-m4-03",
    "module": "m4",
    "question": "Chủ trương sách lược của Đảng và Chủ tịch Hồ Chí Minh từ sau ngày 2/9/1945 đến trước ngày 6/3/1946 là gì?",
    "options": [
      "A. Đánh cả Pháp lẫn Tưởng cùng một lúc",
      "B. Hòa hoãn với quân Tưởng ở miền Bắc để tập trung lực lượng đánh thực dân Pháp ở miền Nam",
      "C. Hòa hoãn với Pháp để đánh Tưởng",
      "D. Tự nguyện gia nhập Liên hiệp Pháp"
    ],
    "correct": 1,
    "explanation": "Session 11: Ta thực hiện sách lược 'hoa - việt thân thiện', nhân nhượng một số quyền lợi kinh tế, chính trị cho quân Tưởng để rảnh tay đối phó với Pháp ở Nam Bộ."
  },
  {
    "id": "vnr-m4-04",
    "module": "m4",
    "question": "Hiệp định Sơ bộ ngày 6/3/1946 và Tạm ước ngày 14/9/1946 được Đảng ta ký kết với Pháp nhằm mục đích gì?",
    "options": [
      "A. Chấp nhận đầu hàng để bảo toàn lực lượng",
      "B. Tránh đối đầu cùng lúc nhiều kẻ thù, đuổi 20 vạn quân Tưởng về nước và tranh thủ thời gian chuẩn bị kháng chiến lâu dài",
      "C. Nhờ quân Pháp giữ gìn trật tự ở miền Bắc",
      "D. Chấm dứt vĩnh viễn mâu thuẫn giữa hai nước"
    ],
    "correct": 1,
    "explanation": "Session 11: Việc ký Hiệp định Sơ bộ 6/3/1946 giúp ta đẩy quân Tưởng về nước, tránh đụng độ một lúc với hai kẻ thù hung bạo, tranh thủ thời gian hòa hoãn quý báu."
  },
  {
    "id": "vnr-m4-05",
    "module": "m4",
    "question": "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát ra vào thời điểm lịch sử nào?",
    "options": [
      "A. Đêm ngày 19 tháng 12 năm 1946",
      "B. Ngày 2 tháng 9 năm 1945",
      "C. Ngày 6 tháng 3 năm 1946",
      "D. Ngày 19 tháng 5 năm 1947"
    ],
    "correct": 0,
    "explanation": "Session 12: Trước dã tâm xâm lược trắng trợn của thực dân Pháp, đêm ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến."
  },
  {
    "id": "vnr-m4-06",
    "module": "m4",
    "question": "Đường lối kháng chiến chống thực dân Pháp của Đảng ta được xác định với những nội dung cơ bản nào?",
    "options": [
      "A. Đánh nhanh thắng nhanh, dựa vào viện trợ của nước ngoài",
      "B. Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế",
      "C. Chỉ chú trọng đấu tranh ngoại giao tại Liên Hợp Quốc",
      "D. Kháng chiến cục bộ từng vùng, dựa chủ yếu vào lực lượng cơ động tinh nhuệ"
    ],
    "correct": 1,
    "explanation": "Session 12: Đường lối kháng chiến chống Pháp thể hiện tập trung qua các văn kiện: Toàn dân, toàn diện, lâu dài (trường kỳ), tự lực cánh sinh là chính."
  },
  {
    "id": "vnr-m4-07",
    "module": "m4",
    "question": "Tác phẩm lý luận quân sự nổi tiếng 'Kháng chiến nhất định thắng lợi' (1947) là của ai?",
    "options": [
      "A. Hồ Chí Minh",
      "B. Võ Nguyên Giáp",
      "C. Trường Chinh",
      "D. Phạm Văn Đồng"
    ],
    "correct": 2,
    "explanation": "Session 12: Tác phẩm 'Kháng chiến nhất định thắng lợi' do Tổng Bí thư Trường Chinh viết năm 1947, giải thích cặn kẽ đường lối kháng chiến toàn dân, toàn diện, trường kỳ."
  },
  {
    "id": "vnr-m4-08",
    "module": "m4",
    "question": "Thắng lợi quân sự nào của ta đã đập tan hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của thực dân Pháp?",
    "options": [
      "A. Chiến dịch Điện Biên Phủ (1954)",
      "B. Chiến dịch Việt Bắc Thu - Đông (1947)",
      "C. Chiến dịch Biên Giới Thu - Đông (1950)",
      "D. Chiến dịch Hòa Bình (1951)"
    ],
    "correct": 1,
    "explanation": "Session 12: Chiến dịch Việt Bắc Thu - Đông 1947 đã bẻ gãy gọng kìm tấn công của thực dân Pháp lên cơ quan đầu não kháng chiến, buộc địch phải chuyển sang đánh lâu dài."
  },
  {
    "id": "vnr-m4-09",
    "module": "m4",
    "question": "Chiến dịch Biên Giới Thu - Đông năm 1950 có ý nghĩa bước ngoặt lịch sử như thế nào?",
    "options": [
      "A. Giành lại quyền chủ động chiến lược trên chiến trường chính Bắc Bộ và khai thông đường liên lạc quốc tế",
      "B. Buộc Pháp phải đầu hàng vô điều kiện",
      "C. Kết thúc hoàn toàn cuộc kháng chiến chống Pháp",
      "D. Đưa quân ta tiến thẳng vào giải phóng Sài Gòn"
    ],
    "correct": 0,
    "explanation": "Session 12: Thắng lợi Chiến dịch Biên Giới 1950 đánh dấu quân ta giành được quyền chủ động chiến lược trên chiến trường Bắc Bộ, mở toang biên giới với các nước XHCN."
  },
  {
    "id": "vnr-m4-10",
    "module": "m4",
    "question": "Đại hội đại biểu toàn quốc lần thứ II của Đảng (tháng 2/1951 tại Tuyên Quang) quyết định Đảng ra hoạt động công khai với tên gọi mới là gì?",
    "options": [
      "A. Đảng Cộng sản Việt Nam",
      "B. Đảng Cộng sản Đông Dương",
      "C. Đảng Lao động Việt Nam",
      "D. Hội Nghiên cứu Chủ nghĩa Mác"
    ],
    "correct": 2,
    "explanation": "Session 13: Đại hội II (2/1951) quyết định đưa Đảng ra hoạt động công khai lấy tên là Đảng Lao động Việt Nam; đồng chí Trường Chinh tiếp tục được bầu làm Tổng Bí thư."
  },
  {
    "id": "vnr-m4-11",
    "module": "m4",
    "question": "Đỉnh cao của cuộc tiến công chiến lược Đông Xuân 1953 - 1954 đập tan Kế hoạch Nava của Pháp - Mỹ là chiến dịch nào?",
    "options": [
      "A. Chiến dịch Trung Du",
      "B. Chiến dịch Đường 9",
      "C. Chiến dịch lịch sử Điện Biên Phủ",
      "D. Chiến dịch Thượng Lào"
    ],
    "correct": 2,
    "explanation": "Session 14: Chiến dịch Điện Biên Phủ trải qua 56 ngày đêm 'khoét núi, ngủ hầm, mưa dầm, cơm vắt' (13/3 - 7/5/1954) đã tiêu diệt hoàn toàn tập đoàn cứ điểm mạnh nhất Đông Dương."
  },
  {
    "id": "vnr-m4-12",
    "module": "m4",
    "question": "Văn bản pháp lý quốc tế nào buộc thực dân Pháp và các nước tham dự công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam năm 1954?",
    "options": [
      "A. Hiệp ước Versailles",
      "B. Hiệp định Sơ bộ 6/3",
      "C. Hiệp định Giơ-ne-vơ ngày 21/7/1954",
      "D. Hiệp định Paris 1973"
    ],
    "correct": 2,
    "explanation": "Session 14: Hiệp định Giơ-ne-vơ (21/7/1954) chấm dứt chiến tranh xâm lược của thực dân Pháp, ghi nhận thắng lợi của cuộc kháng chiến 9 năm gian khổ."
  },
  {
    "id": "vnr-m5-01",
    "module": "m5",
    "question": "Đặc điểm lớn nhất của tình hình nước ta sau khi Hiệp định Giơ-ne-vơ năm 1954 được ký kết là gì?",
    "options": [
      "A. Cả nước hoàn toàn hòa bình, bước vào xây dựng chủ nghĩa xã hội",
      "B. Đất nước tạm thời bị chia cắt làm hai miền với hai chế độ chính trị - xã hội khác nhau",
      "C. Quân đội Pháp tiếp tục đóng quân lâu dài tại miền Bắc",
      "D. Đế quốc Mỹ công nhận nền độc lập của chính phủ Hà Nội"
    ],
    "correct": 1,
    "explanation": "Session 15: Miền Bắc được hoàn toàn giải phóng bước vào thời kỳ quá độ lên CNXH; miền Nam trở thành thuộc địa kiểu mới và căn cứ quân sự của đế quốc Mỹ."
  },
  {
    "id": "vnr-m5-02",
    "module": "m5",
    "question": "Nghị quyết Hội nghị Trung ương 15 (tháng 1/1959) có ý nghĩa lịch sử to lớn như thế nào đối với cách mạng miền Nam?",
    "options": [
      "A. Chuyển từ đấu tranh chính trị hòa bình sang khởi nghĩa giành chính quyền bằng con đường bạo lực cách mạng",
      "B. Tạm dừng mọi hoạt động đấu tranh vũ trang để đàm phán ngoại giao",
      "C. Đưa quân đội miền Bắc vào tiếp quản Sài Gòn",
      "D. Giải tán Mặt trận Dân tộc Giải phóng miền Nam"
    ],
    "correct": 0,
    "explanation": "Session 15: Nghị quyết 15 (1/1959) đáp ứng đúng yêu cầu lịch sử, mở đường cho phong trào Đồng Khởi bùng nổ, đưa cách mạng miền Nam sang giai đoạn tiến công."
  },
  {
    "id": "vnr-m5-03",
    "module": "m5",
    "question": "Phong trào khởi nghĩa tiêu biểu của nhân dân miền Nam nổ ra từ cuối năm 1959 - 1960 tại Bến Tre có tên gọi là gì?",
    "options": [
      "A. Phong trào Cần Vương",
      "B. Phong trào Đồng Khởi",
      "C. Cao trào Kháng Nhật cứu nước",
      "D. Phong trào Ba sẵn sàng"
    ],
    "correct": 1,
    "explanation": "Session 15: Phong trào Đồng Khởi nổ ra tiêu biểu ở Định Thủy, Bình Khánh, Phước Hiệp (Mỏ Cày, Bến Tre) ngày 17/1/1960, phá vỡ từng mảng lớn ách kìm kẹp của địch."
  },
  {
    "id": "vnr-m5-04",
    "module": "m5",
    "question": "Đại hội đại biểu toàn quốc lần thứ III của Đảng (tháng 9/1960 tại Hà Nội) đã xác định vai trò của cách mạng hai miền như thế nào?",
    "options": [
      "A. Cách mạng XHCN ở miền Bắc giữ vai trò quyết định nhất; cách mạng giải phóng miền Nam giữ vai trò quyết định trực tiếp",
      "B. Miền Bắc và miền Nam đều chỉ thực hiện nhiệm vụ cách mạng dân tộc dân chủ nhân dân",
      "C. Miền Nam giữ vai trò quyết định nhất; miền Bắc chỉ lo nhiệm vụ hậu cần",
      "D. Hai nhiệm vụ hoàn toàn độc lập, không có mối quan hệ qua lại"
    ],
    "correct": 0,
    "explanation": "Session 15: Đại hội III xác định: Cách mạng XHCN ở miền Bắc giữ vai trò quyết định nhất đối với toàn bộ sự phát triển cách mạng cả nước; cách mạng miền Nam giữ vai trò quyết định trực tiếp đánh đổ ách thống trị của đế quốc Mỹ."
  },
  {
    "id": "vnr-m5-05",
    "module": "m5",
    "question": "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào ngày tháng năm nào?",
    "options": [
      "A. 19/5/1959",
      "B. 20/12/1960",
      "C. 15/1/1961",
      "D. 30/4/1975"
    ],
    "correct": 1,
    "explanation": "Session 15: Ngày 20/12/1960, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập tại Tây Ninh nhằm đoàn kết toàn thể đồng bào yêu nước miền Nam chống đế quốc Mỹ và tay sai."
  },
  {
    "id": "vnr-m5-06",
    "module": "m5",
    "question": "Chiến lược chiến tranh đầu tiên mà đế quốc Mỹ thí điểm áp dụng ở miền Nam (1961 - 1965) dựa vào quân đội Sài Gòn và cố vấn Mỹ là:",
    "options": [
      "A. Chiến tranh cục bộ",
      "B. Việt Nam hóa chiến tranh",
      "C. Chiến tranh đặc biệt",
      "D. Chiến tranh đơn phương"
    ],
    "correct": 2,
    "explanation": "Session 16: 'Chiến tranh đặc biệt' (1961 - 1965) sử dụng quân đội tay sai Sài Gòn trang bị vũ khí hiện đại của Mỹ (trực thăng vận, thiết xa vận) và quốc sách 'ấp chiến lược'."
  },
  {
    "id": "vnr-m5-07",
    "module": "m5",
    "question": "Chiến thắng quân sự mở đầu chứng minh quân và dân ta có khả năng đánh bại chiến thuật 'trực thăng vận, thiết xa vận' trong 'Chiến tranh đặc biệt' là:",
    "options": [
      "A. Chiến thắng Ấp Bắc (2/1/1963)",
      "B. Chiến thắng Vạn Tường",
      "C. Chiến thắng Núi Thành",
      "D. Chiến thắng Bình Giã"
    ],
    "correct": 0,
    "explanation": "Session 16: Chiến thắng Ấp Bắc (Mỹ Tho, 2/1/1963) cổ vũ mạnh mẽ phong trào phá ấp chiến lược, mở ra cao trào đánh Mỹ - ngụy trên khắp miền Nam."
  },
  {
    "id": "vnr-m5-08",
    "module": "m5",
    "question": "Chiến lược 'Chiến tranh cục bộ' (1965 - 1968) của đế quốc Mỹ ở miền Nam có điểm khác biệt căn bản gì so với 'Chiến tranh đặc biệt'?",
    "options": [
      "A. Chỉ dùng hải quân phong tỏa bờ biển",
      "B. Đưa trực tiếp quân viễn chinh Mỹ và chư hầu vào tham chiến trực tiếp với quy mô lớn và mở rộng đánh phá miền Bắc bằng không quân",
      "C. Rút hết quân đội Sài Gòn về nước",
      "D. Chỉ sử dụng chiến tranh gián điệp biệt kích"
    ],
    "correct": 1,
    "explanation": "Session 16: 'Chiến tranh cục bộ' đẩy quân viễn chinh Mỹ và quân đồng minh trực tiếp tham chiến với vai trò nòng cốt, phối hợp chiến tranh phá hoại miền Bắc bằng không quân và hải quân."
  },
  {
    "id": "vnr-m5-09",
    "module": "m5",
    "question": "Sự kiện quân sự vang dội nào đầu năm 1968 đã làm phá sản chiến lược 'Chiến tranh cục bộ', buộc Mỹ phải tuyên bố phi Mỹ hóa chiến tranh và chấp nhận ngồi vào bàn đàm phán tại Paris?",
    "options": [
      "A. Chiến dịch Tây Bắc",
      "B. Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968",
      "C. Chiến dịch Đường 9 - Khe Sanh",
      "D. Trận 'Điện Biên Phủ trên không'"
    ],
    "correct": 1,
    "explanation": "Session 16: Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 giáng đòn chí mạng vào ý chí xâm lược của giới cầm quyền Washington, buộc Tổng thống Johnson phải xuống thang chiến tranh."
  },
  {
    "id": "vnr-m5-10",
    "module": "m5",
    "question": "Chiến thắng 12 ngày đêm cuối năm 1972 đập tan cuộc tập kích chiến lược bằng pháo đài bay B.52 của Mỹ vào Hà Nội, Hải Phòng được mệnh danh là gì?",
    "options": [
      "A. Chiến thắng Ấp Bắc trên không",
      "B. Trận 'Điện Biên Phủ trên không'",
      "C. Trận Vạn Tường vĩ đại",
      "D. Chiến dịch Lam Sơn 719"
    ],
    "correct": 1,
    "explanation": "Session 17: Trận 'Điện Biên Phủ trên không' (tháng 12/1972) bắn rơi 81 máy bay Mỹ (trong đó có 34 chiếc B.52), buộc chính quyền Nixon phải ký Hiệp định Paris."
  },
  {
    "id": "vnr-m5-11",
    "module": "m5",
    "question": "Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký chính thức vào ngày nào và có điều khoản quan trọng gì?",
    "options": [
      "A. 27/1/1973; Mỹ cam kết tôn trọng độc lập, chủ quyền của Việt Nam và rút hết quân đội về nước",
      "B. 30/4/1975; giải thể toàn bộ quân đội Sài Gòn",
      "C. 21/7/1954; phân chia giới tuyến tại vĩ tuyến 17",
      "D. 19/12/1946; mở lại các cuộc đàm phán song phương"
    ],
    "correct": 0,
    "explanation": "Session 17: Hiệp định Paris ký ngày 27/1/1973 đã hoàn thành mục tiêu chiến lược 'đánh cho Mỹ cút', tạo thời cơ thuận lợi để tiến tới 'đánh cho Ngụy nhào'."
  },
  {
    "id": "vnr-m5-12",
    "module": "m5",
    "question": "Chiến dịch quyết chiến chiến lược nào đã kết thúc thắng lợi cuộc kháng chiến chống Mỹ cứu nước, giải phóng hoàn toàn miền Nam vào ngày 30/4/1975?",
    "options": [
      "A. Chiến dịch Tây Nguyên",
      "B. Chiến dịch Huế - Đà Nẵng",
      "C. Chiến dịch Hồ Chí Minh",
      "D. Chiến dịch Quảng Trị"
    ],
    "correct": 2,
    "explanation": "Session 18: Chiến dịch Hồ Chí Minh lịch sử (từ 26/4 đến 11h30 ngày 30/4/1975) giải phóng hoàn toàn Sài Gòn - Gia Định, kết thúc vẻ vang 21 năm kháng chiến chống Mỹ."
  },
  {
    "id": "vnr-m6-01",
    "module": "m6",
    "question": "Nhiệm vụ hàng đầu được Đảng ta tập trung lãnh đạo ngay sau ngày toàn thắng 30/4/1975 là gì?",
    "options": [
      "A. Gia nhập Tổ chức Thương mại Thế giới (WTO)",
      "B. Thống nhất đất nước về mặt nhà nước",
      "C. Đổi mới căn bản hệ thống pháp luật theo kinh tế thị trường",
      "D. Phát hành tiền tệ mới thay thế hoàn toàn đồng bạc cũ"
    ],
    "correct": 1,
    "explanation": "Session 19: Sau ngày 30/4/1975, nhiệm vụ cấp thiết nhất là hoàn thành thống nhất đất nước về mặt nhà nước, tạo cơ sở pháp lý và chính trị thống nhất cho cả dân tộc."
  },
  {
    "id": "vnr-m6-02",
    "module": "m6",
    "question": "Chỉ thị số 100-CT/TW (tháng 1/1981) của Ban Bí thư Trung ương Đảng mang tính chất đột phá đầu tiên trong lĩnh vực nào?",
    "options": [
      "A. Cải cách tài chính ngân hàng",
      "B. Khoán sản phẩm đến nhóm và người lao động trong nông nghiệp",
      "C. Xóa bỏ chế độ tem phiếu trong phân phối hàng tiêu dùng",
      "D. Mở cửa thu hút vốn đầu tư trực tiếp nước ngoài (FDI)"
    ],
    "correct": 1,
    "explanation": "Session 20: Chỉ thị 100-CT/TW (Khoán 100) mở đường cho cơ chế khoán sản phẩm trong nông nghiệp, giải phóng sức sản xuất và là tiền đề cho Khoán 10 (1988)."
  },
  {
    "id": "vnr-m6-03",
    "module": "m6",
    "question": "Đại hội nào của Đảng đã đánh dấu bước ngoặt lịch sử mở ra công cuộc Đổi mới toàn diện đất nước?",
    "options": [
      "A. Đại hội V (1982)",
      "B. Đại hội VI (tháng 12/1986)",
      "C. Đại hội VII (1991)",
      "D. Đại hội VIII (1996)"
    ],
    "correct": 1,
    "explanation": "Session 21: Đại hội VI (12/1986) dưới sự lãnh đạo của Tổng Bí thư Nguyễn Văn Linh đã khởi xướng đường lối Đổi mới toàn diện, trước hết là đổi mới tư duy kinh tế."
  },
  {
    "id": "vnr-m6-04",
    "module": "m6",
    "question": "Phương châm nổi tiếng thể hiện tinh thần cách mạng và thái độ khoa học của Đại hội VI (12/1986) là:",
    "options": [
      "A. 'Đoàn kết, đoàn kết, đại đoàn kết'",
      "B. 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'",
      "C. 'Đi tắt đón đầu trong công nghiệp hóa'",
      "D. 'Giữ vững độc lập tự chủ trong mọi hoàn cảnh'"
    ],
    "correct": 1,
    "explanation": "Session 21: Đại hội VI đề cao thái độ dũng cảm: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật' để khắc phục sai lầm chủ quan duy ý chí của cơ chế quan liêu bao cấp."
  },
  {
    "id": "vnr-m6-05",
    "module": "m6",
    "question": "Đại hội VI (12/1986) chủ trương tập trung thực hiện ba chương trình kinh tế lớn nào?",
    "options": [
      "A. Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu",
      "B. Công nghiệp nặng, Quốc phòng, Hóa chất",
      "C. Năng lượng, Giao thông vận tải, Bưu chính viễn thông",
      "D. Du lịch, Bất động sản, Ngân hàng"
    ],
    "correct": 0,
    "explanation": "Session 21: Ba chương trình kinh tế lớn của Đại hội VI gồm: Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu nhằm ổn định đời sống nhân dân."
  },
  {
    "id": "vnr-m6-06",
    "module": "m6",
    "question": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội lần đầu tiên được thông qua tại Đại hội nào?",
    "options": [
      "A. Đại hội VI (1986)",
      "B. Đại hội VII (năm 1991)",
      "C. Đại hội VIII (1996)",
      "D. Đại hội IX (2001)"
    ],
    "correct": 1,
    "explanation": "Session 22: Cương lĩnh năm 1991 (thông qua tại Đại hội VII) nêu rõ 6 đặc trưng của chủ nghĩa xã hội ở Việt Nam và khẳng định chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng."
  },
  {
    "id": "vnr-m6-07",
    "module": "m6",
    "question": "Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (tháng 1/1994) đã cảnh báo 4 nguy cơ lớn nào đối với cách mạng Việt Nam?",
    "options": [
      "A. Tụt hậu xa hơn về kinh tế; chệch hướng XHCN; nạn tham nhũng và tệ quan liêu; 'diễn biến hòa bình'",
      "B. Cạn kiệt tài nguyên; bùng nổ dân số; ô nhiễm môi trường; thiên tai hạn hán",
      "C. Tranh chấp lãnh thổ; khủng bố quốc tế; biến đổi khí hậu; dịch bệnh hiểm nghèo",
      "D. Giảm sút ngoại hối; lạm phát phi mã; suy thoái đạo đức; thất nghiệp tràn lan"
    ],
    "correct": 0,
    "explanation": "Session 22: Hội nghị chỉ rõ 4 nguy cơ có mối liên hệ tác động lẫn nhau: Tụt hậu kinh tế; Chệch hướng XHCN; Nạn tham nhũng, tệ quan liêu; và 'Diễn biến hòa bình' của các thế lực thù địch."
  },
  {
    "id": "vnr-m6-08",
    "module": "m6",
    "question": "Đại hội lần thứ mấy của Đảng khẳng định nước ta đã thoát khỏi cuộc khủng hoảng kinh tế - xã hội kéo dài và bước vào thời kỳ đẩy mạnh CNH - HĐH?",
    "options": [
      "A. Đại hội VII (1991)",
      "B. Đại hội VIII (tháng 6/1996)",
      "C. Đại hội IX (2001)",
      "D. Đại hội X (2006)"
    ],
    "correct": 1,
    "explanation": "Session 23: Đại hội VIII (1996) đánh giá công cuộc đổi mới 10 năm (1986-1996) đã đưa đất nước thoát khỏi khủng hoảng kinh tế - xã hội, chuyển sang thời kỳ đẩy mạnh CNH, HĐH đất nước."
  },
  {
    "id": "vnr-m6-09",
    "module": "m6",
    "question": "Mô hình 'Kinh tế thị trường định hướng xã hội chủ nghĩa' chính thức được Đảng xác định là mô hình kinh tế tổng quát trong thời kỳ quá độ tại Đại hội nào?",
    "options": [
      "A. Đại hội VI (1986)",
      "B. Đại hội VII (1991)",
      "C. Đại hội IX (năm 2001)",
      "D. Đại hội XI (2011)"
    ],
    "correct": 2,
    "explanation": "Session 24: Đại hội IX (4/2001) chính thức đưa ra khái niệm và khẳng định nền kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ."
  },
  {
    "id": "vnr-m6-10",
    "module": "m6",
    "question": "Chủ trương đổi mới căn bản của Đại hội X (2006) đối với đảng viên làm kinh tế là gì?",
    "options": [
      "A. Cấm đảng viên làm bất kỳ hoạt động kinh tế gia đình nào",
      "B. Cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân",
      "C. Bắt buộc đảng viên chỉ được công tác trong khu vực kinh tế nhà nước",
      "D. Không cho phép đảng viên góp vốn cổ phần"
    ],
    "correct": 1,
    "explanation": "Session 25: Đại hội X (2006) có bước đột phá quan trọng về nhận thức lý luận khi cho phép đảng viên làm kinh tế tư nhân trên cơ sở tuân thủ Điều lệ Đảng và pháp luật."
  },
  {
    "id": "vnr-m6-11",
    "module": "m6",
    "question": "Đại hội XI (2011) đã thông qua bản Cương lĩnh xây dựng đất nước (bổ sung, phát triển năm 2011) xác định bao nhiêu đặc trưng của xã hội XHCN mà nhân dân ta xây dựng?",
    "options": [
      "A. 6 đặc trưng",
      "B. 7 đặc trưng",
      "C. 8 đặc trưng",
      "D. 10 đặc trưng"
    ],
    "correct": 2,
    "explanation": "Session 26: Cương lĩnh bổ sung, phát triển năm 2011 xác định 8 đặc trưng của xã hội XHCN ở Việt Nam (so với 6 đặc trưng của Cương lĩnh 1991)."
  },
  {
    "id": "vnr-m6-12",
    "module": "m6",
    "question": "Mục tiêu phát triển đất nước đến năm 2045 (kỷ niệm 100 năm thành lập nước) được Đại hội XIII của Đảng (2021) xác định là gì?",
    "options": [
      "A. Trở thành nước đang phát triển có thu nhập trung bình thấp",
      "B. Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "C. Trở thành nước phát triển, có thu nhập cao theo định hướng xã hội chủ nghĩa",
      "D. Trở thành cường quốc công nghiệp quốc phòng hàng đầu châu Á"
    ],
    "correct": 2,
    "explanation": "Session 28-29: Đại hội XIII đặt ra tầm nhìn chiến lược đến năm 2045 (100 năm lập nước): Trở thành nước phát triển, thu nhập cao theo định hướng XHCN."
  }
];
