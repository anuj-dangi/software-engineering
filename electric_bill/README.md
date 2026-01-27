# ⚡ Electricity Bill Management System

A simple web-based application to **add users and generate electricity bills**.  
The project is divided into **backend** and **frontend** sections for clarity and easy maintenance.

---

## Project Structure

```
project-root/
│
├── backend/
│   ├── models/
│   │   ├── userModel.js
│   │   └── dataModel.js
│   │
│   └── server.js
│
├── frontend/
│   ├── css/
│   │   └── (CSS files)
│   │
│   ├── js/
│   │   └── (JavaScript files)
│   │
│   └── src/
│       └── main.html
│
├── package.json
└── README.md
```

---

## Project Sections

### 🔹 Backend
- Built using **Node.js**
- Handles:
  - User creation
  - Electricity bill generation
- Contains:
  - **Models**
    - `User Model` – stores user details
    - `Bill Model` – stores bill information
  - `server.js` – main server file

Backend runs on:
```
http://localhost:3005
```

---

### 🔹 Frontend
- Built using **HTML, CSS, and JavaScript**
- Responsible for:
  - User interface
  - Sending requests to backend
  - Displaying generated bills
- Structure:
  - `css/` → styling files
  - `js/` → frontend logic
  - `src/` → HTML files

---

## ▶How to Run the Project

### 1 Install Dependencies
From the project root directory:
```bash
npm install
```

---

### 2️Start the Backend Server
```bash
cd backend
node server.js
```

✔ Backend will start on **localhost:3005**

---

### 3️Run the Frontend
- Open `main.html` from the `frontend/src` folder
- You can open it directly in a web browser

---

## package.json
The `package.json` file contains:
- Project metadata
- Required dependencies
- Configuration needed to run the project

---

## Features
- Add new users
- Generate electricity bills
- Separate frontend and backend
- Simple and easy to understand structure

---

## Technologies Used
- Node.js
- JavaScript
- HTML
- CSS

---
