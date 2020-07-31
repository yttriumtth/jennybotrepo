module.exports = {
	name: 'ping',
	description: 'Ping!',
	aliases: ['alive', 'test'],
	args: false,
	execute(message, args, admrole) {
		message.channel.send('I currently exist.');
	},
};