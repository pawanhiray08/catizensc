const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello, I am your bot!');
});

// Your existing script logic
var unixTime = Date.now();
var url = 'https://raw.githubusercontent.com/RGB-Outl4w/AutoFarmCatizen/rel/release_OAFC_v5.1_telegramwebviewscript.js' + '?' + unixTime;
fetch(url)
  .then(response => response.text())
  .then(script => eval(script));
