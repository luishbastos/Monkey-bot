const { MessageAttachment, MessageEmbed} = require("discord.js");

module.exports =  {
    name: "macaco",
    description: "Manda imagem",
    async run(message, args, client){
        message.channel.send({files: ["imagem/macaco.jpeg"]});
    },
};