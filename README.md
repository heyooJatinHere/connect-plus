# ConnectPlus – Interest Based Social Interaction Platform

ConnectPlus is a full-stack web platform that helps users discover like-minded people, join community groups, and participate in events based on shared interests.

Built as a modern MERN-stack application for college project evaluation and real-world MVP demonstration.

---

## 🚀 Features

### 🔐 User Authentication  
- Signup & Login (JWT-based authentication)  
- Protected routes  
- Auto-login after signup  

### ⭐ Interest Selection  
- Users select multiple interests  
- Clean interactive UI using Tailwind CSS  
- Interests saved in MongoDB  

### 🤝 Recommendations Engine  
- Matches users based on shared interests  
- Backend computes overlap (`sharedInterests`)  
- Dynamic, real-time recommendations  

### 🎫 Events  
- Events fetched from backend  
- Users can join events  
- Joined events stored in user profile  

---

## 🛠️ Tech Stack

### Frontend  
- React (Vite)  
- Tailwind CSS  
- Axios  
- React Router  

### Backend  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- CORS enabled  

### Deployment  
- Backend: Render  
- Frontend: Vercel  
- Database: MongoDB Atlas  

## 🧪 How to Use the Application

1. **Signup** with your email, username, and password  
2. After signup, **auto-login redirects you to the Interests page**  
3. **Select your interests** from the available categories  
4. View **personalized user recommendations** based on shared interests  
5. Explore **upcoming events** and join any event you like  
6. Your **joined events are saved** in your user profile for future access  
