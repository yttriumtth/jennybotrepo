module.exports = {
	name: 'setfreq',
	description: 'Edits Jennytalk',
	args: true,
	execute(message, args, admrole) {
		if (admrole) {
			if (isNaN(args[0]) || isNaN(args[1]) || isNaN(args[2])) {
				return message.channel.send(`Please use actual numbers.`);
			} else {
				var talkChanceCommon = args[0];
				var talkChanceRare = args[1];
				var talkChanceEmoji = args[2];
				message.channel.send(`Jennytalk frequency has been altered: Common: ${talkChanceCommon}, Rare: ${talkChanceRare}, Emoji: ${talkChanceEmoji}`);
			}
		}
	},
};