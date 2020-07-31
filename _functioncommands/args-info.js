module.exports = {
	name: 'args-info',
	aliases: ['arg-info', 'arg-test'],
	args: true,
	execute(message, args, admrole) {
		if (admrole) {
			message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
		}
	},
};