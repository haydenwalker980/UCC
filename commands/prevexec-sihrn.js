module.exports = {
    // CMD INFORMATION
    name: 'prevexec-sihrn',
    aliases: ["ssihrn", "stopsihrn"],
    description: "Gives you invite links.",
    category: "Information",

    // THE ACTUAL CODE
    execute(client, message) {
    client.destroy()
    .then(() => client.login('USEYOURDAMNTOKEN'));

    },
};
