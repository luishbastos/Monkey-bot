const fetch = require('node-fetch');

module.exports =  {
    name: "gif",
    description: "Manda gif",
    async run(message, args, client){

        let keywords = 'gif';
        if (args.length > 0) {
          keywords = args.join(' ');
        }
        keywords = keywords.replace("gif","");
        token = "8QZVV2ANHZU7";
        
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${token}&contentfilter=high`;
        try{
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            message.channel.send(json.results[index].url);
            message.channel.send('GIF from Tenor: ' + keywords);
        }
        catch(err){
            message.channel.send("Gif não encontrado !!!");
        }
    },
};