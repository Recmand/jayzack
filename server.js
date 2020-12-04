const Discord = require("eris")
const client = new Discord.CommandClient("Nzc5ODc0MjQ1MzcxMTAxMjU1.X7m4fQ.ldetV8lZmIPNwdYoTpH51QB79Bs", {}, {
  prefix: "!"
}) 
const { readdirSync } = require("fs")

const CommandFile = readdirSync("./commands").filter(File => File.endsWith(".js"))

CommandFile.forEach(file => {
  const command = require(`./commands/${file}`)
  client.registerCommand(command.name, async (message, args) => command.run(client, message, args), {
    aliases: command.alias,
    description: command.description
  })
})


client.on('ready', () => {
  console.log("Bot is ready") 
})

//halo 
client.on('messageCreate', async (message) => {
  if(message.content == "halo") {
    client.createMessage(message.channel.id, "Halo, nice to meet you") 
  }
})

//hi
client.on('messageCreate', async (message) => {
  if(message.content == "hi") {
    client.createMessage(message.channel.id, "Hi, nice to meet you") 
  }
})

//kata kasar
client.on('messageCreate', async (message) => {
  if(message.content == "anjg","anj","anjeng","bgsd") {
    client.createMessage(message.channel.id, "Mulut anda tolong dijaga ya!") 
  }
})

//ketawa
client.on('messageCreate', async (message) => {
  if(message.content == "wkwkwk") {
    client.createMessage(message.channel.id, "wkwkwkwkwk") 
  }
})

client.connect() 