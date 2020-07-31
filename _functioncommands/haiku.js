module.exports = {
	name: 'haiku',
	description: 'Generates a haiku',
	args: false,
	execute(message, args, admrole) {
		const fs = require('fs');
		fs.readFile('./textlists/haiku5.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			message.channel.send(linesGot[randInd]);
		})
		fs.readFile('./textlists/haiku7.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			message.channel.send(linesGot[randInd]);
		})
		fs.readFile('./textlists/haiku5.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			message.channel.send(linesGot[randInd]);
		})		
		}
	},
};