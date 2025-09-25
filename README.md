# 🎵 OpenMusic API  

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Hapi.js](https://img.shields.io/badge/Hapi.js-FF6C37?style=for-the-badge&logo=hapi.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=gmail&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

---

## 📖 Overview  
**OpenMusic API** is a back-end service for managing music data.  
It is built with **Node.js** and **Hapi.js**, supporting user authentication, playlists, collaborations, file uploads, caching, and message queue processing.

---

## 🚀 Features  
- ✅ User authentication & authorization (JWT)  
- 🎵 CRUD operations for songs, albums, and playlists  
- 👥 Playlist collaboration with other users  
- 📤 Export playlist service via **RabbitMQ**  
- ⚡ Caching with **Redis** for better performance  
- 📧 Email notification using **Nodemailer**  
- 🧹 Code linting enforced with **ESLint**  

---

## 🛠 Tech Stack  
- **Framework**: Hapi.js  
- **Database**: PostgreSQL  
- **Authentication**: JWT  
- **Message Broker**: RabbitMQ  
- **Cache**: Redis  
- **Email**: Nodemailer  
- **Migration**: Node-pg-migrate  
- **Utilities**: dotenv, bcrypt, nanoid  

---
## ⚙️ Installation  

1. Clone the repository  
   ```bash
   git clone https://github.com/username/openmusic-api.git
   cd openmusic-api

2. Install dependencies
   ```bash
   npm install
   
3. Setup .env file
   ```bash
   HOST=localhost
   PORT=5000
   
   # PostgreSQL
   PGUSER=your_user
   PGPASSWORD=your_password
   PGDATABASE=openmusicv3
   PGPORT=5432
   
   # JWT
   ACCESS_TOKEN_KEY=your_access_key
   REFRESH_TOKEN_KEY=your_refresh_key
   ACCESS_TOKEN_AGE=1800
   
   # RabbitMQ
   RABBITMQ_SERVER=amqp://localhost
   
   # Redis
   REDIS_SERVER=localhost
   
4. Run migration
   ```bash
   npm run migrate up

5. Start the server
   ```bash
   npm run start

---
## 📌 API Endpoints (Examples)

### 🔑 Authentication
- `POST /users` → Register user  
- `POST /authentications` → Login  
- `PUT /authentications` → Refresh token  
- `DELETE /authentications` → Logout  

---

### 🎵 Songs & Albums
- `POST /songs` → Add new song  
- `GET /songs` → Get all songs  
- `GET /albums/{id}` → Get album details  

---

### 🎶 Playlists
- `POST /playlists` → Create playlist  
- `POST /playlists/{id}/songs` → Add song to playlist  
- `GET /playlists/{id}/songs` → Get songs in playlist  
- `POST /playlists/{id}/collaborations` → Add collaborator  

---

### 📤 Export
- `POST /export/playlists/{id}` → Export playlist via RabbitMQ  


