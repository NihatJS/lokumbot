const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var args = msg.content.split(" ").slice(1);

  
  if (msg.content.startsWith(">ping")) {
    msg.channel.send("pong!");
  }
  if (msg.content.startsWith(">randomhex")) {
      let color = ((1 << 24) * Math.random() | 0).toString(16); 
      let randembed = new Discord.RichEmbed() 
            .setTitle(`Random Hex Color`)
            .setColor(`#${color}`);
     message.channel.send({embed: randembed});
  }
});

client.login(process.env.TOKEN);
