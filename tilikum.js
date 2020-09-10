const Discord = require('discord.js');
const bot= new Discord.Client();
//const token = require('./tokens.js');

bot.once('ready', () => {
    console.log('Ready!');
    const message = bot.channels.cache.get("564834313825288242").messages.fetch("753655254645735494");
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

bot.on("messageReactionAdd", function(messageReaction, user){

    if (messageReaction.message.id == "753655254645735494") {
        let emoji = messageReaction.emoji.name;
            if (emoji == "angrybloodspawn") {
                messageReaction.message.guild.member(user).roles.add("753654654537171038").catch(console.error);
            }
            else if (emoji == "cronuslol") {
                messageReaction.message.guild.member(user).roles.add("753654447267381309").catch(console.error);
            }
            else if (emoji == "Thinking") {
                messageReaction.message.guild.member(user).roles.add("564587710510006272").catch(console.error);
            }
            else if (emoji == "garbage") {
                messageReaction.message.guild.member(user).roles.add("753654702784118804").catch(console.error);
            }
            else if(emoji == "slam") {
                messageReaction.message.guild.member(user).roles.add("582350843718664241").catch(console.error);
            }
            else if (emoji == "funkyparrot") {
                messageReaction.message.guild.member(user).roles.add("564955604330872862").catch(console.error);
            }
            else if (emoji == "AmongUsRun") {
                messageReaction.message.guild.member(user).roles.add("753655500859768984").catch(console.error);
            }
            else if (emoji == "hamBap") {
                messageReaction.message.guild.member(user).roles.add("564587884720553985").catch(console.error);
            }
            else if (emoji == "PandaSip") {
                messageReaction.message.guild.member(user).roles.add("621170642351292427").catch(console.error);
            }
            else if (emoji == "slothscraper") {
                messageReaction.message.guild.member(user).roles.add("563391091529875489").catch(console.error);
            }
            else if (emoji == "shaking") {
                messageReaction.message.guild.member(user).roles.add("564587887577006088").catch(console.error);
            }
            else if (emoji == "protopepe") {
                messageReaction.message.guild.member(user).roles.add("564587896007557120").catch(console.error);
            }
            else{
                console.log ("no roles were added")
            }
        }
});

bot.on("messageReactionRemove", function(messageReaction, user){
    if (messageReaction.message.id == "753655254645735494") {
        let emoji = messageReaction.emoji.name;
        if (emoji == "angrybloodspawn") {
            messageReaction.message.guild.member(user).roles.remove("753654654537171038").catch(console.error);
        }
        else if (emoji == "cronuslol") {
            messageReaction.message.guild.member(user).roles.remove("753654447267381309").catch(console.error);
        }
        else if (emoji == "Thinking") {
            messageReaction.message.guild.member(user).roles.remove("564587710510006272").catch(console.error);
        }
        else if (emoji == "garbage") {
            messageReaction.message.guild.member(user).roles.remove("753654702784118804").catch(console.error);
        }
        else if(emoji == "slam") {
            messageReaction.message.guild.member(user).roles.remove("582350843718664241").catch(console.error);
        }
        else if (emoji == "funkyparrot") {
            messageReaction.message.guild.member(user).roles.remove("564955604330872862").catch(console.error);
        }
        else if (emoji == "AmongUsRun") {
            messageReaction.message.guild.member(user).roles.remove("753655500859768984").catch(console.error);
        }
        else if (emoji == "hamBap") {
            messageReaction.message.guild.member(user).roles.remove("564587884720553985").catch(console.error);
        }
        else if (emoji == "PandaSip") {
            messageReaction.message.guild.member(user).roles.remove("621170642351292427").catch(console.error);
        }
        else if (emoji == "slothscraper") {
            messageReaction.message.guild.member(user).roles.remove("563391091529875489").catch(console.error);
        }
        else if (emoji == "shaking") {
            messageReaction.message.guild.member(user).roles.remove("564587887577006088").catch(console.error);
        }
        else if (emoji == "protopepe") {
            messageReaction.message.guild.member(user).roles.remove("564587896007557120").catch(console.error);
        }
        else{
            console.log ("no roles were added")
        }
    }
});


//bot.login(token);
bot.login(process.env.botToken);