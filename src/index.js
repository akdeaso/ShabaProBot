const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'https://shabadabada.home.blog/',
      }
  });
});
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})
client.login("NzEwOTc3MDU5Mzg3ODY3MjE4.Xr-HoA.emfjCKiRUD7h9Y_AS8AzCjGJ7Jk")