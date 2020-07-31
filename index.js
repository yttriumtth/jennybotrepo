const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.fucommands = new Discord.Collection();
client.rpcommands = new Discord.Collection();
client.gtcommands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const prefix = process.env.prefixhero; //adds the prefix from Heroku

const functioncommandFiles = fs.readdirSync('./_functioncommands').filter(file => file.endsWith('.js'));
const roleplaycommandFiles = fs.readdirSync('./_roleplaycommands').filter(file => file.endsWith('.js'));
const greentextcommandFiles = fs.readdirSync('./_greentextcommands').filter(file => file.endsWith('.js'));

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
	
	if (message.author.bot || message.channel.type !== 'text')
	{
		return; //no bots or PMs
	}
	
	
	if (!message.member.roles.has('738728289233010708') && !message.member.roles.has('738728406052765696'))
	{
		return; //Must have required roles (Jennyfriend or Jennymaster)
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
	
	return;
	
});

//overhead =>
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
