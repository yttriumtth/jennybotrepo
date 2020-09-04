module.exports = {
	name: 'weary',
	description: 'Rest now',
	aliases: ['tired', 'bonfire', 'mood'],
	args: false,
	execute(message, args, admrole) {
		const Discord = require('discord.js');
		const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setAuthor('You seem tired; Come, rest here for a while', 'https://cdn.discordapp.com/avatars/283946528090095619/72e70b359da91c5379fea674ded55933.png')
			.setImage('https://cdn.discordapp.com/attachments/535406784085622793/751138242903932988/bonfire.gif')
		message.channel.send(imageEmbed);
		message.channel.send({ 
			files: [{
				attachment: './misc/stagger.mp3'
			}]
		})
			.catch(console.error);
		return
	},
};