require("dotenv").config();
const { Telegraf, Markup, session } = require("telegraf");
const express = require('express');
const fetch = require('node-fetch');
// const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

const port = process.env.PORT || 4040;
const hook = process.env.WEBHOOK_URL;
const { BOT_TOKEN, SERVER_URL } = process.env;

const TELEGRAM_API = https://api.telegram.org/bot${BOT_TOKEN};
const URI = /webhook/${BOT_TOKEN};
const WEBHOOK_URL = SERVER_URL + URI;

app.use(express.json());
app.use(bodyParser.json());
const init = async () => {
    const res = await axios.get(${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL});
    console.log(res.data);
};

app.listen(process.env.PORT || 5000, async () => {
    console.log('app is running on port', process.env.PORT || 5000);
    await init();
});

const bot = new Telegraf(process.env.BOT_TOKEN);

const web_link = "https://godzillaonton.netlify.app/";

bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = ${web_link}?ref=${startPayload};
    const user = ctx.message.from;
    const userName = user.username ? @${user.username} : user.first_name;
    ctx.replyWithMarkdown(*Hey, ${userName}! Welcome to $GODZ Tap App!*, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Play now!", web_app: { url: urlSent } }],
                [{ text: " Join Our Telegram Channel ", url: "https://t.me/gozillaontonportal" }]
            ],
            in: true
        },
    });
});

// Command to send a picture
bot.command('sendphoto', (ctx) => {
    const photoUrl = 'https://i.postimg.cc/y6kn1gCV/Untitled-design-7.png'; // Replace with your image URL
    ctx.replyWithPhoto(photoUrl, { caption: 'Here is your photo!' });
});

app.get("/", async (req, res) => {
    res.send("Hello Get me here I work fine");
});

app.post(URI, (req, res) => {
    bot.handleUpdate(req.body);
    res.status(200).send('Received Telegram webhook');
});

app.get('/webhook', (req, res) => {
    res.send('Hey, Bot is awake!');
});
