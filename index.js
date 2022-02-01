const { Client, Intents } = require('discord.js');
var prefix = "!"
const { joinVoiceChannel } = require('@discordjs/voice');
const { getVoiceConnection } = require('@discordjs/voice');
const TOKEN = "OTM3NjY0MzYwOTU0ODU5NTcx.YffB_A.1HuISO44eIht5p6_ehR7vGAeVwE"

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

client.on('messageCreate', async(message) => {
    if (message.content.toLocaleLowerCase() === prefix + 'rachid arwah') { //Here's how to join a voice channel 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.member.guild.id,
            adapterCreator: message.channel.guild.voiceAdapterCreator
        })

        console.log('Connected to voice!');
    }

    //Here's how to leave from voice channel
    if (message.content.toLocaleLowerCase() === prefix + 'rachid nikni') {
        message.channel.send("ani jay 3omri")
    }

    if (message.content.toLocaleLowerCase() === prefix + 'rachid 9wd') {
        const connection = getVoiceConnection(message.guild.id)

        if (!connection) return message.channel.send("I'm not in a voice channel!")

        connection.destroy()
        console.log('Disconnected from voice!');
    }
})

client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    if (newVoiceState.channel) { // The member connected to a channel.
        if (newVoiceState.channelId === "893454593479016478") {
            console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
        }
    }
});


client.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }
    if (message.content === '!rachid list') {

        var myArray = [];
        var array = ["Hamzes#7678", "Safiro#0749", "ryad.derr213#0073", "Bybus#0806"]
        message.member.voice.channel.members.each(member => {
            myArray.push(`${member.user.tag}`)
        });


        console.log(array.filter(x => !myArray.includes(x)));



        message.channel.send(`**MEMBERS**\n${myArray.join("\n") || "No members found"}`);
        message.channel.send(`**N9oucha li majawsh**\n${array.filter(x => !myArray.includes(x)).join("\n") || "No members found"}`);
    }
});



client.login(TOKEN)