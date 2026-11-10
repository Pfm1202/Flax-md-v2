<div align="center">

<img src="https://files.catbox.moe/f2b0lf.jpg" alt="FLAX-MD V2" width="260">

# FLAX-MD V2
### Flax Dynamic Intelligence Matrix

A multi-device WhatsApp bot with **295+ commands** and **pairing through a website**.



![Node](https://img.shields.io/badge/Node-%3E%3D18-7c3aed?style=for-the-badge&logo=node.js&logoColor=white)




![Baileys](https://img.shields.io/badge/Baileys-7.x-6d5aff?style=for-the-badge)




![License](https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge)



**Powered by GHOST DEVS**

</div>

---

## ✨ Features

- 🔗 **Web pairing**: users enter their number on the site and get an 8-character code (no Telegram needed)
- 📱 **Multi-number**: many WhatsApp numbers can run on one server
- 🤖 AI chat, voice replies, downloaders, stickers, group tools, anti-link, games and more
- 💾 Sessions saved locally, with optional GitHub backup
- 🎨 Pair page styled in the FLAX-MD look (dark navy and purple)

## 🚀 Quick Start

```bash
git clone <your-repo-url>
cd basemd-v2
npm install
cp .env.example .env     # then edit the values
npm start
```

Open **http://localhost:3000/** to see the pair page.

## 🔗 How to Pair

1. Open your bot's website and enter your WhatsApp number with the country code.
2. Tap **Generate Pair Code**.
3. On your phone: **WhatsApp → Settings → Linked devices → Link a device → Link with phone number instead**.
4. Enter the code. When the page shows **Bot connected**, send `.menu` in WhatsApp.

## ⚙️ Environment Variables

| Variable | Purpose |
|---|---|
| `PORT` | Server port (hosts like Render set this for you) |
| `ADMIN_KEY` | Protects `/reconnect` and `/connect-all` (they stay disabled if empty) |
| `GITHUB_TOKEN` | Optional. Backs up sessions to GitHub so they survive redeploys |
| `OPENAI_API_KEY`, `TMDB_API_KEY` | Optional API keys for AI and movie commands |

> 🔐 Never commit your `.env` file or paste API keys into the code.

## 🌐 Routes

| Route | Description |
|---|---|
| `/` | Pair page |
| `/code?number=263xxxxxxxxx` | Generates a pair code |
| `/status?number=263xxxxxxxxx` | Whether a number is connected |
| `/active` | Count of active sessions |
| `/ping` | Server and bot info |
| `/health` | Health check |
| `/reconnect?key=ADMIN_KEY` | Admin: reconnect saved sessions |
| `/connect-all?key=ADMIN_KEY` | Admin: connect all saved numbers |

## ☁️ Hosting

This bot needs an **always-on Node server** because it keeps WhatsApp connections open. It will **not** work on Vercel or Netlify (serverless).

Works on: Render, Railway, Koyeb, Fly.io, a VPS with `pm2`, or a Docker panel.

- Use a **persistent disk**, or set `GITHUB_TOKEN`, so paired numbers survive restarts and redeploys.
- On free hosts that sleep, ping `/ping` every few minutes to keep the bot online.

## 📁 Structure

```
basemd-v2/
├── index.js        # Express server entry point
├── pair.js         # Bot logic, commands and pairing routes
├── public/
│   └── index.html  # Web pair page
├── .env.example
└── package.json
```

## 👑 Developer

**Flax Malcom Dev** · GHOST DEVS

- 📞 WhatsApp: [+263 77 559 7819](https://wa.me/263775597819)
- ✈️ Telegram: [@flaxmalcom](https://t.me/flaxmalcom)
- 🎵 TikTok: [@flax_malcom_tech](https://www.tiktok.com/@flax_malcom_tech)
- ▶️ YouTube: [@flaxmalcom](https://youtube.com/@flaxmalcom)
- 💻 GitHub: [FlaxMalcom](https://github.com/FlaxMalcom)

---

<div align="center">

© 2026 Flax Malcom Dev · Licensed under MIT

</div>
```
