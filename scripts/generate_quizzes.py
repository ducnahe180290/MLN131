import os
import json

quizzes = [
    {
        "filename": "quiz1.html",
        "num": 1,
        "title": "Quiz 1: Nhập Môn Lịch Sử Đảng & Sự Ra Đời Của Đảng (1920 - 1930) | VNR202",
        "heading": "Quiz 1: Nhập Môn Lịch Sử Đảng & Sự Ra Đời Của Đảng (1920 - 1930)",
        "subheading": "Khảo sát kiến thức về đối tượng, chức năng, nhiệm vụ của môn học và quá trình chuẩn bị, thành lập Đảng Cộng sản Việt Nam.",
        "questions": [
            {
                "id": 1,
                "question": "Bộ môn Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành thuộc ngành khoa học nào?",
                "options": [
                    "A. Khoa học Triết học",
                    "B. Khoa học Lịch sử",
                    "C. Khoa học Xã hội học",
                    "D. Khoa học Chính trị học"
                ],
                "correct": 1,
                "explanation": "Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành, bộ phận hợp thành của khoa học Lịch sử (Chương nhập môn - Session 1)."
            },
            {
                "id": 2,
                "question": "Tác phẩm lịch sử đầu tiên viết về phong trào cộng sản Đông Dương xuất bản năm 1933 là của ai?",
                "options": [
                    "A. Nguyễn Ái Quốc",
                    "B. Trần Phú",
                    "C. Hà Huy Tập",
                    "D. Lê Hồng Phong"
                ],
                "correct": 2,
                "explanation": "Đồng chí Hà Huy Tập xuất bản cuốn sách 'Sơ khảo lịch sử phong trào cộng sản Đông Dương' năm 1933 (Session 1)."
            },
            {
                "id": 3,
                "question": "Khoa học Lịch sử Đảng Cộng sản Việt Nam có những chức năng cơ bản nào?",
                "options": [
                    "A. Chức năng nhận thức, chức năng giáo dục, chức năng dự báo và phê phán",
                    "B. Chức năng kinh tế, chức năng hành chính, chức năng kiểm toán",
                    "C. Chức năng giải trí, chức năng thương mại, chức năng quảng bá",
                    "D. Chức năng quản lý nhân sự, chức năng quy hoạch đô thị"
                ],
                "correct": 0,
                "explanation": "Ba chức năng cơ bản của khoa học Lịch sử Đảng: Nhận thức, Giáo dục, Dự báo và phê phán (Session 1)."
            },
            {
                "id": 4,
                "question": "Phương pháp nghiên cứu cơ bản, chủ yếu nhất của môn học Lịch sử Đảng là gì?",
                "options": [
                    "A. Phương pháp phân tích tâm lý cá nhân",
                    "B. Phương pháp lịch sử kết hợp chặt chẽ với phương pháp logic",
                    "C. Phương pháp điều tra thị trường định lượng",
                    "D. Phương pháp suy đoán trực giác"
                ],
                "correct": 1,
                "explanation": "Phương pháp lịch sử và logic là hai phương pháp cơ bản, thống nhất hữu cơ trong nghiên cứu Lịch sử Đảng (Session 2)."
            },
            {
                "id": 5,
                "question": "Mâu thuẫn chủ yếu và gay gắt nhất trong xã hội Việt Nam thuộc địa nửa phong kiến là mâu thuẫn giữa:",
                "options": [
                    "A. Giai cấp công nhân với tư sản",
                    "B. Giai cấp nông dân với địa chủ phong kiến",
                    "C. Toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai",
                    "D. Tầng lớp tiểu tư sản trí thức với bọn phong kiến"
                ],
                "correct": 2,
                "explanation": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược là mâu thuẫn chủ yếu, bao trùm thời kỳ này (Session 3)."
            },
            {
                "id": 6,
                "question": "Sự kiện nào đánh dấu bước chuyển biến quyết định trong lập trường tư tưởng của Nguyễn Ái Quốc sang chủ nghĩa cộng sản?",
                "options": [
                    "A. Ra đi tìm đường cứu nước tại bến cảng Nhà Rồng (1911)",
                    "B. Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles (1919)",
                    "C. Đọc Luận cương của Lênin, bỏ phiếu gia nhập Quốc tế III và sáng lập Đảng Cộng sản Pháp (12/1920)",
                    "D. Xuất bản tác phẩm Bản án chế độ thực dân Pháp (1925)"
                ],
                "correct": 2,
                "explanation": "Tháng 12/1920 tại Đại hội Tours, Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế III và tham gia thành lập Đảng Cộng sản Pháp (Session 3)."
            },
            {
                "id": 7,
                "question": "Tổ chức cách mạng tiền thân chuẩn bị trực tiếp về chính trị, tư tưởng và tổ chức cho việc thành lập Đảng là:",
                "options": [
                    "A. Hội Duy Tân",
                    "B. Việt Nam Quang phục Hội",
                    "C. Hội Việt Nam Cách mạng Thanh niên (thành lập 6/1925)",
                    "D. Tân Việt Cách mạng Đảng"
                ],
                "correct": 2,
                "explanation": "Hội Việt Nam Cách mạng Thanh niên do Nguyễn Ái Quốc sáng lập tháng 6/1925 tại Quảng Châu là tiền thân trực tiếp của Đảng (Session 3)."
            },
            {
                "id": 8,
                "question": "Hội nghị thành lập Đảng Cộng sản Việt Nam (đầu năm 1930) do ai chủ trì và diễn ra ở đâu?",
                "options": [
                    "A. Do Trần Phú chủ trì tại Ma Cao",
                    "B. Do Nguyễn Ái Quốc chủ trì tại Cửu Long (Hương Cảng, Trung Quốc)",
                    "C. Do Lê Hồng Phong chủ trì tại Quảng Châu",
                    "D. Do Hà Huy Tập chủ trì tại Pác Bó"
                ],
                "correct": 1,
                "explanation": "Nguyễn Ái Quốc đại diện Quốc tế Cộng sản chủ trì Hội nghị hợp nhất Đảng từ 6/1/1930 tại Hương Cảng, Trung Quốc (Session 4)."
            },
            {
                "id": 9,
                "question": "Phương hướng chiến lược của cách mạng Việt Nam xác định trong Cương lĩnh chính trị đầu tiên (2/1930) là:",
                "options": [
                    "A. Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản",
                    "B. Tiến hành ngay cách mạng XHCN bỏ qua giải phóng dân tộc",
                    "C. Xây dựng chế độ cộng hòa tư sản kiểu phương Tây",
                    "D. Tập trung phát triển kinh tế tư nhân"
                ],
                "correct": 0,
                "explanation": "Cương lĩnh đầu tiên xác định: 'Chủ trương làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản' (Session 4)."
            },
            {
                "id": 10,
                "question": "Ý nghĩa lịch sử quyết định nhất của sự kiện thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930 là gì?",
                "options": [
                    "A. Chấm dứt cuộc khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo cách mạng Việt Nam",
                    "B. Buộc Pháp phải rút quân khỏi Đông Dương ngay lập tức",
                    "C. Giành được chính quyền độc lập hoàn toàn trên cả nước",
                    "D. Xóa bỏ hoàn toàn chế độ tư hữu ruộng đất"
                ],
                "correct": 0,
                "explanation": "Đảng ra đời chấm dứt thời kỳ bế tắc về đường lối giải phóng dân tộc, mở ra bước ngoặt quyết định cho cách mạng Việt Nam (Session 4)."
            }
        ]
    },
    {
        "filename": "quiz2.html",
        "num": 2,
        "title": "Quiz 2: Đấu Tranh Giành Chính Quyền & Cách Mạng Tháng Tám (1930 - 1945) | VNR202",
        "heading": "Quiz 2: Đấu Tranh Giành Chính Quyền & Cách Mạng Tháng Tám (1930 - 1945)",
        "subheading": "Khảo sát các cao trào cách mạng 1930-1931, 1936-1939, chuyển hướng chiến lược và thắng lợi Tổng khởi nghĩa Tháng Tám 1945.",
        "questions": [
            {
                "id": 1,
                "question": "Hội nghị Ban Chấp hành Trung ương Đảng tháng 10 năm 1930 đã bầu ai làm Tổng Bí thư đầu tiên của Đảng?",
                "options": [
                    "A. Nguyễn Ái Quốc",
                    "B. Trần Phú",
                    "C. Lê Hồng Phong",
                    "D. Hà Huy Tập"
                ],
                "correct": 1,
                "explanation": "Hội nghị Trung ương tháng 10/1930 đã cử Ban Chấp hành Trung ương chính thức và bầu đồng chí Trần Phú làm Tổng Bí thư (Session 6)."
            },
            {
                "id": 2,
                "question": "Đỉnh cao của phong trào cách mạng 1930 - 1931 là sự kiện nào?",
                "options": [
                    "A. Cuộc bãi công Ba Son",
                    "B. Sự ra đời của chính quyền Xô Viết Nghệ - Tĩnh",
                    "C. Khởi nghĩa Nam Kỳ",
                    "D. Khởi nghĩa Đô Lương"
                ],
                "correct": 1,
                "explanation": "Chính quyền Xô Viết Nghệ - Tĩnh ra đời trong cao trào 1930-1931 là đỉnh cao, bước tập dượt đầu tiên cho Cách mạng Tháng Tám (Session 5)."
            },
            {
                "id": 3,
                "question": "Hạn chế căn bản của bản Luận cương chính trị tháng 10/1930 so với Cương lĩnh tháng 2/1930 là gì?",
                "options": [
                    "A. Chưa đề cập đến phong trào công nhân",
                    "B. Nặng về đấu tranh giai cấp và thổ địa, chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu; đánh giá hẹp hòi các tầng lớp trung gian",
                    "C. Không thừa nhận vai trò của Quốc tế Cộng sản",
                    "D. Hòa hoãn vô nguyên tắc với phong kiến"
                ],
                "correct": 1,
                "explanation": "Luận cương 10/1930 xem vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền, xem nhẹ nhiệm vụ chống đế quốc giải phóng dân tộc (Session 6)."
            },
            {
                "id": 4,
                "question": "Mục tiêu đấu tranh chủ yếu của Đảng trong phong trào Dân chủ 1936 - 1939 là:",
                "options": [
                    "A. Tịch thu toàn bộ ruộng đất chia cho dân cày",
                    "B. Đòi tự do, dân chủ, cơm áo, hòa bình; kết hợp đấu tranh công khai và bí mật",
                    "C. Khởi nghĩa vũ trang lật đổ chính quyền thực dân",
                    "D. Cải cách thuế khóa theo mô hình châu Âu"
                ],
                "correct": 1,
                "explanation": "Thời kỳ 1936-1939, Đảng chủ trương đấu tranh đòi quyền dân sinh, dân chủ, chống phát xít và bảo vệ hòa bình (Session 7)."
            },
            {
                "id": 5,
                "question": "Hội nghị nào của Trung ương Đảng đã hoàn thành chuyển hướng chỉ đạo chiến lược, đặt giải phóng dân tộc lên hàng đầu và lập Mặt trận Việt Minh?",
                "options": [
                    "A. Hội nghị Trung ương 6 (11/1939)",
                    "B. Hội nghị Trung ương 7 (11/1940)",
                    "C. Hội nghị Trung ương 8 (5/1941) tại Pác Bó do Nguyễn Ái Quốc chủ trì",
                    "D. Hội nghị toàn quốc Tân Trào (8/1945)"
                ],
                "correct": 2,
                "explanation": "Hội nghị Trung ương 8 (5/1941) tại Pác Bó (Cao Bằng) quyết định đặt quyền lợi dân tộc lên trên hết và thành lập Mặt trận Việt Minh (Session 8)."
            },
            {
                "id": 6,
                "question": "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' ra đời vào thời gian nào sau ngày Nhật đảo chính Pháp?",
                "options": [
                    "A. Ngày 9/3/1945",
                    "B. Ngày 12/3/1945",
                    "C. Ngày 15/4/1945",
                    "D. Ngày 19/8/1945"
                ],
                "correct": 1,
                "explanation": "Ngày 12/3/1945, Ban Thường vụ Trung ương Đảng ra bản Chỉ thị lịch sử xác định phát xít Nhật là kẻ thù chính, cụ thể trước mắt (Session 9)."
            },
            {
                "id": 7,
                "question": "Khẩu hiệu nào trong cao trào kháng Nhật cứu nước đã đáp ứng cấp bách nhất nguyện vọng của quần chúng nhân dân năm 1945?",
                "options": [
                    "A. 'Giảm tô, giảm tức'",
                    "B. 'Phá kho thóc Nhật, giải quyết nạn đói'",
                    "C. 'Toàn dân bầu cử'",
                    "D. 'Tịch thu ruộng đất phong kiến'"
                ],
                "correct": 1,
                "explanation": "Khẩu hiệu 'Phá kho thóc của Nhật, giải quyết nạn đói' đã biến sự căm phẫn thành hành động khởi nghĩa từng phần trên khắp cả nước (Session 9)."
            },
            {
                "id": 8,
                "question": "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình khai sinh nước gì?",
                "options": [
                    "A. Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam",
                    "B. Nước Việt Nam Dân chủ Cộng hòa",
                    "C. Liên bang Đông Dương Dân chủ",
                    "D. Nước Việt Nam Độc lập"
                ],
                "correct": 1,
                "explanation": "Ngày 2/9/1945, nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á ra đời (Session 10)."
            }
        ]
    },
    {
        "filename": "quiz3.html",
        "num": 3,
        "title": "Quiz 3: Kháng Chiến Chống Thực Dân Pháp Xâm Lược (1945 - 1954) | VNR202",
        "heading": "Quiz 3: Kháng Chiến Chống Thực Dân Pháp Xâm Lược (1945 - 1954)",
        "subheading": "Khảo sát đường lối kháng chiến kiến quốc, bảo vệ chính quyền non trẻ, các chiến dịch lớn và thắng lợi Điện Biên Phủ.",
        "questions": [
            {
                "id": 1,
                "question": "Chỉ thị 'Kháng chiến kiến quốc' ngày 25/11/1945 của Trung ương Đảng đã nêu khẩu hiệu hành động nào?",
                "options": [
                    "A. 'Tất cả cho tiền tuyến'",
                    "B. 'Dân tộc trên hết, Tổ quốc trên hết'",
                    "C. 'Thà hy sinh tất cả chứ nhất định không chịu mất nước'",
                    "D. 'Độc lập hay là chết'"
                ],
                "correct": 1,
                "explanation": "Chỉ thị 'Kháng chiến kiến quốc' xác định mục tiêu bảo vệ nền độc lập, nêu cao khẩu hiệu 'Dân tộc trên hết, Tổ quốc trên hết' (Session 11)."
            },
            {
                "id": 2,
                "question": "Hiệp định Sơ bộ ngày 6/3/1946 được ký kết giữa ta và Pháp thể hiện chủ trương sách lược tài tình nào?",
                "options": [
                    "A. Đầu hàng để tránh thương vong",
                    "B. Hòa hoãn tạm thời với Pháp để đuổi 20 vạn quân Tưởng về nước, tránh đối đầu hai đầu chiến tuyến",
                    "C. Đề nghị Pháp viện trợ tài chính",
                    "D. Chia đôi đất nước thành hai vùng quản lý"
                ],
                "correct": 1,
                "explanation": "Ký Hiệp định Sơ bộ 6/3/1946 giúp ta thực hiện sách lược 'hòa để tiến', tống khứ 20 vạn quân Tưởng và tay sai về nước (Session 11)."
            },
            {
                "id": 3,
                "question": "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi vào đêm ngày nào?",
                "options": [
                    "A. 2/9/1945",
                    "B. 6/3/1946",
                    "C. 19/12/1946",
                    "D. 19/5/1947"
                ],
                "correct": 2,
                "explanation": "Đêm ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến: 'Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước...' (Session 12)."
            },
            {
                "id": 4,
                "question": "Đường lối kháng chiến chống thực dân Pháp của Đảng ta gồm những nội dung cốt lõi nào?",
                "options": [
                    "A. Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế",
                    "B. Đánh nhanh thắng nhanh, dựa hẳn vào viện trợ quân sự bên ngoài",
                    "C. Chỉ dựa vào lực lượng bộ đội chủ lực ở đồng bằng",
                    "D. Đấu tranh thuần túy trên mặt trận ngoại giao"
                ],
                "correct": 0,
                "explanation": "Đường lối kháng chiến chống Pháp là: Toàn dân, toàn diện, trường kỳ (lâu dài), tự lực cánh sinh là chính (Session 12)."
            },
            {
                "id": 5,
                "question": "Tác phẩm 'Kháng chiến nhất định thắng lợi' (1947) của Tổng Bí thư Trường Chinh có giá trị gì?",
                "options": [
                    "A. Tổng kết kinh nghiệm khởi nghĩa vũ trang đô thị",
                    "B. Cương lĩnh chỉ đạo chiến lược, giải thích tường minh đường lối kháng chiến toàn dân, toàn diện, trường kỳ của Đảng",
                    "C. Bản dự thảo hiệp định hòa bình với Pháp",
                    "D. Sách lược đấu tranh kinh tế trong vùng địch hậu"
                ],
                "correct": 1,
                "explanation": "'Kháng chiến nhất định thắng lợi' là văn kiện lý luận quân sự kiệt xuất soi sáng đường lối kháng chiến trường kỳ gian khổ đến ngày toàn thắng (Session 12)."
            },
            {
                "id": 6,
                "question": "Chiến dịch nào đã bẻ gãy chiến lược 'đánh nhanh thắng nhanh' của Pháp, bảo vệ vững chắc Trung ương Đảng và Bác Hồ?",
                "options": [
                    "A. Chiến dịch Việt Bắc Thu - Đông 1947",
                    "B. Chiến dịch Biên Giới 1950",
                    "C. Chiến dịch Tây Bắc 1952",
                    "D. Chiến dịch Hòa Bình 1951"
                ],
                "correct": 0,
                "explanation": "Chiến dịch Việt Bắc Thu - Đông 1947 đập tan cuộc hành quân tấn công lên căn cứ địa Việt Bắc của thực dân Pháp (Session 12)."
            },
            {
                "id": 7,
                "question": "Đại hội lần thứ II của Đảng (2/1951 tại Chiêm Hóa, Tuyên Quang) quyết định đổi tên Đảng thành gì?",
                "options": [
                    "A. Đảng Cộng sản Việt Nam",
                    "B. Đảng Lao động Việt Nam",
                    "C. Mặt trận Liên Việt",
                    "D. Hội Liên hiệp Quốc dân Việt Nam"
                ],
                "correct": 1,
                "explanation": "Đại hội II (2/1951) quyết định đưa Đảng ra hoạt động công khai lấy tên là Đảng Lao động Việt Nam (Session 13)."
            },
            {
                "id": 8,
                "question": "Chiến dịch lịch sử Điện Biên Phủ (1954) toàn thắng sau bao nhiêu ngày đêm chiến đấu anh dũng?",
                "options": [
                    "A. 30 ngày đêm",
                    "B. 45 ngày đêm",
                    "C. 56 ngày đêm (13/3 - 7/5/1954)",
                    "D. 81 ngày đêm"
                ],
                "correct": 2,
                "explanation": "Chiến dịch Điện Biên Phủ diễn ra trong 56 ngày đêm liên tục và kết thúc toàn thắng lúc 17h30 ngày 7/5/1954 (Session 14)."
            }
        ]
    },
    {
        "filename": "quiz4.html",
        "num": 4,
        "title": "Quiz 4: Kháng Chiến Chống Mỹ Cứu Nước, Thống Nhất Đất Nước (1954 - 1975) | VNR202",
        "heading": "Quiz 4: Kháng Chiến Chống Mỹ Cứu Nước, Thống Nhất Đất Nước (1954 - 1975)",
        "subheading": "Khảo sát đường lối cách mạng hai miền, các giai đoạn đánh bại 4 chiến lược chiến tranh của Mỹ và Đại thắng mùa Xuân 1975.",
        "questions": [
            {
                "id": 1,
                "question": "Nghị quyết Trung ương 15 (tháng 1/1959) đã mở đường cho cao trào nào bùng nổ khắp miền Nam?",
                "options": [
                    "A. Phong trào Ba sẵn sàng",
                    "B. Phong trào Năm xung phong",
                    "C. Phong trào Đồng Khởi (1959 - 1960)",
                    "D. Phong trào Tiếng hát át tiếng bom"
                ],
                "correct": 2,
                "explanation": "Nghị quyết Trung ương 15 (1/1959) xác định con đường bạo lực cách mạng, thổi bùng ngọn lửa phong trào Đồng Khởi tiêu biểu ở Bến Tre (Session 15)."
            },
            {
                "id": 2,
                "question": "Đại hội lần thứ III của Đảng (tháng 9/1960 tại Hà Nội) xác định vai trò của cách mạng miền Bắc là gì?",
                "options": [
                    "A. Giữ vai trò quyết định trực tiếp đánh đổ đế quốc Mỹ",
                    "B. Giữ vai trò quyết định nhất đối với sự phát triển cách mạng cả nước",
                    "C. Chỉ hỗ trợ về mặt ngoại giao",
                    "D. Tập trung xây dựng kinh tế tư bản tư nhân"
                ],
                "correct": 1,
                "explanation": "Đại hội III xác định: Cách mạng XHCN ở miền Bắc giữ vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng cả nước (Session 15)."
            },
            {
                "id": 3,
                "question": "Chiến thắng quân sự mở đầu phá sản chiến thuật 'trực thăng vận, thiết xa vận' trong Chiến tranh đặc biệt là:",
                "options": [
                    "A. Chiến thắng Ấp Bắc (2/1/1963)",
                    "B. Chiến thắng Vạn Tường",
                    "C. Chiến thắng Núi Thành",
                    "D. Chiến thắng Ba Gia"
                ],
                "correct": 0,
                "explanation": "Chiến thắng Ấp Bắc (Mỹ Tho, ngày 2/1/1963) khẳng định quân dân miền Nam hoàn toàn có thể đánh bại chiến thuật tác chiến mới của Mỹ (Session 16)."
            },
            {
                "id": 4,
                "question": "Đặc trưng cốt lõi của chiến lược 'Chiến tranh cục bộ' (1965 - 1968) của Mỹ ở miền Nam là:",
                "options": [
                    "A. Đưa quân viễn chinh Mỹ và chư hầu vào tham chiến trực tiếp với quy mô lớn, giữ vai trò chủ yếu trên chiến trường",
                    "B. Rút hết lính Mỹ, chỉ dùng lính đánh thuê Thái Lan",
                    "C. Chỉ phong tỏa đường biển Đông",
                    "D. Chuyển quyền chỉ huy cho quân đội Sài Gòn"
                ],
                "correct": 0,
                "explanation": "'Chiến tranh cục bộ' là chiến lược dùng quân Mỹ và đồng minh làm lực lượng nòng cốt, phối hợp không quân đánh phá miền Bắc (Session 16)."
            },
            {
                "id": 5,
                "question": "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 có ý nghĩa chiến lược xoay chuyển cục diện chiến tranh như thế nào?",
                "options": [
                    "A. Làm sụp đổ ngay chế độ Sài Gòn",
                    "B. Đập tan ý chí xâm lược của Mỹ, buộc Mỹ tuyên bố phi Mỹ hóa chiến tranh và chấp nhận ngồi vào bàn đàm phán Paris",
                    "C. Giải phóng toàn bộ các tỉnh đồng bằng sông Cửu Long",
                    "D. Kết thúc cuộc kháng chiến chống Mỹ"
                ],
                "correct": 1,
                "explanation": "Đòn tiến công Tết Mậu Thân 1968 buộc Tổng thống Johnson phải ngừng ném bom miền Bắc và chấp nhận đàm phán tại Paris (Session 16)."
            },
            {
                "id": 6,
                "question": "Chiến thắng 12 ngày đêm cuối năm 1972 đập tan cuộc tập kích B.52 của Mỹ vào Hà Nội, Hải Phòng được gọi là:",
                "options": [
                    "A. Trận Khe Sanh trên không",
                    "B. Trận 'Điện Biên Phủ trên không'",
                    "C. Chiến dịch Lam Sơn",
                    "D. Chiến dịch Tây Nguyên"
                ],
                "correct": 1,
                "explanation": "Trận 'Điện Biên Phủ trên không' cuối tháng 12/1972 bắn rơi 81 máy bay (34 chiếc B.52), buộc Mỹ phải ký Hiệp định Paris (Session 17)."
            },
            {
                "id": 7,
                "question": "Hiệp định Paris được ký ngày 27/1/1973 đã hoàn thành mục tiêu chiến lược nào theo lời dạy của Bác Hồ?",
                "options": [
                    "A. 'Đánh cho Mỹ cút'",
                    "B. 'Đánh cho Ngụy nhào'",
                    "C. Xây dựng chủ nghĩa xã hội",
                    "D. Gia nhập khối ASEAN"
                ],
                "correct": 0,
                "explanation": "Hiệp định Paris buộc quân viễn chinh Mỹ rút hoàn toàn khỏi miền Nam, hoàn thành mục tiêu chiến lược 'Đánh cho Mỹ cút' (Session 17)."
            },
            {
                "id": 8,
                "question": "Chiến dịch đỉnh cao giải phóng hoàn toàn miền Nam ngày 30/4/1975 được mang tên ai?",
                "options": [
                    "A. Chiến dịch Tây Nguyên",
                    "B. Chiến dịch Huế - Đà Nẵng",
                    "C. Chiến dịch Hồ Chí Minh",
                    "D. Chiến dịch Quang Trung"
                ],
                "correct": 2,
                "explanation": "Bộ Chính trị quyết định đặt tên chiến dịch giải phóng Sài Gòn là 'Chiến dịch Hồ Chí Minh', toàn thắng trưa ngày 30/4/1975 (Session 18)."
            }
        ]
    },
    {
        "filename": "quiz5.html",
        "num": 5,
        "title": "Quiz 5: Thời Kỳ Quá Độ Lên CNXH & Công Cuộc Đổi Mới Toàn Diện (1975 - nay) | VNR202",
        "heading": "Quiz 5: Thời Kỳ Quá Độ Lên CNXH & Công Cuộc Đổi Mới Toàn Diện (1975 - nay)",
        "subheading": "Khảo sát các đột phá tìm đường đổi mới, Đại hội VI (1986), Cương lĩnh 1991, 2011 và các kỳ Đại hội của Đảng.",
        "questions": [
            {
                "id": 1,
                "question": "Chỉ thị 100-CT/TW (tháng 1/1981) của Ban Bí thư là bước đột phá đầu tiên về cơ chế quản lý trong ngành nào?",
                "options": [
                    "A. Công nghiệp nặng",
                    "B. Nông nghiệp (khoán sản phẩm đến nhóm và người lao động)",
                    "C. Thương nghiệp xuất nhập khẩu",
                    "D. Giáo dục đại học"
                ],
                "correct": 1,
                "explanation": "Chỉ thị 100 (Khoán 100) đưa ra cách khoán sản phẩm đến nhóm và người lao động trong nông nghiệp, giải phóng sức sản xuất (Session 20)."
            },
            {
                "id": 2,
                "question": "Đại hội lần thứ VI của Đảng (tháng 12/1986) do ai làm Tổng Bí thư đã khởi xướng công cuộc Đổi mới toàn diện?",
                "options": [
                    "A. Lê Duẩn",
                    "B. Trường Chinh",
                    "C. Nguyễn Văn Linh",
                    "D. Đỗ Mười"
                ],
                "correct": 2,
                "explanation": "Đại hội VI (12/1986) bầu đồng chí Nguyễn Văn Linh làm Tổng Bí thư, chính thức phát động công cuộc Đổi mới toàn diện đất nước (Session 21)."
            },
            {
                "id": 3,
                "question": "Ba chương trình kinh tế lớn được xác định trọng tâm tại Đại hội VI (12/1986) là:",
                "options": [
                    "A. Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu",
                    "B. Dầu khí, Than khoáng sản, Luyện kim",
                    "C. Cơ khí chế tạo, Nông cụ, Giao thông",
                    "D. Thủy điện, Xây dựng, Hóa chất"
                ],
                "correct": 0,
                "explanation": "Ba chương trình kinh tế lớn gồm: Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu nhằm đáp ứng nhu cầu thiết yếu (Session 21)."
            },
            {
                "id": 4,
                "question": "Bản Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH lần đầu tiên được Đại hội nào thông qua?",
                "options": [
                    "A. Đại hội VI (1986)",
                    "B. Đại hội VII (1991)",
                    "C. Đại hội VIII (1996)",
                    "D. Đại hội IX (2001)"
                ],
                "correct": 1,
                "explanation": "Cương lĩnh năm 1991 được thông qua tại Đại hội VII, nêu 6 đặc trưng của CNXH ở nước ta và khẳng định chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là kim chỉ nam (Session 22)."
            },
            {
                "id": 5,
                "question": "Hội nghị giữa nhiệm kỳ khóa VII (1/1994) đã cảnh báo 4 nguy cơ lớn nào đối với Đảng và cách mạng nước ta?",
                "options": [
                    "A. Tụt hậu xa hơn về kinh tế; chệch hướng XHCN; nạn tham nhũng và tệ quan liêu; 'diễn biến hòa bình'",
                    "B. Cạn kiệt tài nguyên; bùng nổ dân số; ô nhiễm môi trường; thiên tai",
                    "C. Tranh chấp lãnh thổ; khủng bố quốc tế; biến đổi khí hậu; nợ công",
                    "D. Lạm phát phi mã; suy thoái tài chính; đình trệ công nghiệp; thiếu lương thực"
                ],
                "correct": 0,
                "explanation": "Bốn nguy cơ lớn đan xen tác động lẫn nhau: Tụt hậu kinh tế; Chệch hướng XHCN; Nạn tham nhũng, quan liêu; 'Diễn biến hòa bình' (Session 22)."
            },
            {
                "id": 6,
                "question": "Mô hình kinh tế thị trường định hướng XHCN chính thức được xác định là mô hình kinh tế tổng quát tại Đại hội nào?",
                "options": [
                    "A. Đại hội VI (1986)",
                    "B. Đại hội VIII (1996)",
                    "C. Đại hội IX (2001)",
                    "D. Đại hội XI (2011)"
                ],
                "correct": 2,
                "explanation": "Đại hội IX (4/2001) chính thức khẳng định kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ lên CNXH (Session 24)."
            },
            {
                "id": 7,
                "question": "Đại hội XI (2011) thông qua Cương lĩnh bổ sung, phát triển năm 2011 xác định bao nhiêu đặc trưng của CNXH ở Việt Nam?",
                "options": [
                    "A. 6 đặc trưng",
                    "B. 7 đặc trưng",
                    "C. 8 đặc trưng",
                    "D. 10 đặc trưng"
                ],
                "correct": 2,
                "explanation": "Cương lĩnh bổ sung, phát triển năm 2011 bổ sung và hoàn thiện thành 8 đặc trưng của xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng (Session 26)."
            },
            {
                "id": 8,
                "question": "Mục tiêu phát triển đất nước đến năm 2045 được Đại hội XIII của Đảng (2021) xác định là gì?",
                "options": [
                    "A. Trở thành nước đang phát triển có thu nhập trung bình thấp",
                    "B. Trở thành nước phát triển, có thu nhập cao theo định hướng xã hội chủ nghĩa",
                    "C. Trở thành cường quốc công nghiệp quốc phòng",
                    "D. Hoàn thành phổ cập giáo dục sau đại học"
                ],
                "correct": 1,
                "explanation": "Đại hội XIII đặt ra mục tiêu đến năm 2045 (kỷ niệm 100 năm thành lập nước): Trở thành nước phát triển, thu nhập cao theo định hướng XHCN (Session 28)."
            }
        ]
    }
]

template = '''<!DOCTYPE html>
<html lang="vi" class="dark">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans:wght@400;500;700&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script src="js/tailwind-config-global.js"></script>
    <link rel="stylesheet" href="css/philoverse-ui.css" />
    <style>
        body {{
            font-family: 'Lexend', sans-serif;
        }}

        .material-symbols-outlined {{
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }}

        .material-symbols-outlined.filled {{
            font-variation-settings: 'FILL' 1;
        }}

        /* Custom Radio Button Styling */
        input[type="radio"]:checked+div {{
            border-color: #D4A017;
            background-color: rgba(212, 160, 23, 0.08);
        }}

        input[type="radio"]:checked+div .radio-circle {{
            background-color: #D4A017;
            border-color: #D4A017;
        }}

        input[type="radio"]:checked+div .radio-circle::after {{
            opacity: 1;
            transform: scale(1);
        }}

        /* Quiz States */
        .correct-answer {{
            border-color: #10b981 !important;
            background-color: rgba(16, 185, 129, 0.25) !important;
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.25) !important;
        }}
        .correct-answer span,
        .correct-answer p,
        .correct-answer div,
        .correct-answer label {{
            color: #ffffff !important;
            font-weight: 700 !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.8) !important;
        }}

        .wrong-answer {{
            border-color: #ef4444 !important;
            background-color: rgba(239, 68, 68, 0.25) !important;
            box-shadow: 0 0 15px rgba(239, 68, 68, 0.25) !important;
        }}
        .wrong-answer span,
        .wrong-answer p,
        .wrong-answer div,
        .wrong-answer label {{
            color: #ffffff !important;
            font-weight: 700 !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.8) !important;
        }}

        .correct-answer .radio-circle {{
            border-color: #10b981;
            background-color: #10b981;
        }}

        .wrong-answer .radio-circle {{
            border-color: #ef4444;
            background-color: #ef4444;
        }}

        .correct-icon,
        .wrong-icon {{
            display: none;
        }}

        .correct-answer .correct-icon {{
            display: inline-block;
        }}

        .wrong-answer .wrong-icon {{
            display: inline-block;
        }}
    </style>
</head>

<body class="bg-philo-darkBg text-philo-ivory min-h-screen flex flex-col font-body antialiased selection:bg-philo-warmGold selection:text-white">
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Main Content -->
    <main class="flex-grow pt-24 px-4 max-w-4xl mx-auto w-full">
        <!-- Breadcrumb -->
        <div class="mb-6 flex items-center justify-between text-sm text-philo-ivory/80 dark:text-gray-400">
            <div class="flex items-center gap-2">
                <a href="practice.html" class="hover:text-philo-gold transition-colors">Ôn tập VNR202</a>
                <span class="opacity-60">/</span>
                <span>QUIZ {num}</span>
            </div>
            <a href="practice.html" class="inline-flex items-center gap-1 text-philo-gold hover:underline text-xs font-bold">
                <span class="material-symbols-outlined text-sm">arrow_back</span> Về trang Thực hành
            </a>
        </div>
        <!-- Quiz Intro -->
        <div class="text-center mb-10" id="quiz-intro">
            <div class="inline-block px-3 py-1 bg-philo-gold/20 text-philo-gold text-xs font-bold uppercase rounded-full mb-3 tracking-wider">
                Lịch sử Đảng Cộng sản Việt Nam (VNR202)
            </div>
            <h1 class="text-2xl md:text-3xl font-heading font-bold text-philo-gold font-heading mb-3">
                {heading}
            </h1>
            <p class="text-sm md:text-base text-philo-ivory/80 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {subheading} <br>
                Hãy chọn đáp án đúng nhất cho {total_questions} câu hỏi dưới đây.
            </p>
        </div>

        <!-- Quiz Container -->
        <div id="quiz-container" class="space-y-8">
            <!-- Questions will be injected here by JS -->
        </div>

        <!-- Submit Action -->
        <div class="mt-12 flex justify-center pb-20">
            <button onclick="submitQuiz()" id="submit-btn"
                class="px-8 py-3.5 philo-btn-gold text-philo-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Nộp bài & Xem kết quả
            </button>
            <div id="result-actions" class="hidden flex gap-4">
                <button onclick="location.reload()"
                    class="px-6 py-3 philo-btn-ghost text-philo-ivory font-bold rounded-xl transition-colors">
                    Làm lại
                </button>
                <a href="practice.html"
                    class="px-6 py-3 bg-philo-gold/20 hover:bg-philo-gold/30 border border-philo-gold/40 text-philo-gold font-bold rounded-xl transition-colors">
                    Quay về Ôn tập FE
                </a>
            </div>
        </div>

        <!-- Score Modal -->
        <div id="score-modal"
            class="hidden fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300">
            <div class="philo-card rounded-3xl p-8 max-w-md w-full transform scale-90 transition-transform duration-300 border border-philo-gold/40">
                <div class="text-center">
                    <div class="size-20 bg-philo-warmGold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-philo-gold">
                        <span class="material-symbols-outlined text-4xl">emoji_events</span>
                    </div>
                    <h2 class="text-2xl font-bold text-philo-gold font-heading mb-2">Kết quả của bạn</h2>
                    <div class="text-5xl font-black text-philo-warmGold mb-4" id="final-score">0/{total_questions}</div>
                    <p class="text-philo-ivory/80 dark:text-gray-400 mb-8" id="feedback-text">
                        Hãy xem lại các câu sai để hiểu rõ hơn nhé!
                    </p>
                    <button onclick="closeModal()"
                        class="w-full py-3 bg-philo-warmGold text-black font-bold rounded-xl hover:bg-amber-400 transition-colors">
                        Xem chi tiết đáp án & giải thích
                    </button>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="js/load-components.js"></script>
    <script>
        const quizData = {quiz_data_json};

        function renderQuiz() {{
            const container = document.getElementById('quiz-container');
            container.innerHTML = quizData.map((item, index) => `
                <div class="philo-card p-6 md:p-8 question-block" id="question-${{index}}">
                    <div class="flex items-start gap-4 mb-6">
                        <span class="flex-shrink-0 size-8 bg-philo-warmGold/20 text-philo-gold font-bold rounded-lg flex items-center justify-center text-sm border border-philo-gold/30">
                            ${{index + 1}}
                        </span>
                        <h3 class="text-base md:text-lg font-bold text-philo-gold font-heading leading-relaxed pt-1">
                            ${{item.question}}
                        </h3>
                    </div>
                    <div class="space-y-3 pl-0 md:pl-12">
                        ${{item.options.map((opt, optIndex) => `
                            <label class="cursor-pointer group block relative">
                                <input type="radio" name="q${{index}}" value="${{optIndex}}" class="peer sr-only">
                                <div class="p-4 rounded-xl border border-philo-gold/20 hover:bg-philo-gold/5 hover:border-philo-gold/40 transition-all flex items-center gap-3">
                                    <div class="radio-circle w-5 h-5 rounded-full border-2 border-gray-400 relative flex items-center justify-center transition-colors shrink-0">
                                        <div class="w-2.5 h-2.5 bg-philo-gold rounded-full opacity-0 transform scale-50 transition-all duration-200"></div>
                                    </div>
                                    <span class="text-philo-ivory/90 font-medium">${{opt}}</span>
                                    
                                    <!-- Icons for result -->
                                    <span class="material-symbols-outlined text-green-400 ml-auto correct-icon">check_circle</span>
                                    <span class="material-symbols-outlined text-red-400 ml-auto wrong-icon">cancel</span>
                                </div>
                            </label>
                        `).join('')}}
                    </div>
                    <!-- Explanation (hidden initially) -->
                    <div class="explanation-box hidden mt-6 p-4 rounded-xl bg-philo-gold/10 border border-philo-gold/30 ml-0 md:ml-12 text-sm">
                        <div class="flex items-center gap-2 font-bold text-philo-gold mb-1">
                            <span class="material-symbols-outlined text-base">lightbulb</span>
                            Giải thích chi tiết:
                        </div>
                        <p class="text-philo-ivory/90 font-sans leading-relaxed">${{item.explanation}}</p>
                    </div>
                </div>
            `).join('');
        }}

        function submitQuiz() {{
            let score = 0;
            const answers = [];

            quizData.forEach((item, index) => {{
                const selected = document.querySelector(`input[name="q${{index}}"]:checked`);
                const questionBlock = document.getElementById(`question-${{index}}`);
                const explanationBox = questionBlock.querySelector('.explanation-box');
                const labels = questionBlock.querySelectorAll('label');

                explanationBox.classList.remove('hidden');

                if (selected) {{
                    const answerIndex = parseInt(selected.value);
                    answers.push(answerIndex);

                    if (answerIndex === item.correct) {{
                        score++;
                        labels[answerIndex].querySelector('div').classList.add('correct-answer');
                    }} else {{
                        labels[answerIndex].querySelector('div').classList.add('wrong-answer');
                        labels[item.correct].querySelector('div').classList.add('correct-answer');
                    }}
                }} else {{
                    answers.push(null);
                    labels[item.correct].querySelector('div').classList.add('correct-answer');
                }}

                // Disable all radios
                questionBlock.querySelectorAll('input').forEach(input => input.disabled = true);
            }});

            // Show Score Modal
            const modal = document.getElementById('score-modal');
            const scoreDisplay = document.getElementById('final-score');
            const feedback = document.getElementById('feedback-text');
            const submitBtn = document.getElementById('submit-btn');
            const resultActions = document.getElementById('result-actions');

            scoreDisplay.innerText = `${{score}}/${{quizData.length}}`;

            if (score === quizData.length) {{
                feedback.innerText = "Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức!";
            }} else if (score >= quizData.length * 0.7) {{
                feedback.innerText = "Làm tốt lắm! Bạn đã nắm chắc phần lớn kiến thức bài học.";
            }} else {{
                feedback.innerText = "Cần cố gắng thêm nhé! Hãy xem lại các câu sai và ôn lại bài giảng.";
            }}

            // Animation
            modal.classList.remove('hidden');
            setTimeout(() => {{
                modal.classList.remove('opacity-0');
                modal.querySelector('div').classList.remove('scale-90');
                modal.querySelector('div').classList.add('scale-100');
            }}, 10);

            // Change button area
            submitBtn.classList.add('hidden');
            resultActions.classList.remove('hidden');

            window.scrollTo({{ top: 0, behavior: 'smooth' }});
        }}

        function closeModal() {{
            const modal = document.getElementById('score-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => {{
                modal.classList.add('hidden');
            }}, 300);
        }}

        // Initialize
        document.addEventListener('DOMContentLoaded', renderQuiz);
    </script>
</body>

</html>
'''

output_dir = r"C:\Users\brave\Downloads\VNR202_Quiz"

for q in quizzes:
    json_str = json.dumps(q["questions"], ensure_ascii=False, indent=12)
    rendered = template.format(
        title=q["title"],
        num=q["num"],
        heading=q["heading"],
        subheading=q["subheading"],
        total_questions=len(q["questions"]),
        quiz_data_json=json_str
    )
    file_path = os.path.join(output_dir, q["filename"])
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(rendered)
    print(f"Generated {q['filename']} with {len(q['questions'])} questions!")
