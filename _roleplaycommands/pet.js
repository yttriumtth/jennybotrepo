module.exports = {
	name: 'pet',
	aliases: ['pets', 'pats', 'headpats'],
	execute(message, args) {
		const imagelist = './imagelists/neversoft.txt'; //location of images
		const framecolor = '#ff0040'; //personalized frame color
		const fs = require('fs');
		const Discord = require('discord.js');
		if (!message.mentions.users.size) {
			fs.readFile('./textlists/pet.txt', (err, data) => {
				if (err) {
					console.error(err)
					return
				}
				linesGot = data.toString().split("\n");
				var randInd = Math.floor(Math.random() * linesGot.length);
				const randLine = linesGot[randInd];
				const taggedUser = message.mentions.users.first();
				message.channel.send(`${message.author.username} has pet ` + args[0] + randLine);
			})
			fs.readFile(imagelist, (err, data) => {
				if (err) {
					console.error(err)
					return
				}
				linesGot = data.toString().split("\n");
				var randInd = Math.floor(Math.random() * linesGot.length);
				const imageEmbed = new Discord.RichEmbed()
				.setColor(framecolor)
				.setImage(linesGot[randInd])
				return message.channel.send(imageEmbed);
			})			
		}
			fs.readFile('./textlists/pet.txt', (err, data) => {
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
			fs.readFile(imagelist, (err, data) => {
				if (err) {
					console.error(err)
					return
				}
				linesGot = data.toString().split("\n");
				var randInd = Math.floor(Math.random() * linesGot.length);
				const imageEmbed = new Discord.RichEmbed()
				.setColor(framecolor)
				.setImage(linesGot[randInd])
				return message.channel.send(imageEmbed);
			})
	},
};