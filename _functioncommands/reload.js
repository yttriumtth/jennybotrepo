module.exports = {
	name: 'restart',
	description: 'Reloads all functions',
	args: false,
	execute(message, args, admrole) {
		if (admrole) {
			message.channel.send('Restarting...').then(m => {
				client.destroy().then(() => {
					client.login('token');
				});
			});
		}
	},
};