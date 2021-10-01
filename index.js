const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);  //basically informs if the code works
});
const prefix = "!";  //our prefix is => !
client.on("messageCreate", (msg) => {
  let args = msg.content.slice(prefix.length).trim().split(/ +/g); //if you know python its same with lists. here we split the command line into pieces

  let command = args.shift().toLowerCase();

  if ((command = "create")) {
    let channel_name = args[0];  //the first thing which we sliced up there is channels' name
    let channel_number = args[1];  //second thing is channels' number
    console.log(channel_name, channel_number);
    for (let index = 0; index < channel_number; index++) {
      msg.guild.channels.create(channel_name, { type: "GUILD_TEXT" });  //we run this code the number which we set with the command
    }
  }
});
client.login("YOUR TOKEN HERE");