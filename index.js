const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '>ping') {
    msg.reply('Pong!');
  }
});

client.login('NDAyNDU4NTY3NTU2MzMzNTcw.DVN33w.yCXy5HTKRplVYQGRgLVzhyAq-QY');
