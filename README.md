# 🔐 DesiLinkr Auth App

This is the **Authentication Microfrontend** of the **DesiLinkr** microfrontend architecture.  
It handles user **login** and **registration** using modern UI and clean API integration.

---

## 🧠 Tech Stack

- ⚛️ React with TypeScript (TSX)
- 🧩 Module Federation (exposed MFE to Shell)
- 🧪 ShadCN UI for clean component styling
- 🔗 Axios for API requests
- 🌀 Tailwind CSS
- 📦 Docker-ready

---

## ✨ Features

- 🔐 Login and Signup forms with validation
- 📬 API integration using Axios
- 🎨 Responsive UI with ShadCN + Tailwind
- 🧩 Built to be loaded by the Shell App via Module Federation

---

## 🧪 Run & Build Scripts (Casual Dev Style)

| Script                   | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| 🟢 `npm start`           | Starts the dev server on [http://localhost:3001](http://localhost:3001). |
| 🧱 `npm run build`       | Builds the app for production using Rspack.                              |
| 🧪 `npm run build:dev`   | Builds in development mode (faster, unoptimized).                        |
| 🚀 `npm run build:start` | Serves the `dist/` production build locally.                             |

## 🐳 Docker Usage

- 🛠 Build Docker Image

docker build -t shell_app .

- 🚀 Run the Container

sudo docker run -p 3001:3001 shell_app

## 📌 Notes

- Allways run on port `3001` 🛠️

## 🧑‍💻 License

MIT License  
Copyright © 2025 Harsh Tagra, DesiLinkr  
See the [LICENSE](./LICENSE) file for details.
