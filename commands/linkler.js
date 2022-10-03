const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
const embed = new EmbedBuilder()
.setTitle("ZeyroxBOT Link Menüsü!")
.setDescription("**Aşağıdaki linklere tıklayarak ilgili yerlere ulaşabilirsiniz.**")
.addFields({ name: '> Botu Davet Et', value: `[TIKLA](${config.botdavet})`, inline: true})
.addFields({ name: '> Discord Destek Sunucu', value: `[TIKLA](${config.desteksunucusu})`, inline: true})
.addFields({ name: '> Website(BAKIM!)', value: `[TIKLA](${config.website})`, inline: true})
const row = new Discord.ActionRowBuilder()
.addComponents(
  new Discord.ButtonBuilder()
  .setLabel("Davet Et!")
  .setStyle(Discord.ButtonStyle.Link)
  .setURL(config.botdavet),
  new Discord.ButtonBuilder()
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL(config.desteksunucusu),
new Discord.ButtonBuilder()
.setLabel("Oy Ver")
.setStyle(Discord.ButtonStyle.Link)
.setURL(config.topgg)

)
message.reply({embeds: [embed], components: [row]})
message.react("⬇️")


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "linkler"
};
