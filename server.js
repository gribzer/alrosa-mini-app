// server.js
import 'dotenv/config';
import express from 'express';
import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN не задан в .env!');
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  const url = 'https://alrosa-mini-app.ru/';  // Подставляем URL нашего Mini App
  ctx.reply(
    'Привет! 👋\n\n' +
    'Хочешь узнать, какая профессия тебе действительно подходит? 🎯\n' +
    'Наш небольшой тест по профориентации поможет тебе разобраться в себе и выбрать направление, которое принесёт кайф и успех. 🚀\n\n' +
    'Всего несколько минут — и ты на шаг ближе к идеальной карьере. Готов начать?\n' +
    'Жми на кнопку и поехали! 🔥', 
    {
      reply_markup: {
        inline_keyboard: [[
          { text: 'Пройти тест', web_app: { url } }
        ]]
      }
    }
  );
});

// Обработка любых сообщений
bot.on('message', (ctx) => {
  ctx.reply('Используйте /start, чтобы получить ссылку на приложение.');
});

// Запускаем бота
bot.launch().then(() => console.log('Бот запущен!'));

const app = express();
app.use(express.static('dist'));  // Раздаём frontend через Express

app.listen(PORT, () => {
  console.log(`Express-сервер запущен на порту ${PORT}`);
});