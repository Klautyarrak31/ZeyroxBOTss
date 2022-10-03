const Discord = require("discord.js")
let database = require("croxydb")




exports.run = async(client, message) => {
  if(!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply.send(
    "Yeterli Yetkiniz Yok!"
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.reply.send(
   "Bir Rol Etiketleyin!"
  )
  
  
  database.set(`kayıtsız_${message.reply.id}`, rol.id)
 message.reply("Kayıtsız Rolünüz Ayarlandı!")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'pkayıtsız-rol'
}   