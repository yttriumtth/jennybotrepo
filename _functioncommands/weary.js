module.exports = {
	name: 'weary',
	description: 'Rest now',
	aliases: ['tired', 'bonfire'],
	args: false,
	execute(message, args, admrole) {
		const Discord = require('discord.js');
		message.channel.send('You seem tired; Come, rest here for a while');
		const imageEmbed = new Discord.RichEmbed()
			.setColor('#ff0040')
			.setImage('https://cdn.discordapp.com/attachments/535406784085622793/751138242903932988/bonfire.gif')
		message.channel.send(imageEmbed);
		message.channel.send({ 
			files: [{
				attachment: './misc/stagger.mp3',
				name: 'stagger.mp3'
			}]
		})
			.then(console.log)
			.catch(console.error);
		return
	},
};