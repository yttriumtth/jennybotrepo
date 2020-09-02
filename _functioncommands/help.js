module.exports = {
	name: 'help',
	description: 'Helping',
	aliases: ['halp'],
	args: false,
	execute(message, args, admrole) {
		if (!args[0]) {
			message.channel.send('You did not provide a command for which to get help on. The correct syntax is: %help [command name].');
		} else {
			message.channel.send('why you asking me for? ask a mod how that works');
		}
	},
};