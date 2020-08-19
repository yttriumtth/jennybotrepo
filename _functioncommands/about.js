module.exports = {
	name: 'about',
	description: 'Who is Jenny',
		aliases: ['jenny', 'help', 'halp'],
	args: false,
	execute(message, args, admrole) {
		const Discord = require('discord.js');
		const helpEmbed = new Discord.RichEmbed()
		.setColor('#ff0040')
		.setTitle('Jenny')
		.setURL('https://github.com/yttriumtth/jennybotrepo')
		.setAuthor('The Friend Society', 'https://cdn.discordapp.com/icons/212320806473039873/a_66402aa927dbb05de9af61340536cf1b.webp', 'http://takethehint.net/')
		.setDescription('Discord Shitpost Bot')
		.setThumbnail('https://cdn.discordapp.com/attachments/535406784085622793/745739489267155124/canvas2.png')
		.addField('Functions (%)', 'about, haiku, ping', true)
		.addField('Macros (>)', 'aran, buddy, cozy, dab, eckse, faf, furry, id, jenny, laugh, leoian, mandag, marry, neon, neversoft, starfyter, vivi, waismuth, wrong', true)
		.addField('Roleplay (.)', 'pet, suicide', true)
		.setTimestamp()
		.setFooter('If you know her wherabouts, there is a 500,000,000 spaceshekel bounty. Contact your local space starbucks for more details.');
		return message.channel.send(helpEmbed);
	},
};