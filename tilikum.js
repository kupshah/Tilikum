const Discord = require('discord.js');
const bot= new Discord.Client();
//const token = require('./tokens.js');

bot.once('ready', () => {
    console.log('Ready!');
    //const channel = bot.channels.cache.get('632398444128108548');
    //channel.send('Hola Socko! ' + '<@273293656268734477>' + '<@282969880590942209>');
});
bot.on('message', msg => {
    if (msg.channel.id === '641706295577018376') {
        if (msg.attachments.size == 0) {
            msg.delete({ timeout: 500 })
                .then(msg => console.log(`Deleted message from ${msg.author.username} after .5 seconds`))
                .catch(console.error);
    }
    }
});
//bot.login(token);
bot.login(process.env.botToken);