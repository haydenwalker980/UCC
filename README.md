# Finder Development Framework
Finder Development Framework, or FDF, is a simple Discord.JS template.  
If you're looking for the Finder bot, [click here.](https://discord.com/oauth2/authorize?client_id=757791742337744906&scope=bot&permissions=2146958847)  
Note: You should know this, but we're not affiliated with Apple Computers or Apple Corp.  
## Prerequisites
- A basic understanding of discord.js
- npm
- discord.js 11.4.2
- A good host (such as <repl.it>)
## Setting Finder Up
Run `npm install` in your Finder install's directory. The required dependencies should install.  
Once you've done that, make a `config.json` file (if one does not exist) with the following template:
```
{
    "owner_ID": "Your ID.",
    "prefix": "Prefix (symbol before commands)",
    "token": "Your bot's token.",
    "version": "1"
}
```
Replace the default values, then run `node index.js`. Finder should now start.  
**WARNING: DO NOT LEAK YOUR CONFIG.JSON FILE!**
