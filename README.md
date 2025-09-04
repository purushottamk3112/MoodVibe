# MoodVibe - Mood-Based Music Recommender

A full-stack web application that provides personalized music recommendations based on user mood input using AI-powered analysis.

## 🚀 Deployment on Vercel

### Prerequisites
1. Two separate Vercel projects (one for frontend, one for backend)
2. Environment variables configured
3. Database setup (Neon PostgreSQL)

### Frontend Deployment
1. Deploy the `client` folder as a separate Vercel project
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable:
   - `VITE_API_URL`: Your backend Vercel URL (e.g., `https://your-backend.vercel.app`)

### Backend Deployment
1. Deploy the `server` folder as a separate Vercel project
2. Add the following environment variables:
   - `NODE_ENV=production`
   - `FRONTEND_URL`: Your frontend Vercel URL (e.g., `https://your-frontend.vercel.app`)
   - `DATABASE_URL`: Your Neon database connection string
   - `JWT_SECRET`: A secure random string
   - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret
   - `SPOTIFY_CLIENT_ID=64fcffb4a80c42ec8b9699c79b300508`
   - `SPOTIFY_CLIENT_SECRET=b2017354678e420297731092b1e11927`
   - `GEMINI_API_KEY=AIzaSyB5Gd4X_RtIRPh0buXQODuKYc3RQxYgLvM`

### Environment Configuration Files

#### Frontend (.env in client folder):
```
VITE_API_URL=https://your-backend.vercel.app
```

#### Backend (.env in server folder):
```
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
DATABASE_URL=your_neon_database_connection_string
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SPOTIFY_CLIENT_ID=64fcffb4a80c42ec8b9699c79b300508
SPOTIFY_CLIENT_SECRET=b2017354678e420297731092b1e11927
GEMINI_API_KEY=AIzaSyB5Gd4X_RtIRPh0buXQODuKYc3RQxYgLvM
```

## 🛠 Technology Stack

### Frontend
- **React** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** components
- **TanStack Query** for state management
- **Vite** for build tooling

### Backend
- **Node.js** with Express
- **TypeScript**
- **Drizzle ORM** with PostgreSQL
- **Passport.js** for authentication
- **Google Gemini API** for mood analysis
- **Spotify Web API** for music recommendations

## 🔧 Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see .env.example files)
4. Run development servers:
   - Frontend: `cd client && npm run dev`
   - Backend: `cd server && npm run dev`

## 📝 Features

- 🎭 AI-powered mood analysis using Google Gemini
- 🎵 Personalized music recommendations from Spotify
- 🔐 User authentication (email/password + Google OAuth)
- 🌙 Dark/light theme support
- 📱 Fully responsive design
- ✨ Beautiful animations and micro-interactions
- 📚 Search history functionality
# MoodVibe
