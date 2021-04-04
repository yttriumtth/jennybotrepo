module.exports = {
	name: 'gayspider',
	aliases: ['haram', 'syria'],
	execute(message, args) {
		const imagelist = './imagelists/gayspider.txt'; //location of images
		const fs = require('fs');
		fs.readFile(imagelist, (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			message.channel.send(linesGot[randInd]);
		})
	},
};