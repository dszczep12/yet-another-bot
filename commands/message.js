const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testmsg')
		.setDescription('Replies with a message'),
	async execute(interaction) {
		await interaction.reply('Have a good day everyone <3');
	},
};