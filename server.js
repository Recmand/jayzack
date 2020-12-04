const Discord = require("eris")
const client = new Discord.CommandClient("Nzc5ODc0MjQ1MzcxMTAxMjU1.X7m4fQ.ldetV8lZmIPNwdYoTpH51QB79Bs", {}, {
  prefix: "!"
}) //Disini kita akan menggunakan Token Bot kita
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
  console.log("Bot siap untuk di gunakan") //dia akan memberitahu kita apabila botnya sudah siap di log
})

//halo 
client.on('messageCreate', async (message) => {
  if(message.content == "halo") {
    client.createMessage(message.channel.id, "Halo, nice to meet you") //Bot akan merespon Halo Juga apa bila kamu bilang halo
  }
})

//hi
client.on('messageCreate', async (message) => {
  if(message.content == "hi") {
    client.createMessage(message.channel.id, "Hi, nice to meet you") //Bot akan merespon Halo Juga apa bila kamu bilang halo
  }
})

module.exports = {
  name: "Badword",
  description: "warn",
  alias: ["anjeng", "anj","bgsd"],
  run: async (client, message, args) => {
client.on('messageCreate', async (message) => {
  if(message.content == "anjg") {
    client.createMessage(message.channel.id, "Mulut anda tolong dijaga ya!") //Bot akan merespon Halo Juga apa bila kamu bilang halo
  }
})
  }}

client.connect() //Code ini digunakan agar si bot dapat terkoneksi ke Discord