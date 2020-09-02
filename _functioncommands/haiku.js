module.exports = {
	name: 'haiku',
	description: 'Generates a haiku',
	args: false,
	execute(message, args, admrole) {
		const fs = require('fs');
		fs.readFile('./textlists/haiku5.txt', async (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			await message.channel.send(linesGot[randInd]);
		})
		fs.readFile('./textlists/haiku7.txt', async (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			await message.channel.send(linesGot[randInd]);
		})
		fs.readFile('./textlists/haiku5.txt', async (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			await message.channel.send(linesGot[randInd]);
		})		
	},
};