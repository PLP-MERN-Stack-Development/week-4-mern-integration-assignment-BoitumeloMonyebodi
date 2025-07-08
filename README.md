MERN Blog Application
A full-stack blog platform built with MongoDB, Express.js, React.js (Vite), and Node.js — featuring authentication, CRUD operations, image upload, and category filtering.
📁 Folder Structure
bash
Copy code
mern-blog/ ├── client/ # React frontend (Vite + Tailwind CSS) ├── server/ # Express backend with MongoDB ├── .gitignore ├── package.json └── README.md 
🔧 Features
✅ User Registration & Login (JWT Authentication)
✍️ Create, Read, Update, Delete (CRUD) for blog posts
🖼 Upload and display images
📚 Category filtering
🔐 Protected routes (Edit/Delete visible to post author only)
🧭 Routing with React Router v6.3
🌐 Proxy connection between client & server
⚙️ Technologies Used
Frontend:
React (Vite)
Tailwind CSS
Axios
React Router
Backend:
Node.js
Express.js
MongoDB & Mongoose
JSON Web Tokens (JWT)
Multer (image upload)
dotenv
🚀 Installation
Clone the repo:
bash
Copy code
git clone https://github.com/your-username/mern-blog.git cd mern-blog 
Install dependencies:
bash
Copy code
npm install 
Install client and server dependencies:
bash
Copy code
cd client && npm install cd ../server && npm install 
🔐 Environment Variables
Create a .env file in /server:
env
Copy code
MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret 
💻 Running the Application
From the root folder:
bash
Copy code
npm run dev 
Client runs on: http://localhost:5173/
Server runs on: http://localhost:5000/
📸 Image Upload
Images are stored in server/uploads/ locally. Use Multer middleware for handling image uploads via forms.
🛠 Available Scripts
From root:
bash
Copy code
npm run dev # Runs both client and server concurrently 
From /client:
bash
Copy code
npm run dev # Runs Vite React app 
From /server:
bash
Copy code
npm run dev # Runs server with nodemon
🙋 Author
Boitumelo Monyebodi
PLP MERN Stack Week 4 Assignment