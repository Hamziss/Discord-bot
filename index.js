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


client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("bl3")
    }
    if (message.content == "zebi kbir") {
        message.reply("As a bot, i confirm this fact")
    }
})

//discord.js and client declaration
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('messageCreate', message => {
    if (message.content === '!join') {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
})





client.login(TOKEN)