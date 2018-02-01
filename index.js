const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(">help | V1.0", "https://twitch.tv/LokumBot");

});

client.on('message', msg => {



  
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
  if (msg.content.startsWith(">help")) {
      let color = ((1 << 24) * Math.random() | 0).toString(16); 
      let help = new Discord.RichEmbed() 
            .setTitle(`Lokum Bot | Command Help`)
            .addField(">help", "Shows command help")
            .addField(">ping", "Hello World command")
            .addField(">say [your text]", "Command echos your text")
            .addField(">8ball [your question]", "Command answers your question")
            .setColor(`#${color}`);
    
     msg.channel.send({embed: help});
  }
  if (msg.content.startsWith(">say")) {
   if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("You dont have permission! Needed permission: `MANAGE_MESSAGES`");
     let args = msg.content.split(" ").splice(1);
     let say = args.join(" ");
     msg.channel.send(msg.author.username + ": " + say);
  }
  if (msg.content.startsWith(">8ball")) {
    msg.channel.send(msg.author.username + " " + doMagic8BallVoodoo());
  }
});

function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.login(process.env.TOKEN);
