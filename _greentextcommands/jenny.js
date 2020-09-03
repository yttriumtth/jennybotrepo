module.exports = {
	name: 'jenny',
	aliases: ['jen', 'jenn'],
	execute(message, args) {
		const imagelist = './imagelists/jenny.txt'; //location of images
		const framecolor = '#ff0040'; //personalized frame color
		const fs = require('fs');
		const Discord = require('discord.js');
		fs.readFile(imagelist, (err, data) => {
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
			.setColor(framecolor)
			.setImage(linesGot[randImInd])
			return message.channel.send(imageEmbed);
		})
	},
};