const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var args = msg.content.split(" ").slice(1);

  
  if (msg.content === '>ping') {
    msg.reply('Pong!');
  }
  
  if (msg.content.startsWith === '>ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.TOKEN);
