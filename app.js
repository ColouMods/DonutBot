 const Discord = require('discord.js');
  const client = new Discord.Client();
  
  client.on('ready', () => {
    console.log('I am ready!');
  });
 greet = ["Hello.", "Hi."];
 mention = ["You called?", "Yeah?", "What do you need?", "What's up?", "Hi."];
 sorry = ["OK.", "Good.", "You'd better be sorry.", "I forgive you."];

 client.on('message', message => {

 if (message.content.match(/<@435874889467953152>/i)) {
  message.channel.send("<@" + message.author.id + ">: You are not able to `!hype` for another [time] minutes.");
 }
      
      return;
  });

client.on("guildMemberAdd", (member) => {
    client.channels.find("name","general").send("<@" + member.id + "> has joined the server. ");
});
  
client.on("guildMemberRemove", (member) => {
  client.channels.find("name","general").send(member.username + " has left the server. ");
});
  // THIS  MUST  BE  THIS  WAY
  client.login(process.env.BOT_TOKEN);
