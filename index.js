const { Client, GatewayIntentBits } = require('discord.js');
const express = require("express");

// 🔐 TOKEN environment variable se lega (SAFE METHOD)
const TOKEN = process.env.TOKEN;

// ===== Express Web Server (24/7 online) =====
const app = express();
app.get("/", (req, res) => {
  res.send("VoidCore™ Bot is running 💀");
});

// Dynamic PORT (important for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Web server ready on ${PORT}`));

// ===== Discord Bot Client =====
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ===== Ready Event =====
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// ===== Error handling (important)
client.on('error', console.error);

// ===== Login Bot =====
client.login(TOKEN);
