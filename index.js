/*
 * ╔══════════════════════════════════════════════════════╗
 * ║       FLAX - Entry Point (index.js)        ║
 * ║   Astra Dynamic intelligence matrix ║
 * ║           by Flaxmalcom         ║
 * ╚══════════════════════════════════════════════════════╝
 */
'use strict';

// ─── AUTO-INSTALL MISSING MODULES ────────────────────────────────────────────
const { execSync, exec } = require('child_process');
const fs = require('fs');
const path = require('path');
try { require('dotenv').config(); } catch {}

const REQUIRED_MODULES = [
  '@whiskeysockets/baileys',
  '@octokit/rest',
  '@distube/ytdl-core',
  '@vitalets/google-translate-api',
  'axios',
  'chalk',
  'cheerio',
  'dotenv',
  'express',
  'fluent-ffmpeg',
  'form-data',
  'fs-extra',
  'megajs',
  'moment-timezone',
  'node-fetch',
  'openai',
  'pino',
  'qrcode',
  'sharp',
  'wa-sticker-formatter',
  'yt-search',
  'acrcloud'
];

function checkAndInstall() {
  const missing = [];
  for (const mod of REQUIRED_MODULES) {
    try {
      require.resolve(mod);
    } catch {
      missing.push(mod);
    }
  }
  if (missing.length > 0) {
    console.log(`\n📦 Installing ${missing.length} missing module(s): ${missing.join(', ')}\n`);
    try {
      execSync(`npm install ${missing.map(m => m === 'chalk' ? 'chalk@4' : m).join(' ')} --save --legacy-peer-deps`, { stdio: 'inherit' });
      console.log('\n✅ All modules installed successfully!\n');
    } catch (e) {
      console.error('❌ Auto-install failed. Please run: npm install');
      console.error(e.message);
    }
  } else {
    console.log('✅ All required modules are present.');
  }
}

checkAndInstall();

// ─── BOOTSTRAP EXPRESS APP ────────────────────────────────────────────────────
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── WEB PAIR PAGE (public/index.html) ───────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── LOAD MAIN BOT ROUTER ─────────────────────────────────────────────────────
let botRouter;
try {
  botRouter = require('./pair');
  app.use('/', botRouter);
  console.log('✅ pair.js loaded and mounted.');
} catch (err) {
  console.error('❌ Failed to load pair.js:', err.message);
  process.exit(1);
}

// ─── HEALTH CHECK ─────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status: 'online',
    bot: 'Flax-md-v2',
    version: '5.0.0',
    developer: 'Flax Malcom',
    timestamp: new Date().toISOString()
  });
});

// ─── 404 HANDLER ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', bot: 'astra xmd v5.0.0' });
});

// ─── GLOBAL ERROR HANDLER ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Express error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// ─── START SERVER ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Flax-md-v2 server running on port ${PORT}`);
  console.log(`🌐 Health: http://localhost:${PORT}/health`);
  console.log(`🔗 Pair page: http://localhost:${PORT}/\n`);
});

// ─── PROCESS HANDLERS ────────────────────────────────────────────────────────
process.on('uncaughtException', (err) => {
  console.error('🔴 UncaughtException:', err.message);
  exec(`pm2 restart GAGA-AI-Nexus`, () => {});
});

process.on('unhandledRejection', (reason) => {
  console.error('🔴 UnhandledRejection:', reason);
});

module.exports = app;
