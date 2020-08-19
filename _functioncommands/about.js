module.exports = {
	name: 'about',
	description: 'Who is Jenny',
		aliases: ['jenny', 'help', 'halp'],
	args: false,
	execute(message, args, admrole) {
		const Discord = require('discord.js');
		const imageEmbed = new Discord.RichEmbed()
		.setColor('#ff0040')
		.setTitle('Jenny')
		.setAuthor('Jenny', 'https://cdn.discordapp.com/attachments/535406784085622793/745739489267155124/canvas2.png', 'http://takethehint.net/')
		.setDescription('Discord Shitpost Bot')
		.setThumbnail('https://cdn.discordapp.com/attachments/535406784085622793/745739489267155124/canvas2.png')
		.addFields(
			{ name: 'Why?', value: 'becuz' },
			{ name: '\u200B', value: '\u200B' },
			{ name: '1', value: 'Some value here', inline: true },
			{ name: '2', value: 'Some value here', inline: true },
		)
		.addField('3', 'Some value here', true)
		.setTimestamp()
		.setFooter('To be molestedd', 'https://cdn.discordapp.com/icons/212320806473039873/a_66402aa927dbb05de9af61340536cf1b.webp');
		return message.channel.send(imageEmbed);
	},
};