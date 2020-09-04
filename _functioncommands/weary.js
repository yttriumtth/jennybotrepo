module.exports = {
	name: 'weary',
	description: 'Rest now',
	aliases: ['tired', 'bonfire', 'mood'],
	args: false,
	execute(message, args, admrole) {
		const Discord = require('discord.js');
		const fs = require('fs');
		
		fs.readFile('./textlists/weary.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randSoInd = Math.floor(Math.random() * (linesGot.length / 2));
			var randLiInd = linesGot.length - randImInd - 1;
			const randLine = linesGot[randLiInd];
			const imageEmbed = new Discord.RichEmbed()
				.setColor('#ff0040')
				.setAuthor(linesGot[randImInd], 'https://cdn.discordapp.com/avatars/283946528090095619/72e70b359da91c5379fea674ded55933.png')
				.setImage('https://cdn.discordapp.com/attachments/535406784085622793/751138242903932988/bonfire.gif')
			message.channel.send(imageEmbed);
			message.channel.send({ 
				files: [{
					attachment: linesGot[randSoInd]
				}]
			})
				.catch(console.error);
			return
		})
	},
};