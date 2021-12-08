const { Client, Intents } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const loginKey = process.env.DISCORD_LOGIN_KEY

client.on('ready', () => {
  const channel = client.channels.cache.get("817095071475171353")

  console.log("Beep Beep Boop... Service is Online")
  channel.send("Beep Beep Boop... Service is Online");
})

client.on('guildMemberAdd', (member) => {
  let guild = client.guilds.cache

  const role = guild.roles.find(role => role.name === "Code Monkey")
  member.setRoles(role)
})



client.login(loginKey)