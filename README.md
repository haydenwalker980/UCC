# UCC
Nuke bot disguised as Nitro.
## Prerequisites
- A basic understanding of discord.js
- npm
- discord.js 11.4.2
- A good host (such as <https://repl.it>)
## Setting UCC Up
Run `npm install` in your bot's directory. The required dependencies should install.  
Once you've done that, make a `config.json` file (if one does not exist) with the following template:
```
{
    "owner_ID": "Your ID.",
    "prefix": "Prefix (symbol before commands)",
    "token": "Your bot's token.",
    "version": "1"
}
```
Replace the default values, then run `node index.js`. UCC should now start.  
**WARNING: DO NOT LEAK YOUR CONFIG.JSON FILE!**
## Repl.it Instructions
Edit `config.json` with the same template as above. Dependencies are preconfigured, and all you need to do once finished is click the `Run` button.
