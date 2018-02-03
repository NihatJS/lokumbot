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
  if (msg.content.startsWith(">rastgelehex")) {
      let color = ((1 << 24) * Math.random() | 0).toString(16); 
      let randembed = new Discord.RichEmbed() 
            .setTitle(`#${color}`)
            .setColor(`#${color}`);
     msg.channel.send({embed: randembed});
  }
  if (msg.content.startsWith(">yardım")) {
      let color = ((1 << 24) * Math.random() | 0).toString(16); 
      let help = new Discord.RichEmbed() 
            .setTitle(`Lokum Bot | Komut yardımı`)
            .addField(">yardım", "Komut yardımı")
            .addField(">ping", "Hello World komutu")
            .addField(">rastgelehex", "Rastgele hex kodu üretir")
            .addField(">söylet [your text]", "Senin yazını tekrarlar")
            .addField(">sohbetsil [number]", "Sohbeti siler")
            .addField(">8ball [your question]", "Soruna cevap verir")
            .setColor(`#${color}`);
    
     msg.channel.send({embed: help});
  }
  if (msg.content.startsWith(">söylet")) {
   if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("You dont have permission! Needed permission: `MANAGE_MESSAGES`");
     msg.delete();
     let args = msg.content.split(" ").splice(1);
     let say = args.join(" ");
     msg.channel.send(msg.author.username + ": " + say);
  }
  if (msg.content.startsWith(">8ball")) {
    msg.channel.send(msg.author.username + " " + doMagic8BallVoodoo());
  }
  if (msg.content.startsWith(">sohbetsil")) {
	  let args = msg.content.split(" ").splice(1);
	  if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("You dont have permission! Needed permission: `MANAGE_MESSAGES`");
	   if (!args[0]) return msg.reply('Please fill all blanks!')
	    if (args[0]<3) return msg.reply('You can not delete 3 down messages!')
		    if (args[0]>100) return msg.reply('You can not delete messages from 100 up!')
		     msg.channel.fetchMessages()
                     msg.channel.bulkDelete(args[0]);
	     	     msg.channel.sendMessage("Chat cleared! Message cleaned: "+args[0]);
  }
});

function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.login(process.env.TOKEN);
