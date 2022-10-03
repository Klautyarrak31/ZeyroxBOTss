const Discord = require("discord.js")
let database = require("croxydb")




exports.run = async(client, message) => {
  if(!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply.send(
    "Yeterli Yetkiniz Yok!"
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
   "Bir Rol Etiketleyin!"
  )
  
  
  database.set(`erkek_${message.guild.id}`, rol.id)
 message.reply("Erkek Rolü Ayarlandı!")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'perkek-rol'
}   