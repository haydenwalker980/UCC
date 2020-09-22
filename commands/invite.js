module.exports = {
    // CMD INFORMATION
    name: 'invite',
    aliases: ["links"],
    description: "Gives you invite links.",
    category: "Information",

    // THE ACTUAL CODE
    execute(client, message) {
        message.channel.send(`Please wait`).then(msg => {
            msg.edit(`Here you go!\nFinder: https://discord.com/oauth2/authorize?client_id=757791742337744906&scope=bot&permissions=2146958847\nFinder Debugger: https://discord.com/oauth2/authorize?client_id=758042330539360257&scope=bot&permissions=104188993\nSupport Server:`);
        });

    },
};