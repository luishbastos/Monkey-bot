const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES",'GUILD_PRESENCES',"GUILD_MEMBERS", "GUILD_VOICE_STATES"]})
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdirSync("./commands")
.filter(file => file.endsWith(".js"))
.forEach(file => {
    /**
     * @type {Command}
     */
    const command = require(`./commands/${file}`);
    console.log(`Command ${command.name} loaded`);
    client.commands.set(command.name, command);
});

client.on("messageCreate", message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

	const args = message.content.substring(prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return;

	command.run(message, args, client);

});




// Login to Discord with your client's token
client.login(token);