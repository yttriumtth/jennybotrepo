module.exports = {
	name: 'ping',
	description: 'Ping!',
	aliases: ['alive', 'test'],
	args: false,
	reqRole: '212320806473039873', //member
	execute(message, args) {
		message.channel.send('I currently exist.');
	},
};