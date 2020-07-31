module.exports = {
	name: 'gm',
	description: 'Posts the Gibe Money command',
	args: true,
	execute(message, args, admrole) {
		if (admrole) {
			const usNam = args[0];
			const amount = args[1];
			message.channel.send(`e!add-money ${usNam} ${amount}`);
		}
	},
};