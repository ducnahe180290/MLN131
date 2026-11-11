import json
import re
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

base_dir = r"C:\Users\brave\Downloads\VNR202_Quiz"

# Check quiz-fe-review.js
with open(os.path.join(base_dir, "js", "quiz-fe-review.js"), encoding="utf-8") as f:
    c = f.read()
    # extract modules
    m_json = c[c.find("FE_REVIEW_MODULES = ") + len("FE_REVIEW_MODULES = "):c.find(";\n\nconst FE_REVIEW_QUESTIONS")]
    q_json = c[c.find("FE_REVIEW_QUESTIONS = ") + len("FE_REVIEW_QUESTIONS = "):c.rfind(";")]
    modules = json.loads(m_json)
    questions = json.loads(q_json)
    print(f"FE Review: {len(modules)} modules, {len(questions)} questions")
    for m in modules:
        m_qs = [q for q in questions if q['module'] == m['id']]
        print(f"  - [{m['id']}] {m['title']}: {len(m_qs)} questions")

# Check quiz1 to quiz5
for i in range(1, 6):
    file_name = f"quiz{i}.html"
    p = os.path.join(base_dir, file_name)
    with open(p, encoding="utf-8") as f:
        html = f.read()
        match = re.search(r"const quizData = (\[.*?\]);\n", html, re.DOTALL)
        if match:
            q_data = json.loads(match.group(1))
            print(f"{file_name}: {len(q_data)} questions validated successfully")

# Check curriculum json
with open(os.path.join(base_dir, "data", "vnr202-curriculum.json"), encoding="utf-8") as f:
    curr = json.load(f)
    print(f"vnr202-curriculum.json: {len(curr)} sessions loaded successfully")
