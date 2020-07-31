module.exports = {
	name: 'gm',
	description: 'Posts the Gibe Money command',
	guildOnly: true,
	args: true,
	usage: ' <user> <amount>',
	reqRole: '215871761789485057', //admin
	execute(message, args) {
		const usNam = args[0];
		const amount = args[1];
	message.channel.send(`e!add-money ${usNam} ${amount}`);	
	},
};