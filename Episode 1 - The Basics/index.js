const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjA3OTg3OTE0NjU5MzMyMDk4.XUhnJw.6GYQ1KMWP6L6jqE6rV6L7kGCV5U";
const prefix = "/";

bot.on("ready", async () => {
    console.log("[Tutorial Bot]: Online!");
    bot.user.setActivity("Nathan Developing", {type: "WATCHING"});
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1) 

    if(cmd === `${prefix}hello`) {
        message.reply("Hello! (Reply)")
        message.author.send("Hello! (Author)")
        message.channel.send("Hello! (Send)")
    }
});

bot.login(token);