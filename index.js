const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var args = msg.content.split(" ").slice(1);

  
  if (message.content.startsWith(">ping")) {
    message.channel.send("pong!");
  }
});

client.login(process.env.TOKEN);
