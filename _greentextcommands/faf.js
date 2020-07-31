module.exports = {
	name: 'faf',
	aliases: ['fafcoln', 'falcon', 'nonon', 'notfalcon', 'fafshit'],
	execute(message, args) {
		const imagelist = './imagelists/faf.txt'; //location of images
		const framecolor = '#ff6780'; //personalized frame color
		const fs = require('fs');
		const Discord = require('discord.js');
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
			message.channel.send(imageEmbed);
		})
	},
};