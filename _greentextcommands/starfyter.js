module.exports = {
	name: 'starfyter',
	aliases: ['star', 'starfighter', 'milk', 'milky', 'starfy'],
	execute(message, args) {
		const imagelist = './imagelists/starfyter.txt'; //location of images
		const framecolor = '#df663c'; //personalized frame color
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