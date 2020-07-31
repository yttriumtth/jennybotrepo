module.exports = {
	name: 'restart',
	description: 'Reloads all functions',
	args: false,
	execute(message, args, admrole) {
		const Discord = require('discord.js');
		if (admrole) {
			message.channel.send('Restarting...').then(m => {
				client.destroy().then(() => {
					client.login('token');
				});
			});
		} else {message.channel.send('Only Jennymasters can ask of that.')}
	},
};