# Frontend - React with TypeScript

## 🚀 Project Overview
This is the frontend of a full-stack web application built using React and TypeScript. The application features a user registration form with form validation, API handling, and proper error messages.

## 📂 Project Structure
```
frontend
 ┣ public
 ┃  ┗ vite.svg
 ┣ src
 ┃  ┣ assets
 ┃  ┃  ┗ react.svg
 ┃  ┣ components
 ┃  ┃  ┗ FormComponent.tsx
 ┃  ┣ pages
 ┃  ┃  ┗ FormPage.tsx
 ┃  ┣ services
 ┃  ┃  ┗ api.ts
 ┃  ┣ App.tsx
 ┃  ┣ index.css
 ┃  ┣ main.tsx
 ┃  ┗ vite-env.d.ts
 ┣ .gitignore
 ┣ eslint.config.js
 ┣ index.html
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┣ tsconfig.app.json
 ┣ tsconfig.json
 ┣ tsconfig.node.json
 ┗ vite.config.ts
```

## 🛠 Tech Stack
- **React** (with Vite) - Frontend framework
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **React Hook Form** - Form handling
- **React Query** - API data fetching and caching
- **Axios** - HTTP client for API requests
- **React Toastify** - User notifications

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/lakshay-2411/IntelliSQR-Assessment.git
cd frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

This will start the frontend server at `http://localhost:5173/` (default Vite port).

## ✅ Running the Project
Ensure that the backend server is also running. Once both are up, visit the frontend URL and test the form functionality.

---

### 📌 Notes:
- If you face **CORS issues**, ensure the backend has proper CORS setup.

🚀 Happy coding!
