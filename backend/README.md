# Backend - User Registration API

## 🚀 Project Overview
This is the backend service for the user registration system. It is built with **Node.js, Express, TypeScript, and Prisma**.

## 📂 Project Structure
```
┣ backend
 ┃  ┣ controllers       
 ┃  ┃  ┗ userController.ts
 ┃  ┣ prisma             
 ┃  ┃  ┗ schema.prisma
 ┃  ┣ routes            
 ┃  ┃  ┗ userRoutes.ts
 ┃  ┣ utils             
 ┃  ┃  ┣ client.ts     
 ┃  ┃  ┗ handleError.ts
 ┃  ┣ .env               
 ┃  ┣ server.ts          
 ┃  ┗ tsconfig.json      
```

## 🛠 Tech Stack
- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **TypeScript**: Type safety
- **Prisma**: ORM for database management
- **bcryptjs**: Password hashing
- **dotenv**: Environment variable management

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/lakshay-2411/IntelliSQR-Assessment.git
cd backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
DATABASE_URL="your_mongo_url_here"
PORT="port_number"
```

## 🗃️ Prisma Setup

### 1️⃣ Initialize Prisma
```sh
npx prisma init
```
This creates a prisma folder with schema.prisma.

### 2️⃣ Generate Prisma Client
```sh
npx prisma generate
```

## ▶️ Running the Project Locally

### 1️⃣ Start the Server
```sh
npm run dev
```
The backend will start on http://localhost:{PORT}.

### 2️⃣ API Endpoints
- POST /api/register → Registers a new user
