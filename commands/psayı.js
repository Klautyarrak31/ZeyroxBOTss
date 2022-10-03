const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async(client, message) => {
  let kullanıcı = message.mentions.members.first()
   
   if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
   let puan = db.get(`public_${kullanıcı.id}_${message.guild.id}`).length;
   const embed = new Discord.EmbedBuilder()
   .setTitle("ZeyroxBOT - Public Sayı Sistemi!")
   .setDescription(`Kullanıcı: ${kullanıcı}\nKayıt Ettiği Kişi Sayısı: ${puan}\nSorgulayan: ${message.author}`)
   .setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026491894982787113/standard_1.gif")
   message.reply({embeds: [embed]})


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'psayı'
}   