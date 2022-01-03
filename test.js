const Discord = require('discord.js');
const bot= new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
    const message = bot.channels.cache.get("887090354875158538").messages.fetch("887090414895632444");
});

// add role when user reacts to message
bot.on("messageReactionAdd", function(messageReaction, user){

    if (messageReaction.message.id == "887090414895632444") {
        let emoji = messageReaction.emoji.name;

        //Crucible
        if (emoji == "Amazing") {
            messageReaction.message.guild.member(user).roles.add("886281490026070026").catch(console.error);
        }
        //Raid
        else if (emoji == "Thumbs_Up") {
            messageReaction.message.guild.member(user).roles.add("886280903922430003").catch(console.error);
        }
        //Nightfall
        else if (emoji == "Facepalm") {
            messageReaction.message.guild.member(user).roles.add("886281577158541363").catch(console.error);
        }
        //NSFW
        else if (emoji == "Joy") {
            messageReaction.message.guild.member(user).roles.add("886281717881638932").catch(console.error);
        }
        else{
            console.log ("no roles were added")
        }
    }
});


// remove role when user removes reaction
bot.on("messageReactionRemove", function(messageReaction, user){
    if (messageReaction.message.id == "753655254645735494") {
        let emoji = messageReaction.emoji.name;

        //Crucible
        if (emoji == "Amazing") {
            messageReaction.message.guild.member(user).roles.remove("886281490026070026").catch(console.error);
        }
        //Raid
        else if (emoji == "Thumbs_Up") {
            messageReaction.message.guild.member(user).roles.remove("886280903922430003").catch(console.error);
        }
        //Nightfall
        else if (emoji == "Facepalm") {
            messageReaction.message.guild.member(user).roles.remove("886281577158541363").catch(console.error);
        }
        //NSFW
        else if (emoji == "Joy") {
            messageReaction.message.guild.member(user).roles.remove("886281717881638932").catch(console.error);
        }
        else{
            console.log ("no roles were added")
        }
    }
});

// auth token
bot.login("ODg3MDg2NjQ2ODEyNjI3MDE0.YT_B0Q.A4EJLqetz02sNQidImGUkMp5o3s");