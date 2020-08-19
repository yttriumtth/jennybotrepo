module.exports = {
	name: 'help',
	aliases: ['halp', 'jenny'],
	description: 'User help',
	args: false,
	execute(message, args, admrole) {
		message.channel.send(fucommands.map(fucommand => fucommand.name).join(', '));
	},
};