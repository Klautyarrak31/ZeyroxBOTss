const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Yardım Kategorileri")
  .setDescription(`**z!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n **z!yardım eğlence |** Eğlence Komutlarını Gösterir.\n **z!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n**z!yardım yetkili |** Yetkili Komutlarını Gösterir.\n **z!yardım bot |** Bot Komutlarını Gösterir\n**z!yardım public |** Public Sunucu Sistemlerini Sösterir\n\n **ZeyroxBOT Bağlantılar** \n ▾ \n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg})`)
  .setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("ZeyroxBOT Ana Komutlar")
.setDescription("**z!istatistik |** Botun istatistiklerini gösterir\n**z!ping |** Botun pingini gösterir")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("ZeyroxBOT Yetkili Komutları")
.setDescription("**z!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**z!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**z!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**z!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**z!kick |** İstediğiniz kişiyi sunucudan atar\n**z!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**z!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**z!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**z!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**z!sil |** Belirtilen miktar mesajı siler\n**z!say |** Sunucudaki üye sayısını gösterir\n**z!linkler |** ZeyroxBOT için genel yardım ve destek linklerini gösterir\n**z!unban |** Belirtilen kişinin banını kaldırır\n**z!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("ZeyroxBOT Eğlence Komutları")
.setDescription("**z!alkış |** Bot Alkışlar\n**z!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**z!emojiyazı |** Bot mesajınızı emoji haline getirir\n**z!hackle |** Etiketlediğiniz kişiyi hackler\n**z!kaçcm |** Malafatının uzunluğunu söyler")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**z!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**z!slot |** Slots oyununu oynar\n**z!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("ZeyroxBOT Kullanıcı Komutları")
.setDescription("**z!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**z!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**z!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**z!emojiler |** Sunucuda bulunan emojileri gösterir\n**z!hesapla |** Belirtilen işlemi yapar\n**z!kurucu-kim |** Sunucunun kurucusunu söyler")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**z!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**z!not-al |** Bot not alır\n**z!notum |** Notunuzu gösterir\n**z!radyo |**  Sesli kanaldan Radyo dinlersiniz\n")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("ZeyroxBOT Ayarlamalı Komutları")
.setDescription("**z!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**z!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**z!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**z!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**z!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**z!sa-as |** Oto sa-ası ayarlarsınız\n**z!sayaç |** Sayacı ayarlarsınız")
.setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026219424459542599/standard.gif");
message.channel.send({embeds: [embed]})
}
if(value === "public") {
  const embed = new diskord.EmbedBuilder()
  .setTitle("ZeyroxBOT Publice Aid Sistemler!")
  .setDescription("**z!perkek-rol |** Public sunucunuzda erkek rolünü ayarlarsınız!\n**z!pkız-rol |** Public sunucunuzda kız rolünü ayarlarsınız!\n**z!pgiriş |** Public sunucunuz için giriş kanalını ayarlarsınız\n**z!pkayıt-et |** Sunucunuzdaki üyeyi kayıt edebilirsiniz\n**z!psayı |** Yetkilinin kayıt ettiği üye sayısını gösterir\n**z!pkayıt-yetkili |** Kayıt eden yetkiliyi gösterir\n**z!pkayıtlı-rol |** Kayıtlı üye rolünü ayarlarsınız\n**z!pkayıtsız-rol |** Kayıtsız üye rolünü ayarlarsınız")
  .setImage("https://cdn.discordapp.com/attachments/1026217109635735632/1026491894982787113/standard_1.gif");
  message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}