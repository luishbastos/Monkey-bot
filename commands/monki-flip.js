const fetch = require('node-fetch');
const Discord = require("discord.js")
const voiceDiscord = require("@discordjs/voice")

module.exports =  {
    name: "monki-flip",
    description: "Manda gif com voz",
    async run(message, args, client){

        const channel = message.member.voice.channel;
        if (!channel) return message.channel.send('Entre em um chat primeiro');

        
        const player = voiceDiscord.createAudioPlayer();
        const som = voiceDiscord.createAudioResource('./som/monkey-flip.mp3');

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        message.channel.send({files: ["gif/monki-flip.gif"]});
        player.play(som)
        connection.subscribe(player)
        
        player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
                connection.destroy()
        })
        
    },
};