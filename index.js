const Discord = require("discord.js")

const TOKEN = "OTM3NjY0MzYwOTU0ODU5NTcx.YffB_A.1HuISO44eIht5p6_ehR7vGAeVwE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})