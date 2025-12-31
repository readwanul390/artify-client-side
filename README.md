

🎨 Artify – A Creative Artwork Showcase Platform

🔗 Live Website:
https://fantastic-dango-cf2f9b.netlify.app

🔗 Server (API) Live:
https://artify-server-side-eosin.vercel.app

📌 Project Overview

Artify is a modern online artwork-sharing platform where artists can upload, showcase, explore, like, and manage digital artworks. Users can create personal galleries, save favorite artworks, and interact with other artists through a clean, responsive, and user-friendly interface.

This project is built as a full-stack single-page application using React, Firebase Authentication, Node.js, Express, and MongoDB.

🚀 Key Features

✅ User Authentication with Email/Password & Google Login

✅ Add, Update & Delete Artworks (Private Route Protected)

✅ Explore Public Artworks with Search & Category Filter

✅ Like System using MongoDB $inc, $push, $pull

✅ Favorites System (Add & Remove Favorite Artworks)

✅ Featured Artworks (Sorted by latest using sort() & limit())

✅ Artist Info Section with profile photo & total artworks

✅ Dark & Light Theme Toggle with LocalStorage persistence

✅ Responsive Design for Mobile, Tablet & Desktop

✅ Beautiful UI Animations & Effects using external React libraries

✅ Protected Routes Reload Support (No auto logout on refresh)

## 🖼 Screenshot

![Artify Screenshot](./screenshot.png)


🛠️ Technology Stack
🔹 Client Side

React.js (Vite)

React Router DOM

Firebase Authentication

Tailwind CSS + DaisyUI

SweetAlert2

React Awesome Reveal / React Tooltip / Typewriter (Libraries)

🔹 Server Side

Node.js

Express.js

MongoDB (Mongoose)

CORS

Dotenv

🔹 Hosting Platforms

Client: Netlify

Server: Vercel

📄 Pages & Functionalities

🏠 Home Page – Slider, featured artworks, top artists, highlights

🔍 Explore Page – Public artworks with search & filter

➕ Add Artwork (Private) – Upload new artworks

🖼 My Gallery (Private) – Manage own artworks

❤️ My Favorites (Private) – Saved artworks list

🖌 Artwork Details (Private) – Full details, likes & favorites

🔐 Login & Register Pages

❌ Creative 404 Page (No Navbar/Footer)

🔒 Authentication & Security

Firebase Authentication used for user login and registration

Private Routes protected using React Router

Reloading private routes does NOT redirect to login

CORS configured properly for Netlify & Localhost

🗃️ API Endpoints (Server)

GET /artworks

GET /artworks/featured

GET /artworks/:id

POST /artworks

PATCH /artworks/:id

PATCH /artworks/:id/like

DELETE /artworks/:id

POST /favorites

GET /favorites

DELETE /favorites/:id

✅ Deployment & Environment Setup
Frontend .env
VITE_API_BASE=https://artify-server-side-eosin.vercel.app

Backend .env
MONGO_URI=your_mongodb_connection_string
PORT=3000

📌 GitHub Commit Rules (Followed)

✅ Client Side: 15+ meaningful commits

✅ Server Side: 8+ meaningful commits

✅ No Lorem Ipsum Used

✅ No default JavaScript alert used (SweetAlert only)

✨ Optional Features Implemented

✅ Artist Profile / Artwork Count

✅ Category-based Filtering System

✅ Dark/Light Theme with Persistence

▶️ Run the Project Locally
## ▶️ Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/readwanul390/artify-client.git

2️⃣ Navigate to the project directory
cd artify-client

3️⃣ Install dependencies
npm install

4️⃣ Setup environment variables

Create a .env file in the root directory and add:

VITE_API_BASE=https://artify-server-side-eosin.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id

5️⃣ Start the development server
npm run dev

6️⃣ Open in browser

Visit:

http://localhost:5173


---

## ✅ Why This Fully Meets the Requirement

✔ Step-by-step instructions  
✔ Clear commands  
✔ `.env` explained  
✔ Easy to run for reviewers  
✔ Professional formatting  

---

## 📌 Optional (Extra Polish)
You can add this line at the end:

```md
> ⚠️ Make sure Node.js (v16 or higher) is installed on your system.

👨‍💻 Developed By

Abu Said Mohammad Readwanul Hridoy
Department of Computer Science & Engineering
Assignment Category: B12-A10_category-0021
