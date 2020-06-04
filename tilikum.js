const Discord = require('discord.js');
const bot= new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
    //const channel = bot.channels.cache.get('115575007391907849');
    //const rund = bot.user.fetch('277290868552105985');
    //channel.send('HAPPPPPPPPPPPPPPPPY BIRTHDAY!!! ' + '<@277290868552105985>');
    //console.log(rund)
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

bot.login('NzE3NTIxOTg2NzI5MDE3Mzc0.Xtbjlg.zyHYiqbULTXbThljR8ucjd4L3N4');