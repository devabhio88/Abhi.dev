# CLAUDE.md

This file defines how Claude Code should operate on this repository.
Follow ALL instructions strictly. Do NOT skip phases.

---

## 🧠 PRIMARY OBJECTIVE

Convert this cloned portfolio into a **personal portfolio for Abhishek (अbhi)** by:

1. Replacing ALL original owner data (`zxh`, original identity)
2. Injecting provided personal + project data
3. Preserving UI, animations, responsiveness
4. Avoiding any breaking changes
5. Skipping fields where data is missing (do NOT hallucinate)

---

## ⚙️ EXECUTION STRATEGY (CRITICAL)

Work in **PHASES**. Do NOT attempt everything at once.

After each phase:
- Summarize changes
- Ask for confirmation before next phase

---

## 📦 PHASE 0 — PROJECT SETUP

Run:

pnpm install  
pnpm dev  

Then:
- Explore full repo structure
- Identify:
  - config files
  - personal data sources
  - hardcoded values
  - assets (images, icons, markdown)

---

## 🔍 PHASE 1 — GLOBAL SEARCH & IDENTIFICATION

Search entire repo for:

zxh  
portfolio.zxh.me  
your-name  
username  
example  
demo  
dummy  
test  
@zxh  

Also inspect:
- src/configs/
- src/stores/user.ts
- src/components/apps/*
- markdown files (Typora content)
- meta tags (index.html)

Create a structured list of:
- All personal data locations
- All URLs
- All assets (images, avatars, icons)

---

## 🔁 PHASE 2 — SAFE GLOBAL REPLACEMENT

### RULES:

1. Replace:
   - zxh → abhi
   - Display name → Abhishek Kumar Gupta
   - Branding → अbhi (ONLY in UI, not code keys)

2. DO NOT:
   - Break variable names
   - Break imports
   - Rename files unless necessary

3. Use:
   - abhi → usernames, URLs
   - अbhi → UI display only

---

## 👤 PHASE 3 — PERSONAL DATA INJECTION

Use ONLY this data:

### Identity
- Name: Abhishek Kumar Gupta
- Alias: अbhi
- Email: harshabhio88@gmail.com
- Phone: +91-8931988032
- Location: India

### Links
- GitHub: https://github.com/devabhio88
- LinkedIn: https://www.linkedin.com/in/abhishek-kumar-gupta-88967b21a/
- Resume: https://drive.google.com/file/d/1iMPgGfqsQNdwnV1l3WVS-tBX0jcGgU2R/view

### Summary
Strong in DSA, full-stack development, and scalable system design, with experience building data-driven applications using React, APIs, and real-time systems. Proven problem-solving ability (400+ DSA problems, Quantiphi selection) and focused on developing reliable, high-performance software at scale.

### Skills
Languages: C, C++, Python, JavaScript, HTML, CSS, SQL  
Frameworks: React.js, Redux Toolkit, Tailwind CSS, LangChain  
Platforms: Supabase, Firebase, Appwrite, N8N
Core: DSA, OS, DBMS, OOP  
Tools: Git, VS Code, Claude Code

---

## 💼 PHASE 4 — PROJECTS INTEGRATION

Replace existing projects with:

### NLP Movie Recommendation System
- Tech: Python, Pandas, Scikit-learn, Streamlit
- GitHub: https://github.com/devabhio88/NLP-Enhanced-Movie-Recommendation-System
- Description:
  NLP-based recommendation system using cosine similarity and TMDB API.

### Blogging WebApp
- Tech: React, Redux Toolkit, Appwrite, Tailwind
- GitHub: https://github.com/devabhio88/Blogging_website
- Description:
  Full-stack blogging platform with authentication and AI integration.

### Library Management System
- Tech: C++, MySQL
- GitHub: https://github.com/devabhio88/Library-Management-system

### Hit'n Bubbles Game
- Tech: HTML, CSS, JavaScript, SheryJS
- Live: https://hit-in-bubbles-game.vercel.app/
- Description:
  Interactive preschool game with animations like magnetic effects, mouse follower, and text animations.

### TalentFlow
- GitHub: https://github.com/devabhio88/talentflow
- Description:
  Recruiting platform with dashboard, Kanban board, assessments, and candidate tracking.

RULES:
- Keep UI structure intact
- If a field is unsupported → skip it
- Do NOT break layout

---

## 🖼️ PHASE 5 — ASSETS HANDLING

- Replace avatar IF available
- Otherwise keep existing

Update:
- Title → "अbhi Portfolio" or "Abhishek Portfolio"
- Favicon if present

---

## ⚙️ PHASE 6 — CONFIG UPDATE

Update:
- src/configs/websites.ts
- launchpad apps
- dock items

Replace:
- Old links
- Add GitHub, LinkedIn, Resume

---

## 🧪 PHASE 7 — VALIDATION

Check:
- No broken imports
- No undefined variables
- All links working
- UI intact
- Responsive layout OK

---

## 🚀 PHASE 8 — BUILD

Run:

pnpm build  
pnpm serve  

---

## ⚠️ STRICT RULES

- NEVER hallucinate missing data
- NEVER remove animations
- NEVER refactor architecture unnecessarily
- ALWAYS preserve Zustand structure

---

## 🧠 OPTIMIZATION RULES

- Use search → edit → verify loop
- Avoid scanning repo repeatedly
- Make small safe changes

---

## ✅ COMPLETION CRITERIA

- No `zxh` remains
- All data updated
- Build passes
- UI unchanged (only content updated)

---