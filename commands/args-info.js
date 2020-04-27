module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	aliases: ['arg-info', 'arg-test'],
	cooldown: 5,
	guildOnly: true,
	args: true,
	usage: '<arguments>',
	reqRole: '215871761789485057', //admin
	execute(message, args) {
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};