# TO-DO-SESSION-APP
A simple yet functional To-Do List Web App built with Node.js, Express, and vanilla JavaScript.
The app allows users to add, mark complete, delete, and clear tasks, with support for both server-side session storage and local browser storage.

**Features**
+Add new tasks
+Mark tasks as completed/uncompleted
+Delete individual tasks
+Clear all tasks at once
+Session-based storage (via Express sessions)

**Tech Stack**
+Frontend
  +HTML, CSS, Javascript
+Backend
  +Node.js, Express.js
  +Express-session for session management
  +Body-parser for API handling

**Project Structure**
<img width="219" height="278" alt="image" src="https://github.com/user-attachments/assets/fc4b38be-e822-4e27-b419-b3f8093d5daf" />

**Installation & Setup**
+Prerequisites
Node.js (v14+)
npm (Node package manager)

+Steps
1.Clone the repository
git clone https://github.com/yourusername/todo-app.git
cd todo-app

2.Install dependencies
npm install express express-session body-parser

3.Start the server
node server.js

4.Open your browser and visit:
http://localhost:3000

**API Endpoints**
+GET /api/todos → Fetch all tasks
+POST /api/todos → Add a new task
+PUT /api/todos/:id → Toggle task complete/incomplete
+DELETE /api/todos/:id → Delete a task
+DELETE /api/todos → Clear all tasks

<img width="548" height="613" alt="image" src="https://github.com/user-attachments/assets/97efecc3-1266-4b2b-96e7-c9d0b6459992" />
