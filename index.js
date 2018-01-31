const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let args = message.content.split(" ").join(" ").slice(1);

  
  if (msg.content.startsWith(">ping")) {
    msg.channel.send(msg.author.username + " pong!");
  }
  if (msg.content.startsWith(">randomhex")) {
      let color = ((1 << 24) * Math.random() | 0).toString(16); 
      let randembed = new Discord.RichEmbed() 
            .setTitle(`#${color}`)
            .setColor(`#${color}`);
     msg.channel.send({embed: randembed});
  }
  if (msg.content.startsWith(">say")) {
    msg.channel.send(msg.author.username + ": " + args.join(" "));
  }
});

client.login(process.env.TOKEN);
