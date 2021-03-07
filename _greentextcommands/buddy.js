module.exports = {
	name: 'buddy',
	aliases: ['bud', 'raine', 'rane', 'bloved', 'raina', 'sad', 'sads', 'thesad', 'thesads', 'thebiggestsads', 'thebiggestsad', 'cry', 'thecry', 'thebiggestcry'],
	execute(message, args) {
		const imagelist = './imagelists/buddy.txt'; //location of images
		const framecolor = '#0066ff'; //personalized frame color
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