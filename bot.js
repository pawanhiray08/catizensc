const TelegramBot = require('node-telegram-bot-api');
const puppeteer = require('puppeteer');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Starting the game automation...');

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://your-game-url.com');

    // Inject and execute your game automation script
    var unixTime = Date.now();
    var url = 'https://raw.githubusercontent.com/RGB-Outl4w/AutoFarmCatizen/rel/release_OAFC_v5.1_telegramwebviewscript.js' + '?' + unixTime;
    await page.addScriptTag({ url });

    // Perform additional actions if needed
    // await page.evaluate(() => {
    //   // Your game automation logic here
    // });

    await browser.close();
    bot.sendMessage(chatId, 'Game automation completed successfully!');
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
});
