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
