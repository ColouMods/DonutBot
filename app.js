const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";



client.on('ready', () => {
console.log('I am ready!');
	client.channels.get('435574865714479124').sendMessage("Donut Bot Initialised");
	client.user.setPresence({game: {name: "Super Mario Kart", type: 0}});
});

client.on('message', message => {
	if (message.content.startsWith(prefix) && ((message.author.id==290486859480563713) || (message.author.id==333710766706524167) || (message.author.id==259458435484090369))); {
		const args = message.content.slice(prefix.length).trim().split(/:+/g);
		const command = args.shift().toLowerCase();
		if (command === 'hype') {
			message.channel.send("<@" + message.author.id + ">: You are not able to `!hype` for another [time] minutes.");
		}
		if (command === 'say') {
			let sayChannel = args[0];
			let text = args.slice(1).join(":");
			client.channels.get(sayChannel).sendMessage(text);
		}
		//if (message.content.match(/hey donutbot/i)) {
		//message.channel.send(greet[(Math.floor(Math.random() * greet.length))] + " " + message.author.username + ", " + greet2[(Math.floor(Math.random() * greet2.length))]);
		//} 
		//return;
	}
});

client.on("guildMemberAdd", (member) => {
    guild.channels.find("name","general").send("Somebody once told me that <@" + member.id + "> has joined the server. ");
});
  
client.on("guildMemberRemove", (member) => {
  guild.channels.find("name","general").send(member.username + " has left the server. ");
});

devs = ["333710766706524167", "290486859480563713", "259458435484090369"];
greet = ["Hello", "Hi", "Hey"];
greet2 = ["how's it going?", "what's up?", "I don't really like you, to be honest."];


  // THIS  MUST  BE  THIS  WAY
  client.login(process.env.BOT_TOKEN);
