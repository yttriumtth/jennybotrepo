const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefixhero; //adds the prefix from Heroku
client.fucommands = new Discord.Collection();
client.rpcommands = new Discord.Collection();
client.gtcommands = new Discord.Collection();

const functioncommandFiles = fs.readdirSync('./_functioncommands').filter(file => file.endsWith('.js'));
const roleplaycommandFiles = fs.readdirSync('./_roleplaycommands').filter(file => file.endsWith('.js'));
const greentextcommandFiles = fs.readdirSync('./_greentextcommands').filter(file => file.endsWith('.js'));

var talkChanceCommon = 170; //normal 170
var talkChanceRare = 500; //normal 500
var talkChanceEmoji = 60; //normal 60

//commands setup
for (const file of functioncommandFiles) {
	const fucommand = require(`./_functioncommands/${file}`);
	client.fucommands.set(fucommand.name, fucommand);
}
for (const file of roleplaycommandFiles) {
	const rpcommand = require(`./_roleplaycommands/${file}`);
	client.rpcommands.set(rpcommand.name, rpcommand);
}
for (const file of greentextcommandFiles) {
	const gtcommand = require(`./_greentextcommands/${file}`);
	client.gtcommands.set(gtcommand.name, gtcommand);
}
//commands setup


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {	
	
	//User filter - no bots or PMs, and must have required roles (Jennyfriend or Jennymaster)
	if ((!message.member.roles.has('738728289233010708') && !message.member.roles.has('738728406052765696')) || message.author.bot || message.channel.type !== 'text') {
		return;
	}
	
	//reaction commands =>
	if (message.content.startsWith('>')) {
		//parse and prepare the text
		const args = message.content.slice(prefix.length).split(/ +/);
		const commandName = args.shift().toLowerCase();
		
		//search for relevant command
		const command = client.gtcommands.get(commandName)
			|| client.gtcommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) {
			return;
		}

		//Execute command
		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('There was an error trying to execute that command!');
		}
	}
	
	//roleplay commands =>
	if (message.content.startsWith('.')) {
		//parse and prepare the text
		const args = message.content.slice(prefix.length).split(/ +/);
		const commandName = args.shift().toLowerCase();
		
		//search for relevant command
		const command = client.rpcommands.get(commandName)
			|| client.rpcommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) {
			return;
		}
		
		//If command needs extra arguments, stahp
		if (command.args && !args.length) {
			return message.channel.send(`You didn't provide enough data for Jenny to do that, ${message.author}!`);
		}

		//Execute command
		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('There was an error trying to execute that command!');
		}
	}
	
	//function commands =>
	if (message.content.startsWith(prefix)) {
		//parse and prepare the text
		const args = message.content.slice(prefix.length).split(/ +/);
		const commandName = args.shift().toLowerCase();
		
		//is user a Jennymaster?
		const admrole = message.member.roles.has('738728289233010708');
		
		//search for relevant command
		const command = client.fucommands.get(commandName)
			|| client.fucommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) {
			return message.channel.send(`That is not something Jenny can do.`);
		}
		
		//If command needs extra arguments, stahp
		if (command.args && !args.length) {
			return message.channel.send(`You didn't provide enough data for Jenny to do that, ${message.author}!`);
		}

		//Execute command
		try {
			command.execute(message, args, admrole);
		} catch (error) {
			console.error(error);
			message.reply('There was an error trying to execute that command!');
		}
	}
	
	//Maintenance commands =>
	if (message.member.roles.has('738728289233010708')) {
		if (message.content.startsWith('<')) {
			const args = message.content.slice(prefix.length).split(/ +/);
			const commandName = args.shift().toLowerCase();
			if (commandName == 'changerarefreq') {
				talkChanceRare = args[0];
				return message.channel.send(`The chance of sending a rare message has been changed to 1 in ${talkChanceRare}.`);
			}
			if (commandName == 'changecommonfreq') {
				talkChanceCommon = args[0];
				return message.channel.send(`The chance of sending a common message has been changed to 1 in ${talkChanceCommon}.`);
			}
			if (commandName == 'changeemojifreq') {
				talkChanceEmoji = args[0];
				return message.channel.send(`The chance of sending a emoji reaction has been changed to 1 in ${talkChanceEmoji}.`);
			}
			if (commandName == 'showfreq') {
				return message.channel.send(`Common: ${talkChanceCommon}, Rare: ${talkChanceRare}, Emoji: ${talkChanceEmoji}.`);
			}
		}
	}
	
	//Jenny AI
	var randChance = Math.floor(Math.random() * Math.floor(talkChanceRare));
	if (randChance == talkChanceRare-1) {
		var msgStr = message.content.toUpperCase();
		return message.channel.send('You should write a book! People need to know about the `' + msgStr + '`');
	} else {
		var randChance = Math.floor(Math.random() * Math.floor(talkChanceCommon));
		if (randChance == talkChanceCommon-1) {
			fs.readFile('./textlists/randtalk.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			return message.channel.send(linesGot[randInd]);
			})
		} else {
			var randChance = Math.floor(Math.random() * Math.floor(talkChanceEmoji));
			if (randChance == talkChanceEmoji-1) {
				fs.readFile('./textlists/randreact.txt', (err, data) => {
				if (err) {
					console.error(err)
					return
				}
				linesGot = data.toString().split("\n");
				var randInd = Math.floor(Math.random() * linesGot.length);
				return message.react(linesGot[randInd]);
				})
			}
		}
	}

	return;

});

//client stuff =>
client.on('error', error => {
	 console.error('The websocket connection encountered an error:', error);
});
client.on("reconnecting", function(){
    console.log(`client is trying to reconnect to the WebSocket`);
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.token); //adds the token in Heroku
