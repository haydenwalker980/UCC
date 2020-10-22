module.exports = {
    // CMD INFORMATION
    name: 'g5nitro',
    aliases: ["gfn"],
    description: "heres 5 unchecked nitro codes",
    category: "Generator",

    // THE ACTUAL CODE
    execute(client, message) {
      const dscnitro = require('discordnitro')
        message.channel.send(dscnitro(5))
        

    },
};