module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	aliases: ['arg-info', 'arg-test'],
	guildOnly: true,
	args: true,
	usage: '<arguments>',
	execute(message, args) {
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};