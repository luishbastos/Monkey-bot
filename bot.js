const Discord = require('discord.js')
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES",'GUILD_PRESENCES',"GUILD_MEMBERS"]})
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

bot.commands = new Discord.Collection();

fs.readdirSync("./commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
    const command = require(`./commands/${file}`);
    console.log(`Comando ${command.name} loaded`)
    bot.commands.set(command.name, command);

});


bot.once('ready', () => {
	console.log(`Logado como ${bot.user.tag}`);

});

bot.on('message', message =>{
    if (!message.content.slice(prefix.length).split(/ +/)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'macaco'){
        message.channel.send('MACACO OLHA O MACACO!!!');
    }

});


// Login to Discord with your client's token
bot.login(token);