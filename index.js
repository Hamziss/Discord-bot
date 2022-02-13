const { GoogleSpreadsheet } = require('google-spreadsheet');
const { Client, Intents } = require('discord.js');

require("dotenv").config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

client.on("ready", async() => {
    console.log(`Logged in as ${client.user.tag}`)

})

client.login(process.env.token);