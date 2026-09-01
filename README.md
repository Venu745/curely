# 🩺 Carely — Healthcare Support App

Carely is a simple and accessible healthcare support web application designed to help users request support and get basic assistance through an AI-powered chatbot.

The project focuses on providing a clean, user-friendly healthcare experience with a modern interface and simple support features.

## ✨ Features

* 🏥 **Healthcare Support Form** — Users can submit a support request with their details.
* 🤖 **AI Assistant** — Chat with an AI assistant for basic patient chart information.
* 💬 **Interactive Chat UI** — Simple and responsive chatbot interface.
* 📱 **Responsive Design** — Works across desktop, tablet, and mobile devices.
* 🎨 **Modern UI** — Built with React and Tailwind CSS.
* 🔒 **Environment Variables** — API keys are stored securely using `.env`.

## 🛠️ Technologies Used

### Frontend

* React.js
* Tailwind CSS
* React Router
* JavaScript

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### AI

* Google Gemini API
* `@google/genai`

## 📂 Project Structure

```text
Carely/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

> The exact folder structure may vary depending on the project setup.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Add your Gemini API key

Create a `.env` file inside the `server` folder:

```env
GEMINI_API_KEY=your_gemini_api_key
```

**Never upload your `.env` file or expose your API key publicly.**

### 5. Start the backend

Inside the `server` folder:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Start the frontend

Inside the `client` folder:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 🤖 AI Assistant

The AI assistant uses the Google Gemini API through the Express.js backend.

The request flow is:

```text
React Frontend
      ↓
Express.js Backend
      ↓
Google Gemini API
      ↓
AI Response
      ↓
React Chat Interface
```

The API key is kept on the backend using environment variables instead of exposing it in the React frontend.

## ⚠️ Disclaimer

This project is a concept-level healthcare support application created for educational and demonstration purposes.

The AI assistant is not a replacement for a qualified healthcare professional and should not be used for diagnosis, emergency situations, or medical decision-making.

## 🎯 Future Improvements

* User authentication and login
* Database integration with MongoDB
* Appointment booking
* Patient dashboard
* Admin dashboard
* Persistent chat history
* Improved AI responses
* Healthcare resource directory

## 👨‍💻 Author

**Venu**

Built with ❤️ using React, Tailwind CSS, Node.js, Express.js, and Google Gemini AI.

```

You can paste this directly into your GitHub **`README.md`**.
```
