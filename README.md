# 📝 Task Management App

A simple and responsive **Task Management App** built with **React.js**, **Next.js**, and **Tailwind CSS**. This app allows users to create, update, and delete tasks efficiently with a clean UI.

---

## 🔧 Tech Stack

- **React.js** – Component-based UI
- **Next.js** – SSR, routing, and performance
- **Tailwind CSS** – Utility-first styling
- **ESLint & Prettier** – Code quality tools

---

## ✨ Features

- ✅ Add, edit, and delete tasks
- 🔁 Persist tasks using localStorage (default)

---

## 🚀 Getting Started

### Prerequisites

Ensure Node.js (v22+) and npm are installed:
```bash
node -v
npm -v
```

## 🚀 Getting Started

### 1. Clone the repository
```bash

git clone https://github.com/Sunandpotru33/todo-next-app.git
cd todo-next-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.


## 📁 Project Structure
```bash
.
├── src/              # Next.js routes
│   ├── app/           # Main task view
│   ├── components/   # TaskList, TaskItem, Form, etc.
│   ├── context/      # Context APIs ex: TasksContext
│   ├── hooks/        # Custom Hooks ex: useLocalStorage
│   ├── globals.css   # Tailwind setup
├── public/           # Assets
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```
