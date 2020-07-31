module.exports = {
	name: 'suicide',
	aliases: ['kill', 'anhero', 'dead', 'sudoku', 'rip', 'dies', 'die'],
	execute(message, args) {
		const fs = require('fs');
		fs.readFile('./textlists/suicide.txt', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			linesGot = data.toString().split("\n");
			var randInd = Math.floor(Math.random() * linesGot.length);
			const randLine = linesGot[randInd];
			return message.channel.send(`${message.author.username}` + randLine);
		})
	},
};