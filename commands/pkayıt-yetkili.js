const Discord = require("discord.js")
let database = require("croxydb")




exports.run = async(client, message) => {
  if(!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply.send(
    "Yeterli Yetkin Yok!"
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.reply("Bir Rol Etiketlemeniz gerekli!")
  
  
  database.set(`public_yetkili_${message.guild.id}`, rol.id)
 message.reply("Yetkili rolünüz ayarlandı!")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'pyetkili-rol'
}   