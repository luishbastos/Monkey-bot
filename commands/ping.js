const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "ping",
	description: "Shows the ping of the bot!",
	async run(message, args, client) {
		const msg = await message.reply(`Ping: ${client.ws.ping} ms.`);

		msg.edit(
			`Ping: ${client.ws.ping} ms.\nMessage Ping: ${
				msg.createdTimestamp - message.createdTimestamp
			}`
		);
	}
};