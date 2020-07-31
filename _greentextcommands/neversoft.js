module.exports = {
	name: 'neversoft',
	aliases: ['headsosoft', 'loli'],
	execute(message, args) {
		const imagelist = './imagelists/neversoft.txt'; //location of images
		const framecolor = '#0066ff'; //personalized frame color
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