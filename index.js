const Discord = require("discord.js")

const TOKEN = "OTM3NjY0MzYwOTU0ODU5NTcx.YffB_A.1HuISO44eIht5p6_ehR7vGAeVwE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(TOKEN)