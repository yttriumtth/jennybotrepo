const fs = require('fs');
const Discord = require('discord.js');
//const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();
const prefix = process.env.prefixhero;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {	
	
	if (message.author.bot)
	{
		return;
	}
	
	//test here
	if (message.content.startsWith('%haiku')) {
		
		fs.readFile('./textlists/haiku5.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			await message.channel.send(linesGot[randInd]);
		})
		fs.readFile('./textlists/haiku7.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			await message.channel.send(linesGot[randInd]);
		})
		fs.readFile('./textlists/haiku5.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			await message.channel.send(linesGot[randInd]);
			return;
		})
	}
	//test here
	
	
	if (!message.content.startsWith(prefix)) {
		//All the > stuff below
		if (message.content.startsWith('>neversoft') || message.content.startsWith('>loli') || message.content.startsWith('>headsosoft')) {
			fs.readFile('./imagelists/neversoft.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#0066ff')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>faf') || message.content.startsWith('>nonon')) {
			fs.readFile('./imagelists/faf.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff6780')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>dab') || message.content.startsWith('>yttrium')) {
			fs.readFile('./imagelists/dab.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>id') || message.content.startsWith('>blacklight')) {
			fs.readFile('./imagelists/id.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#40826d')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>viv')) {
			fs.readFile('./imagelists/vivi.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#c375ff')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>buddy') || message.content.startsWith('>raine')) {
			fs.readFile('./imagelists/buddy.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#0066ff')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>aran')) {
			fs.readFile('./imagelists/aran.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#00ff00')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		
		if (message.content.startsWith('>eck') || message.content.startsWith('>egg') || message.content.startsWith('>huevo') || message.content.startsWith('>egs') || message.content.startsWith('>ech') || message.content.startsWith('>ek') || message.content.startsWith('>tawz')) {
			fs.readFile('./imagelists/eckse.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff00ff')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>project2nd') || message.content.startsWith('>leo') || message.content.startsWith('>chad') || message.content.startsWith('>twokinds') || message.content.startsWith('>loick')) {
			fs.readFile('./imagelists/leoian.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff6c00')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>laugh') || message.content.startsWith('>lmao')) {
			fs.readFile('./imagelists/lol.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>furry') || message.content.startsWith('>furfag')) {
			fs.readFile('./imagelists/furry.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>wrong') || message.content.startsWith('>wrang')) {
			fs.readFile('./imagelists/wrong.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>cozy') || message.content.startsWith('>comfy')) {
			fs.readFile('./imagelists/cozy.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage(linesGot[randInd])
			return message.channel.send(imageEmbed);
			})
		}
		
		if (message.content.startsWith('>jen') || message.content.startsWith('>Jen')) {
			fs.readFile('./imagelists/jenny.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randImInd = Math.floor(Math.random() * (linesGot.length / 2));
			var randLiInd = linesGot.length - randImInd - 1;
			const randLine = linesGot[randLiInd];
			const neoRandLine = randLine.replace("AUSERA",message.author.username);
			message.channel.send(neoRandLine);
			const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage(linesGot[randImInd])
			return message.channel.send(imageEmbed);
			})
		}
		// > commands ends
		// dot commands
		if (message.content.startsWith('.')) {
		
			if (message.author.bot)
			{
				return;
			}
			const args = message.content.slice(prefix.length).split(/ +/);
			const dotcommand = args.shift().toLowerCase();
			//individual dot commands below
			//pets, target user, pic and text
			if (dotcommand === 'pet' || dotcommand === 'pets') {
				if (!message.mentions.users.size) {
					return message.reply('Can you tag a user for Jenny?'); //optional
				}
				fs.readFile('./dotcommands/pet.txt', (err, data) => {
					if (err) {
						console.error(err)
						return
					}
					linesGot = data.toString().split("\n");
					var randInd = Math.floor(Math.random() * linesGot.length);
					const randLine = linesGot[randInd];
					const taggedUser = message.mentions.users.first();
					message.channel.send(`${message.author.username} has pet ${taggedUser}`+randLine);
				})
				fs.readFile('./imagelists/neversoft.txt', (err, data) => {
				if (err) {
					console.error(err)
					return
				}
				linesGot = data.toString().split("\n");
				var randInd = Math.floor(Math.random() * linesGot.length);
				const imageEmbed = new Discord.RichEmbed()
				.setColor('#ff0040')
				.setImage(linesGot[randInd])
				return message.channel.send(imageEmbed);
				})
			}
			//suicide, single user, only text
			if (dotcommand === 'die' || dotcommand === 'dies' || dotcommand === 'suicide' || dotcommand === 'sudoku' || dotcommand === 'anhero') {
				fs.readFile('./dotcommands/suicide.txt', (err, data) => {
					if (err) {
						console.error(err)
						return
					}
					linesGot = data.toString().split("\n");
					var randInd = Math.floor(Math.random() * linesGot.length);
					const randLine = linesGot[randInd];
					return message.channel.send(`${message.author.username}` + randLine);
				})
			}
			//dot commands end
		}
		//dot commands section end		
		//AI Stuff below
		var chanceMod = 170; //chance of getting reply message (1 out of <value>)
		var reactMod = 3; //chance of getting react (<value> out of chanceMod)
		var reactModVal = chanceMod - reactMod;
		var randChance = Math.floor(Math.random() * Math.floor(chanceMod));
		if (randChance == 0) {
			fs.readFile('./textlists/randtalk.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			return message.channel.send(linesGot[randInd]);
			})
        } else if (randChance == 1) {
			var randChance = Math.floor(Math.random() * Math.floor(50));
			if (randChance == 0) {
				var msgStr = message.content.toUpperCase();
				return message.channel.send('You should write a book! People need to know about the `' + msgStr + '`');
			}
		} else if (randChance > reactModVal) {
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
		
		//AI Stuff Ends
	}
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	

	if (!message.member.roles.has(command.reqRole)) {
		return message.reply('You do not have permission to do this command.');
	}
	
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on('error', error => {
	 console.error('The websocket connection encountered an error:', error);
});

client.on("reconnecting", function(){
    console.log(`client is trying to reconnect to the WebSocket`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.token);
