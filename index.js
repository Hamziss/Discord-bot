const { Client, Intents } = require('discord.js');
var prefix = "!"
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


client.on('messageCreate', message => {
    var PresentArray = [];
    var Fullarray = ["Hamzes#7678", "Safiro#0749", "Swissou#3825", "JupiterRoue45#3205",
        "Pa Pou#5397", "ryad.derr213#0073", "Bybus#0806"
    ]
    var idPresentArray = [];
    var idarray = ["444594022644711424", "530849194961797140"]
    
    
    if (message.content === '!rachid cmd') {
        message.channel.send(`**!rachid present**: gives you the list of members that are with you\n**!rachid absent**: gives you list of members that aren't here\n**!rachid dm**: send dms to absent people`);
    }    
    
    if (message.content.includes('!rachid')) {

        if (!message.member.voice.channel) {
            message.channel.send(`Your aren't in a channel, You have to be in channel to see who else is here.`);
        } else {

            message.member.voice.channel.members.each(member => {
                PresentArray.push(`${member.user.tag}`)
            });
            message.member.voice.channel.members.each(member => {
                idPresentArray.push(`${member.user.id}`)
            });
            var absent = Fullarray.filter(x => !PresentArray.includes(x));
            var idabsent = idarray.filter(x => !idPresentArray.includes(x));

            if (message.content === '!rachid present') { message.channel.send(`📝**PRESENT MEMBERS**📝\n${PresentArray.join("\n") || "No members found"}`); }
            if (message.content === '!rachid absent') { message.channel.send(`📝**ABSENT MEMBERS**📝\n${absent.join("\n") || "No members found"}`); }


            if (message.content === '!rachid dm') {
                idabsent.forEach(element =>
                    client.users.fetch(element).then((user) => {
                    //here we can put a custom message that will be sent in dms
                        user.send('You missed a meeting today hope you are doing fine');
                    })
                )
                if (idabsent.length === 0) { 
                    message.channel.send("ABSENT LIST IS EMPTY") 
                } else { message.channel.send(`✅ Dms sent ✅`); }
            }
        }
    }

});



client.login(TOKEN)
