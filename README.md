# ToddlerToPhD

<p align="center">
  <em>An AI-powered explanation API and web app that adjusts any topic across three comprehension levels — Toddler, Teenager, and Expert — using the Gemini API.</em>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18+-339933?logo=node.js">
  <img alt="Express" src="https://img.shields.io/badge/Express.js-Backend-black?logo=express">
  <img alt="React" src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react">
  <img alt="Gemini API" src="https://img.shields.io/badge/Gemini-AI%20Engine-8E75B2?logo=googlegemini">
  <img alt="Tailwind" src="https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?logo=tailwindcss">
  <img alt="Status" src="https://img.shields.io/badge/status-active-success">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=8E75B2&center=true&vCenter=true&width=850&lines=Explain+Any+Topic+at+Any+Level.;Toddler.+Teenager.+Expert.;Powered+by+the+Gemini+API.;Level-Aware+Prompt+Engineering.;Reusable+in+any+MERN+Project." />
</p>

---

## About

**ToddlerToPhD** is a full-stack AI application that explains any topic at three distinct comprehension levels — Toddler, Teenager, and Expert.

Instead of a single static explanation, the app dynamically constructs a level-specific prompt and sends it to the Gemini API, so the same topic can be re-explained at a different depth instantly, without retyping.

This project follows a modular architecture using Express, React, Tailwind CSS, and the Gemini API.

---

# Features

| Feature | Status |
|----------|--------|
| Topic Input & Level Selector (Toddler / Teenager / Expert) | ✅ |
| Level-Specific Prompt Engineering | ✅ |
| Instant Level Switching (same topic, new depth) | ✅ |
| Split Ask / Answer Layout with Internal Scroll | ✅ |
| Background & Accent Color Adapts per Level | ✅ |
| Loading & Error States | ✅ |
| Modular Service Architecture | ✅ |

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| AI Engine | Google Gemini API (`@google/genai`) |
| Icons | lucide-react |
| Environment | dotenv |

---

#  Project Architecture

```mermaid
graph TD

A[Client]

B[Express API]

C[Explain Controller]

D[Gemini Service]

E[Level Prompt Map]

F[Gemini API]

A -->|POST /api/explain| B

B --> C

C --> D

D --> E

D --> F

F -->|Generated Text| C

C -->|JSON Response| A
```

---

# 📂 Project Structure

```text
ToddlerToPhD

│

├── backend
│   ├── public
│   ├── src
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   │
│   ├── .env.sample
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── postman
│   └── ToddlerToPhD.postman_collection.json
│
├── screenshots
│   ├── toddlerLevel.png
│   ├── teenagerLevel.png
│   └── expertLevel.png
│
└── README.md
```

---

#  Explanation Flow

## Requesting an Explanation

```text
User

↓

Enter Topic

↓

Select Level

↓

Map Level to Prompt Instruction

↓

Merge Instruction + Topic

↓

Send to Gemini API

↓

Return Explanation

↓

Render in Answer Panel
```

---

## Switching Levels

```text
User

↓

Click a Different Level Tab

↓

Same Topic Re-Submitted

↓

New Level-Specific Prompt Built

↓

New Explanation Returned
```

---

#  Environment Variables

Create a `.env` file.

```env
PORT=
CORS_ORIGIN=
GEMINI_API_KEY=
```

---

# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/Radhikagupta25/ToddlerToPhD.git
```

# Environment Setup
```bash
cd backend
cp .env.sample .env
```

# Populate .env with following environment variables:
```bash
PORT=
CORS_ORIGIN=
GEMINI_API_KEY=
FRONTEND_URL=
```

# Install & Run

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd ../frontend
npm install
npm run dev
```

# Accessing the App
Once both servers are running, the API will be available at:
```bash
http://localhost:8000
```

The frontend will be available at:
```bash
http://localhost:5173
```

---

# 📮 API Collection

A complete Postman collection is included for testing every endpoint.

```
postman/
    ToddlerToPhD.postman_collection.json
```

Included requests:

### Explain

- Explain Topic (Toddler)
- Explain Topic (Teenager)
- Explain Topic (Expert)

---

# 📡 API Endpoints

### Explain

```
POST   /api/explain
```

---

#  Why this Project?

✔ Real Prompt Engineering Across Multiple Complexity Tiers

✔ Level-Aware, Reusable AI Service Layer

✔ Clean Ask/Answer UI with Internal Scroll (no page-jump)

✔ Modular Controller/Service Architecture

✔ Easy to Extend into RAG, Streaming, or Auth

---

# 🤝 Contributing

Contributions are always welcome!

If you'd like to improve this project:

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "feat: add your feature"
```

4. Push your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

Whether it's fixing a bug, improving documentation, or adding a feature, every contribution is appreciated.

---

#  Before Opening a Pull Request

- [ ] Project builds successfully
- [ ] Code follows existing style
- [ ] No sensitive information committed
- [ ] Environment variables documented
- [ ] Tested locally

---

#  Roadmap

- [ ] Streaming Responses (SSE)
- [ ] Structured JSON Output (explanation, analogy, fun fact)
- [ ] MongoDB-Backed Response Caching
- [ ] JWT Authentication + Saved History
- [ ] "Explain this Document" — RAG Pipeline
- [ ] Docker Support
- [ ] Unit Testing
- [ ] CI/CD Pipeline

---

# 📄 License

This project is licensed under the MIT License.

---

#  Support

If you found this project useful:

⭐ Star the repository

🍴 Fork it

🐞 Open Issues

🚀 Submit Pull Requests

---

<p align="center">

Built with ❤️ by <b>Radhika Gupta</b>

If this project saved you time, consider giving it a ⭐ on GitHub.

</p>
