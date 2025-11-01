# Prep AI - AI-Powered Interview Practice Platform

A Next.js app for practicing job interviews with AI. Generate personalized questions and get detailed feedback on your performance.

## 🚀 Features

- AI-generated interview questions (Google Gemini)
- Voice-based interviews (Vapi AI)
- Detailed feedback with scores and insights
- Interview history management

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Firebase (Auth, Firestore)
- **AI**: Google Gemini, Vapi AI

## 🔧 Quick Start

### Prerequisites

- Node.js 20+
- Firebase project
- Google Gemini API key
- Vapi AI token

### Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create `.env.local`**

   ```env
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_CLIENT_EMAIL=your_email
   FIREBASE_PRIVATE_KEY=your_private_key

   # Google Gemini
   GOOGLE_GENERATIVE_AI_API_KEY=your_key

   # Vapi AI
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_token
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow_id
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000)

## 📖 Usage

1. Sign up/Sign in
2. Go to `/interview` to generate questions
3. Start a voice interview
4. View feedback after completion

## 📝 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server

---

Built with Next.js, Firebase, and AI
