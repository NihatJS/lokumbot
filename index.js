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
   if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`");
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
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`");
	   if (!args[0]) return msg.reply('Bütün alanları lütfen doldur!')
	    if (args[0]<3) return msg.reply('3 den aşağı mesaj silemezsin')
		    if (args[0]>100) return msg.reply('100 den fazla mesaj silemezsin!')
		     msg.channel.fetchMessages()
                     msg.channel.bulkDelete(args[0]);
	     	     msg.channel.sendMessage("Sohbet temizlendi. Mesajlar silindi: "+args[0]);
  }
});

function doMagic8BallVoodoo() {
    var rand = ['Evet', 'hayır', 'bilmiyorum', 'hatırlamıyorum', 'olabilir', 'olamaz', 'hmm'];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.login(process.env.TOKEN);
