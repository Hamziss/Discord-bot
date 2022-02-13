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

async function accesSpreadsheet() {
    const doc = new GoogleSpreadsheet(process.env.sheet_id);
    await doc.useServiceAccountAuth(({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
    }));
    //loading data from google sheet doc
    await doc.loadInfo();
    const sheet = await doc.sheetsByIndex[0];


    var Fullarray = [];
    var idarray = [];



    // get rows data and transform it into arrays to make it more easier to use
    const rows = await sheet.getRows();

    rows.forEach(row => {
        Fullarray.push(row.discordTag);
        idarray.push(row.userID);
    });


    //here i started working on the bot
    client.on('messageCreate', message => {

        //cmd to resume all commands
        if (message.content === '!rachid cmd') {
            message.channel.send(`**!rachid present**: gives you the list of members that are with you\n**!rachid absent**: gives you list of members that aren't here\n**!rachid dm**: send dms to absent people`);
        }

        if (message.content.includes('!rachid')) {

            if (!message.member.voice.channel) {
                message.channel.send(`Your aren't in a channel, You have to be in channel execute this 😄.`);
            } else {
                var PresentArray = [];
                var idPresentArray = [];
                //creating the array of present and absent members
                message.member.voice.channel.members.each(member => {
                    PresentArray.push(`${member.user.tag}`)
                });
                message.member.voice.channel.members.each(member => {
                    idPresentArray.push(`${member.user.id}`)
                });
                var absent = Fullarray.filter(x => !PresentArray.includes(x));
                var idabsent = idarray.filter(x => !idPresentArray.includes(x));

                if (message.content === '!rachid present') {
                    message.channel.send(`📝**PRESENT MEMBERS**📝\n${PresentArray.join("\n") || "No members found"}`);
                }
                if (message.content === '!rachid absent') {
                    message.channel.send(`📝**ABSENT MEMBERS**📝\n${absent.join("\n") || "No members found"}`);
                }

                //cmd to send dms
                if (message.content === '!rachid dm') {
                    idabsent.forEach(element =>
                        client.users.fetch(element).then((user) => {
                            user.send('💖 You missed a meeting today hope you doing fine 💖');
                        })
                    )

                    if (idabsent.length === 0) { message.channel.send("all members are here") } else { message.channel.send(`✅ Dms sent ✅`); }
                }
            }
        }

    });

}
accesSpreadsheet();

client.login(process.env.token);