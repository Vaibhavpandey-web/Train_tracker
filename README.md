# 🚝 Train Tracker - Vue 3 + Vuetify + Firebase

A real-time train tracking application built using **Vue 3**, **Vuetify**, and **Firebase Realtime Database**.  
Users can enter their **10-digit PNR number** to track the live location of their train on an interactive map.

---

## ✨ Features
- 🎯 **PNR Validation** – Ensures only valid 10-digit PNR numbers are accepted.
- 🗺 **Live Location Tracking** – Fetches and displays train location on Google Maps.
- 🔥 **Firebase Realtime Database** – Stores and retrieves train location data in real time.
- 🎨 **Vuetify UI Components** – Clean and responsive design with material design.
- ⏳ **Loading Spinner** – Smooth UX when fetching or saving data.

---

## 🛠 Tech Stack
- **Frontend:** Vue 3 (Composition API) + Vuetify
- **Backend:** Firebase Realtime Database
- **Map Integration:** Openstreetmap
- **Deployment:** Netlify / Firebase Hosting

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Train_tracker.git
cd Train_tracker

 #Install dependencies
npm install

#Deployment
npm run build

#for firebase Hosting
firebase deploy


