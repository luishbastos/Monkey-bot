const fetch = require('node-fetch');
const Discord = require("discord.js")
const voiceDiscord = require("@discordjs/voice")

module.exports =  {
    name: "simp",
    description: "Manda gif com voz",
    async run(message, args, client){

        const channel = message.member.voice.channel;
        if (!channel) return message.channel.send('Entre em um chat primeiro');

        message.channel.send({files: ["gif/simp.gif"]});

        const player = voiceDiscord.createAudioPlayer();
        const som = voiceDiscord.createAudioResource('./som/simp.mp3');

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        
        player.play(som)
        connection.subscribe(player)
        
        player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
                connection.destroy()
        })
        
    },
};