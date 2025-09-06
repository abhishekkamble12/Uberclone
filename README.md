# 🚗 Uber Clone - Full Stack Ride-Hailing Application

A feature-rich Uber clone built with the **MERN** stack (MongoDB, Express.js, React, Node.js) that replicates core functionalities of the Uber platform, including real-time ride booking, location tracking, and payment integration.

---

## ✨ Features

### User Features
- 📱 User authentication (signup/login)
- 🗺️ Real-time ride booking
- 📍 Live location tracking
- 💳 Multiple payment methods
- 🚗 Vehicle type selection
- 📊 Ride history and receipts
- ⭐ Driver ratings and reviews

### Driver (Captain) Features
- 🚘 Driver registration and verification
- 🎯 Ride request notifications
- 🗺️ Turn-by-turn navigation
- 💰 Earnings dashboard
- ⭐ Rating system
- 🕒 Online/Offline status toggle

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Frontend library
- **React Router** — Client-side routing
- **Tailwind CSS** — Styling framework
- **Socket.IO** — Real-time communication
- **Google Maps API** — Maps and navigation
- **Axios** — HTTP client

### Backend
- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **MongoDB** — Database
- **Mongoose** — ODM for MongoDB
- **JSON Web Tokens** — Authentication
- **Socket.IO** — Real-time features
- **Bcrypt** — Password hashing

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekkamble12/Uberclone.git
   cd Uberclone
   ```

2. **Install dependencies**

   ```bash
   # Install server dependencies
   cd backend
   npm install

   # Install client dependencies
   cd ../frontend/frontend
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the `backend` directory:
     ```
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

   - Create a `.env` file in the `frontend/frontend` directory:
     ```
     VITE_BASE_URL=http://localhost:3000/api
     VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

4. **Start the development servers**

   ```bash
   # Start backend server
   cd backend
   npm run dev

   # In a new terminal, start frontend
   cd frontend/frontend
   npm run dev
   ```

5. **Open the application**

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000](http://localhost:3000)

---

## 📱 Screenshots

<img width="1896" height="1026" alt="image" src="https://github.com/user-attachments/assets/5578cdf1-5cdd-4829-a734-2561a0772a19" />


---

## 🏗️ Project Structure

```
uber-clone/
├── backend/               # Backend server
│   ├── config/           # Database and other configurations
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── app.js            # Express app setup
│
└── frontend/             # Frontend React application
    └── frontend/
        ├── public/       # Static files
        └── src/
            ├── assets/       # Images, fonts, etc.
            ├── components/   # Reusable components
            ├── context/      # React context
            ├── pages/        # Page components
            ├── services/     # API services
            └── App.jsx       # Main App component
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes  
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Uber, for the inspiration
- All open-source libraries used in this project
- The amazing developer community

---
