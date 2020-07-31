module.exports = {
	name: 'restart',
	description: 'Reloads all functions',
	args: false,
	execute(message, args, admrole) {
		if (admrole) {
			client.destroy();
		}
	},
};