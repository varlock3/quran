const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const prefix = "Q";

client.on("message", async message => {
  	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith("m")) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=AHfwtcdcHYA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      message.channel.send(':ballot_box_with_check:  **تم تشغيل اغاني  **');
}
    if (message.content.startsWith("اطلع")) {
    if (!message.guild) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave()
              message.channel.send('**:kaaba:صدق الله العضيم:kaaba: **');
    }   
  }

    if (message.content.startsWith("قران1")) {
     let say = new Discord.RichEmbed()
    .setDescription("سورة الفاتحة - مشاري بن راشد العفاسي")
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=btUPp-VJGos", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }
    if (message.content.startsWith("قران2")) {
     let say = new Discord.RichEmbed()
    .setDescription("الشيخ ماهر المعيقلي سورة البقرة كاملة")
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=EwtucCmb7DA", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }          if (message.content.startsWith("قران3")) {
     let say = new Discord.RichEmbed()
    .setDescription("سورة الناس بصوت مشاري العفاسي مكرره 7 مرات")
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=KcGpuJ0avL4", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }
    if (message.content.startsWith("قران4")) {
     let say = new Discord.RichEmbed()
    .setDescription("سورة ( الإخلاص - الفلق - الناس ) - مشاري بن راشد العفاسي")
    .setColor("RANDOM")

    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=2WzCeE6Sq24", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }          if (message.content.startsWith("قران5")) {
     let say = new Discord.RichEmbed()
    .setDescription("سورة الكهف - ماهر المعيقلي")
    .setColor("RANDOM")

    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=sOML64y5dfQ", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }
    if (message.content.startsWith("قران6")) {
      let say = new Discord.RichEmbed()
    .setDescription("الشيخ سعد الغامدي القرآن الكريم كامل")
    .setColor("RANDOM")

    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=viC1MLxfPZI&t=18s", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }
      
      
 if (message.content.startsWith("قران7")) {
   let say = new Discord.RichEmbed()
    .setDescription("سورة الكافرون مكرره لمده نصف ساعه بصوت رائع شيخ العجمي")
    .setColor("RANDOM")

    message.channel.sendEmbed(say);
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Had-GE57-fA", {filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
      });
      }
});




client.on('message', message => {
if (message.content.startsWith('القران')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(300));
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .addField("**قران1**","**سورة الفاتحة**")
 .addField("**قران2**","**سورة البقرة كاملة**")
 .addField("**قران3**","**سورة الناس**")
 .addField("**قران4**","**سورة الإخلاص - الفلق - الناس **")
 .addField("**قران5**","**سورة الكهف**")
 .addField("**قران6**","**القرآن الكريم كامل**")
 .addField("**قران7**","**سورة الكافرون**")
 .addField("**لتوقيف القران**","**اطلع**")
.setColor('RANDOM')
	  message.channel.sendEmbed(embed);

}
});

 /////////
 
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "407695930750402561") return;



if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 

if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});




const child_process = require("child_process");
const adminprefix = "Q";
const devs = ['464046823162511400'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **Done ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  })









client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
