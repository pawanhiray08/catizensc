const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello, I am your bot!');
});

var unixTime = Date.now();
var url = 'https://raw.githubusercontent.com/RGB-Outl4w/AutoFarmCatizen/rel/release_OAFC_v5.1_telegramwebviewscript.js' + '?' + unixTime;
fetch(url)
  .then(response => response.text())
  .then(script => {
    // Remove or modify browser-specific code
    script = script.replace(/document/g, ''); // Example modification
    eval(script);
  });
