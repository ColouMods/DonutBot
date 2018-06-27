 const Discord = require('discord.js');
  const client = new Discord.Client();
  
  client.on('ready', () => {
    console.log('I am ready!');
  });
 greet = ["Hello", "Hi", "Hey"];
 greet2 = ["how's it going?", "what's up?", "I don't really like you, to be honest."];
 mention = ["You called?", "Yeah?", "What do you need?", "What's up?", "Hi."];
 sorry = ["OK.", "Good.", "You'd better be sorry.", "I forgive you."];

 client.on('message', message => {
//steamed commits
 if (message.content.match(/<@435874889467953152>/i)) {
  message.channel.send("<@" + message.author.id + ">: You are not able to `!hype` for another [time] minutes.");
 }
 if (message.content.match(/hey donutbot/i)) {
  message.channel.send(greet[(Math.floor(Math.random() * greet.length))] + " " + message.author.nick + ", " + greet2[(Math.floor(Math.random() * greet2.length))]);
 } 
      return;
  });

client.on("guildMemberAdd", (member) => {
    client.channels.find("name","general").send("Somebody once told me that <@" + member.id + "> has joined the server. ");
});
  
client.on("guildMemberRemove", (member) => {
  client.channels.find("name","general").send(member.username + " has left the server. ");
});
  // THIS  MUST  BE  THIS  WAY
  client.login(process.env.BOT_TOKEN);
