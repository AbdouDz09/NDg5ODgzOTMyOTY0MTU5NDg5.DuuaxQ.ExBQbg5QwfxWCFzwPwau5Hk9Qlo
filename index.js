const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "d!"



//bc

client.on("message", message => {
    if (message.content.startsWith("d!bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "d!bc";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("d!avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('d!adminbc')){
if(!message.author.id === '461468630773661699') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  
  client.on("message", message => {
    if (message.content === "d!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("RANDOM")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       d!obc | لأرسال برود كاست للكل

       d!bc  |  لأرسال برود كاست للأونلاين

       d!support | سيرفر السبورت** `)
   message.author.sendEmbed(embed)
   
   }
   });


   client.on("message", message => {
    if (message.content === "d!support") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .addField('❤سيرفر الدعم الفني', `  https://discord.gg/  `)
     message.author.send({embed});
   
    }
   });





   client.on('message', message => {
    if (message.content.startsWith("d!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Broadcast Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My Prefix``' , `[d!]` , true)
            .addField('``My owner``' , `[@AbdouFERSAOUI_Dz 👻็็็็็็็็็#5217]` , true)

        
                    })
}
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Abdou_DZ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : abdou-DZ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`d!help ҝгҝ Server ,`,"http://twitch.tv/abdoufersaoui_dz")
client.user.setStatus("Dz")
});


client.login(process.env.TOKEN);
