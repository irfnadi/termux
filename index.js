
/*
* "Jangan modal nama doang bro!!!"^M
* (Scriptnya Irfan ID).^M
*/
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const BotName = 'MR.057'; // Nama Bot Whatsapp
const instagramlu = 'https://instagram.com/irfnadi_'; // Nama Instagramlu cok
const whatsapplu = 'Wa.me/6282286425538'; // Nomor whatsapplu cok
const kapanbotaktif = 'Tergantung jaringan'; // Kapan bot lu aktif
const grupch1 = 'https://chat.whatsapp.com'; // OFFICIAL GRUP LU 1
const grupch2 = 'https://youtube.com'; // OFFICIAL YT LU
const grupch3 = 'https://chat.whatsapp.com'; // OFFICIAL GRUP LU 3
//

//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("MR.057");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Irfan Bot scan sekarang!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot Irfan-BOT`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot Irfan-BOT`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes("#buatgrup"))
   {
var nama = text.split("#buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF A187 ID
if(text.includes("!help")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`Haii, kak 👋

*command perintah : !*

╔═ 〘 ♥MR.057-BOT♥ 〙══╗
╚════════════════════╝ 
╔ ═〘 ꜰɪᴛᴜʀᴇ ᴀʟʟ ᴜꜱᴇʀ 〙═╗
╠➥ *!nulis* [ masukan teks ]
╠➥ *!sticker*
╠➥ *!bhsjepang*
╠➥ *!katabijak*
╠➥ *!fakta*
╠➥ *!pantun*
╠➥ *!pantuncinta*
╚ ═════════════╝
╔ ═〘 ʀᴇʟɪɢɪᴏᴜꜱ ᴄᴏᴍᴍᴀɴᴅ 〙╗
╠➥ *!quran* 
╠➥ *!sholat* [ nama daerah ]
╚ ═════════════╝
╔ ═〘 ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 〙╗
╠➥ *!ss*
╠➥ *!wiki* 
╠➥ *!brainly*
╠➥ *!svc* [ tag orng ny ]
╠➥ *!chord* [ nama music ]
╠➥ *!zodiak* 
╠➥ *!listzodiak*
╚═════════════╝
╔〘 ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ ғᴇᴀᴛᴜʀᴇᴤ 〙╗
╠➥ *!quotes*
╠➥ *!quotesnime*
╠➥ *!nama*
╠➥ *!pasangan* [ nama pasangan l]
╠➥ *!lirik* [ nama lagu ]
╠➥ *!infoig* [ nama ig ]
╠➥ *!gay* [ tag orng ny ]
╠➥ *!buaya* [ tag orng ny ] 
╠➥ *!bmkg*
╚═════════════╝
╔═〘 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ 〙╗
╠➥ *!ytmp3* [ link ]
╠➥ *!ytmp4* [ link ]
╠➥ *!instagram* [ link ]
╠➥ *!twt* [ link ]
╠➥ *!facebook* [ link ]
╚═════════════╝
╔═〘 ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇᴤ 〙═╗
╠➥ *!kpop*
╠➥ *!loli*
╠➥ *!hentai enable*
╠➥ *!hentai*
╠➥ *!hentai disable*
╠➥ *!foto cewek/cowok*
╠➥ *!pokemon*
╠➥ *!animeimg*
╚ ═════════════╝
╔═〘 ᴏᴛʜᴇʀᴤ ᴄᴏᴍᴍᴀɴᴅᴤ 〙═╗
╠➥ *!say*
╠➥ *!tts*
╠➥ *!covidindo*
╚═════════════╝
╔═〘 ᴀʙᴏᴜᴛ ʙᴏᴛ 〙╗
╠➥ *!join*
╠➥ *!donasi*
╠➥ *!ownerbot*
╠➥ *!linkgroup*
╚═════════════╝
╔═〘 ᴏᴡɴᴇʀ ʙᴏᴛ 〙═╗
╠➥ *!ban* - banned
╠➥ *!bc* - promosi
╠➥ *!leaveall* - keluar semua grup
╠➥ *!clearall* - hapus semua chat
╠➥ *!offbot* - mematikan bot
╠➥ *!onbot* - menyalahkan bot
╠➥ *!ressetbot* - resset system bot
╚═════════════╝

${gg} ${exists ? " exists " : "*Thank for Using MR.057-BOT* 💕"}
_#tetap jaga kesehatan_ ^_^`, MessageType.text)
conn.sendMessage(id, 'Menu VIP Free: *!prouser*', MessageType.text)
}
if(text.includes("!prouser")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`Haii, kak 👋

*command perintah : !prouser*

╔═ 〘 ♥MR.057-BOT♥ 〙══╗
╚════════════════════╝.
╔ ═〘 ꜰɪᴛᴜʀᴇ ᴀʟʟ ᴜꜱᴇʀ 〙═╗
╠➥ *!nulis* [ masukan teks ]
╠➥ *!sticker/!sct*
╠➥ *!ttp*
╠➥ *!sim* [text pesan]
╠➥ *!bhsjepang*
╠➥ *!katabijak*
╠➥ *!fakta*
╠➥ *!pantun*
╠➥ *!pantuncinta*
╠➥ *!bucin*
╚ ═════════════╝
╔ ═〘 ʀᴇʟɪɢɪᴏᴜꜱ ᴄᴏᴍᴍᴀɴᴅ 〙╗
╠➥ *!quran*
╠➥ *!quran2*
╠➥ *!sholat* [ nama daerah ]
╠➥ *!surah*
╚ ═════════════╝
╔ ═〘 ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 〙╗
╠➥ *!ss*
╠➥ *!wiki*
╠➥ *!wikien*
╠➥ *!ssweb*
╠➥ *!jadwalTV*
╠➥ *!brainly*
╠➥ *!bitly*
╠➥ *!TIanime*
╠➥ *!svc* [ tag orng ny ]
╠➥ *!chord* [ nama music ]
╠➥ *!zodiak*
╠➥ *!listzodiak* [ error ]
╚═════════════╝
╔〘 ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ ғᴇᴀᴛᴜʀᴇᴤ 〙╗
╠➥ *!quotes*
╠➥ *!quotes1*
╠➥ *!quotes2*
╠➥ *!motivasi*
╠➥ *!nama*
╠➥ *!namaninja*
╠➥ *!lirik* [ nama lagu ]
╠➥ *!igstalk* [ nama ig ]
╠➥ *!gay* [ tag orng ny ]
╠➥ *!buaya* [ tag orng ny ].
╠➥ *!bmkg*
╚═════════════╝
╔═〘 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ 〙╗
╠➥ *!ytmp3* [ link ]
╠➥ *!ytmp4* [ link ]
╠➥ *!instagram* [ link ]
╠➥ *!twt* [ link ]
╠➥ *!facebook* [ link ]
╠➥ *!indohot* [ ILEGAL ]
╠➥ *!infoanime* [ Nama Anime ]
╚═════════════╝
╔═〘 ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇᴤ 〙═╗
╠➥ *!kpop*
╠➥ *!meme*
╠➥ *!hentai enable*
╠➥ *!hentai*
╠➥ *!hentai disable*
╠➥ *!ptl cewek/cowok*
╠➥ *!pokemon*
╠➥ *!animeimg*
╠➥ *!nekonime*
╠➥ *!waifu*
╠➥ *!loli*
╚ ═════════════╝
╔═〘 ᴏᴛʜᴇʀᴤ ᴄᴏᴍᴍᴀɴᴅᴤ 〙═╗
╠➥ *!say*
╠➥ *!tts*
╠➥ *!simi* [text pesan]
╠➥ *!covidindo*
╠➥ *!covidcountry* [ negara ]
╠➥ *!puisi*
╠➥ *!puisi2*
╠➥ *!puisi3*
╠➥ *!cerpen*
╠➥ *!cersex*
╠➥ *!checkip* [Link]
╠➥ *!map*
╠➥ *!ping* [Link]
╠➥ *!hostsearch* [Link]
╠➥ *!cektanggal*
╚═════════════╝
╔═〘 ᴀʙᴏᴜᴛ ʙᴏᴛ 〙╗
╠➥ *!join*
╠➥ *!donasi*
╠➥ *!ownerbot*
╠➥ *!linkgroup*
╚═════════════╝
╔═〘 ᴏᴡɴᴇʀ ʙᴏᴛ 〙═╗
╠➥ *!ban* - banned
╠➥ *!bc* - promosi
╠➥ *!leaveall* - keluar semua grup
╠➥ *!clearall* - hapus semua chat
╠➥ *!offbot* - mematikan bot
╠➥ *!onbot* - menyalahkan bot
╠➥ *!ressetbot* - resset system bot
╠➥ *!replay enable* - Pesan Replay
╠➥ *!replay disable* - Peaan Replay
╚═════════════╝
${gg} ${exists ? " exists " : "*Thank for Using MR.057-BOT* 💕"}
_#tetap jaga kesehatan_ ^_^`, MessageType.text)
conn.sendMessage(id, 'Menu Admin Grup: *!menuadmin*', MessageType.text)
}
if(text.includes("!join")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`╔ ═〘 *♥ ️MR.057-BOT♥ ️* 〙╗

*BAKAA!!* Bot tidak dapat join harus di lakukan secara manual/meminta kepada owner bot

${gg} ${exists ? " exists " : "*[ MR.057-BOT ]* 💕"}`, MessageType.text)
}
if(text.includes("!kick")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`╔ ═〘 *♥  ️MR.057-BOT♥  ️* 〙╗

*BAKAA!!* Bot tidak dapat mengeluarkan karena bot bkn Admin grup

${gg} ${exists ? " exists " : "*[ MR.057-BOT ]* 💕"}`, MessageType.text)
}
if(text.includes("!nhentai")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`╔ ═〘 *♥️NHENTAI ♥* 〙╗
CODE NUKLIR 
192704 NTR bathroom
313777 NTR senpai
314237 incets
267352 anak bngsd
221271 jutek
298444 Loli 
/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba 
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ - Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/ - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ - Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
�229144 253687 238577 236509
�227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
�225496 259137 231681 161688
�199613 259260 260433 235532 
�88323 272117 170213 256613
�258382 224942

/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba 
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ - Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/ - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ - Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
/g/114053/ - Unknown Title 
/g/78818/ - Furofuro!
/g/15055/ - Demodori Mama
/g/39876/ - Cherry Break
/g/191427/ - Doutei Danshi Kousei Iinkai
/g/192695/ - Costte Asobo.
/g/192330/ - Level 1
/g/191320/ - Kimi Ni Nara Dekiru
/g/164434/ - MIDNIGHT PRINCESS
/g/76813/ - Superior Cake
/g/148669/ - Ohime-sama Gokko
/g/144806/ - Youkai Watching
/g/163698/ - Escalation
/g/158559/ - Jiyuu de Kimama na Ore no Imouto
/g/182210/ - Hatsujou Days
/g/131428/ - Having Fun With The One That I Love
/g/112853/ - Boku to Oneesan no Naisho
/g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
/g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
/g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
/g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4

�229144 253687 238577 236509
�227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
�225496 259137 231681 161688
�199613 259260 260433 235532
�88323 272117 170213 256613
�258382 224942

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
● Milf ●
165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,19055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
● Random ●
257892 226942 236297 216039 221711 245304 166174 175220

107817 MASTURBATION MAID
181008 MATING ONI DAUGTHER
183714 MATING ONI MOTHER
230041 MICRO BIKINI LOLI
114883 OREIMO COLORED
146595 YOU DAMN COWARD
197074 RECO SEKU
245855 ONI REM BOOK
51332 JURI GAME
251067 LOLI ONSEN
127894 AIKATSU SUMMER IDOL
118282 YUKINYA! 
94579 ANO NATSU OKINAWA
123554 TEISOU KANNEN ZERO
206250 NAKED SWIMMING CLASS
258972 NAKED SWIMMING CLASS 2
75165 GIRLS IN THE FRAME
85289 CAST AOI
217410 SEIKATSU SHUUKAN
102839 THE LIGHT OF TSUKIMI MANOR 
123450 THE SEX LIFE OF TACHIBANAS
228433 SAEKANO MEGURI
254730 NAKED RANDOSERU MEET-UP
200855 I SAVED AN ELF LOLI
225792 I SAVED AN ELF LOLI 2
194036 PLAYING SHOP
79081 AZUSA ATTACK 1
79181 AZUSA ATTACK 2
107668 AZUSA ATTACK 3
245000 AZUSA ATTACK 4
234741 TANAKA'S SISTER'S SECRET 
256161 SCHOOLGIRLS' BREAST EXPOSED
254838 GUILD GIRL AND GOBLIN SLAYER
258741 ARCHWIZARD EXPLOSION MAGIC
175399 GIVING SOMETHING TO MEGUMIN
214111 MC GAKUEN
127981 MY NEIGHBOR RINA
73758 KURONEKO YUKATA
62886 KURONEKO COSPLAY
110648 BATTLE OF KURONEKO
256857 GIRLFRIEND, BOYFRIEND, MANAGER 
262664 GIRLFRIEND, BOYFRIEND, MANAGER 2
178983 WE FUCKED LIKE RABBITS
264018 YET INNOCENT MAIDEN
168120 SHORT PANTS AND OTHERS
112373 POPULARITY OF SHORT PANTS
201031 TRAUMEREI
150933 HELLO LOLITA! 
233766 HELPFUL MOTHER
207964 BROTHER SISTER MAKE PROPER LOVE
142825 A CERTAIN VILLAGE CUSTOM
182290 HERO, DEMON QUEEN AND HER ELF
225904 BOOBS AS REWARD
252784 SISTER IN THE MIXED HOT SPRINGS
180364 MY NEIGHBOR IS A SUCCUBUS
252783 AFTER SCHOOL SEX TREATMENT
110955 AIR HEAD DELIVERY
194163 LOVE FROM THE ASS
114737 DICK CONQUEST
240667 LET'S KISS WITH THE LOWER MOUTH
267270 I'M NO VIRGIN!
266965 HIFUMI FOUND HER SUGAR DADDY
274917 MURAMATA'S SECRET
234363 LOLI SUCCUBUS' MEALTIME
264920 COACH CHIKA
123141 READY STEADY GO
128980 READY STEADY GO 2
262816 LEAVE IT TO ONEE-CHAN
122064 DANGEROUS? SISTERS
266942 NITTA-SAN AT HOME
239369 NITTA-SAN AT SCHOOL
262395 PUBERTY STUDY SESSION 
137065 MEATY MATE
197482 PETITX
158464 JC MANUAL
237482 JUST KEEP WATCHING
191489 INFILTRATION! BOYISH
249257 INFILTRATION! BOYISH 2
260807 INFILTRATION! BOYISH 3
253687 ANOTHER WORLD LEWD MAGIC
266402 ANOTHER WORLD LEWD MAGIC 2
249660 CHILDREN LEARNS SEX
136671 PEACHY BUTT GIRLS
267816 IKUMONOGAKARI DELUXE BAN
220380 VARIOUS LOLI
150436 INDEPENDENT RESEARCH 
224786 ERO PIPPI
42298 TSUNDERO
178931 BECAUSE IT'S YOU SHORTY
181184 KANOMAMA
167586 KID SLUTS
255662 ANE NARU MONO
235594 INAKAX
111258 KIGURUMIX
176994 WHERE DID YOU GO THIS SUMMER 
60473 GRANT MY WISH
268236 AYUNE-CHAN ANAL ECCHI
265725 NPC RAPE MOD
265399 PETIT LOVE COLORED HOLE
238949 MY LITTLE STAR
172018 ANYTHING AFTER THE PHOTOSHOOT 
204352 NATSU NO KISETSU
150749 KONDO NO RACE
237293 BODY COMPLEX
47624 SIBLING LUST
268807 TAIFUU IKKA
188918 SEX MANUAL FOR KIDS
74396 KYARAME-LOLI 
178874 PUCHI BITCH
244977 INDECENT WIN WITH A COLLEGE GIRL
211765 COULD HAPPEN DURING AFTERSCHOOL
95185 MY LITTLE SISTER GOT A BOYFRIEND 
268015 ZENIN SHIKKAKU
82055 HOKENIIN SURVIVAL
269533 OUR GRADUATION CEREMONY
110896 CUTE LITTLE SISTER
265395 ENJOYING SUMMER 
233187 TAKAO-SAN'S SERVICE
240960 WE'RE ON AIR SO BE QUIET
236926 LOOK AT ME AS A GIRL
267470 HANGING OUT WITH MY BIG BROTHER
125987 THE PLACE WHERE I MET UMI
263516 GOBLIN SLAYER HAREM
136393 SUZUKA-SAMA'S SERVANT
227910 SIBLING SEX
114057 CHIKANYA-SAN 
154284 SHOGO BEAT
177489 HINATA NTRISM
192215 DEKOBOKO LOVE SISTER
86129 PORNO SWITCH 
265660 IINARI ACME
168285 BAT?! WOMAN
211648 THE ARCHDEMON IN LOVE 
176656 JOGGING LOLI
272117 MY CHEEKY SISTER BECOMES A DOG
271494 DICK SELLING MAN
258390 SEX FRIEND MOMMA
271890 ERROR OF CALL
259827 STRAY CAT GIRL
258241 IDEAL GIRLFRIEND 
126937 I'LL PRACTICE WITH MY SISTER
209814 TAKUMI-AKI RIN
196016 THE KIDNAPPER SHE LOVED
253618 THEY WANT TO ENTER MEN'S BATH
156795 LITTLE SISTER IS THE CUTEST
274290 KOMI-SAN STRANGE IDEA ABOUT SEX
228626 BOYISH GIRLFRIEND
249743 BOYISH GIRLFRIEND 2
272029 BOYISH GIRLFRIEND 3
272975 BOYISH GIRLFRIEND 4
234638 FATE COLORED
199533 OMNIVOROUS HERO
220794 HORNY ANDROIDS
274555 SEX WITH MY CHILDHOOD FRIEND
255678 OCEAN PARADISE
94966 SLIMY BELLOWS
246032 BULLY ME NAGATORO-SAN
256100 THIGH SITUATION
272050 YES TO FLAT CHEST
107353 FRIENZIED TRIPLE
139512 ZOMBIE ERO MANGA
227463 LEVEL 1
203511 RIN'S FALL
207726 GUP HSIDE
260527 ENKOU OJISAN
151941 TRIP DUNGEON
246011 NADE CAMP
258654 HORE TOKIDOKI NUKUMORI
122876 JOB OF A COMMITTEE MEMBER
151256 AMAGI MITEIAN
143349 THUNDER GIRL
238873 SCARLET LUST
173896 RUN GIRL RUN
230275 DEMON LOLI FATE
185217 R.E.I.N
154089 245473 257867 239159 239820 4039 254903 1241 124919 63207 100287 222359 154951 28061 67226 28359 125838 42751 86322 93125 260151 49189 28018 242166 98771 259880 38827 81971 164946 252067 118261 141699 103454 102317 78392 52038 92888 146170 140437 76281 56047 257486 121132 12709 187334 232255 232255 76273 131406 173289 55907 135440 178640 48680 247587 70178 39487 84663 213693 121009 249935 189774 186729 117046 164345 202735 162075 51212 4295 218436 145303 205437 223438 146105 23933 38886 73936 237026 205427 104036 248318 146843 3743 121136 114634 168501 116602 229151 45689 237889 117435 242163 142422 27027 25940 61748 153284 236393 230775 16835 254152 132572 132572 205856 87639 175124 267949 104619 1158 144726 97984 114619 247970 248800 95558 37030 43621 238547 236283 136018 163398 92050 96999 137191 74648 70475 247229 168175 234921 88347 117957 35962 136088 98879 259201 87152 181235 42912 201358 114790 38691 236481 200631 257164 267987 147751 77146 183191 159852 224514 32380 208152 123768 199489 62529 122161 90791 73206 152299 90641 105671 268803 72737 118565 128142 182543 259739 162377 92414 108371 200629 158150 72345 9138 114118 5944 78100 222995 138839 8189 165888 102016 196044 208863 134460 86152 15752 142440 36590 71710 248618 186139 63675 10002 210268 241043 170027 220041 193448 213624 42460 241296 93008 72953 60624 35634 43525 183414 84531 80199 221306 225945 9037 56185 13176 166411 185184 11350 78525 180027 164869 43742 84686 166817 15543 208626 34270 116759 212084 156750 243973 3341 85848 71207 147591 253076 28 87114 204403 252971 173645 162780 25809 11484 222071 
152809 106661 102222 154215 246366
17830 118581 68777 8861 91321 84274 232846 247295 113306 159042 121173 130 13042 13401 8501 115 3528 416 17214 11310 18147 18222 21560 10247 11518 23677 13605 3494 14936 98092 5905 11311 10392 10371 0302 21290 5161 39695 23571 17504 11269 18276 18101 0317 0228 17694 4473 22224 22200 19452 21589 67893 5569 13918 8958 12137 1333 4725 4458 5905 17166 13851 4458 17149 14471 6706 13850 12224 0929 14991 7382 15857 67893 14218 36477 5870 17553 67803 5870 5454 16102 15217 22801 17138 21001 17388 7446 23638 18222 6719 14331 15021 23845 3168 23552 22096 21604 4797 9497 22464 20855 4377 23610 18140 22260 5905 13347 20420 39689 13732 20667 6929 5275 18507 52262 1340 22049 13339 11265 22295 10439 14814 4178 6992 8784 7632 7357 6936 52262 11267 21100 21272 9340 9559 23464 15874 18502 18500 15857 2188 5376 7381 98092 16127 13486 9350 9220 76036 14219 5144 2831 17920 11347 17142 11264 7667 7762 15099 9110 10482 97556 3569 3670 243896 226387 82506 134764 220958 188337 142825 137838 247696 134442 191227 243896 250431 150180 68609 118174 194036 251338 248406 240302 128602 140791 197729 197782 236277 226181 236713 197353 205995 191390 117424 24909 20558 88336 235157 236910 239393 242683 250684 211759 250575 196880 194265 248717 225022 250287 139721 250035 148726 235905 156153 248717 100531 213586 242517 218308 242478 206905 213211 242357 191773 162662 209519 195287 223960 232398 150416 237635 228032 240545 238549 91568 243104 197422 228080 237326 222855 227463 241970 233736 110903 192317 235537 230439 240296 241467 222410 196557 115500 232110 97067 233773 234546 243304 246796 246403 185406 153841 147103 240560 147184 203402 155366 114750 245493 248487 215243 135032 233370 244691 76666 249743 252782 265803 211869 241777 247129 147001 245258 166001 149245 123442 258741 256917 257125 257123 257136 257085 128936 245413 193031 256896 222957 225553 224600 177301 144965 229822 237468 242739 191773 162662 209519 195287 223960 232398 242580 242276 241880 190332 228922 74396 218511 139512 241657 241654 241665 246622 239691 239944 226738 228952 237635 240354 201129 226503 14920 158558 240072 128502 233379 147184 147395 160011 147308 157642 179800 179801 240560 143349 206734 63386 230184 236525 215971 207718 238577 150134 242169 150933 105582 243252 245682 200424 112940 118282 173023 336104 111986 190050 198432 241677 243773 215078 180029 177013 158902 191227 196348 194965 31064 193941 246525 211648 220210 247104 240757 110647 193770 246403 183590 104753 247576 218810 114750 151165 245074 165950 247888 212521 228922 248624 248623 248622 248619 248618 248615 248613 248612 224644 248393 248394 248397 129911 90423 248717 240296 171461 249249 242460226068 193770 188342 249646 249556 249405 249588 249586 249577 249551 249543 249544 166427 242987 249569 206295 249564 168574 249554 249497 72987 181008 249805 249947 51790 207965 246171 136779 193568 232393 200834 222274 249272 250605 72987 179267 220629 142286 251746 251701 242925 250315 185333 242503 251735 199812 251717 249483 251675 213444 168716 106205 249650 251687 158050 251687 158050 251718 246999 243826 134441 244308 201814 191654 217827 172029 173911 160417 251742 251737 228984 228932 181775 204224 191773 172029 177478
167466 165684 254048 175015 174016 142825 129128 171417 129128 95809 239567 247021 46579 123580 171417 173543 197422 187835 217832 206573 169546 193107 190805 220309 211112 132768 97945 164783 206446 251608 90182 256018 138470 110826 175494 134764 145647 212562 179166 214784 176977 191434 191434 239536 236342 227702 204425 205079 85333 254935 232837 232385 232341 254087 50535 235202 94159 52365 255034 153045 159457 173235 96270 196020 191774 230332 95298 89514 73649 203027 217404 65573 255457 199874 233133 205367 233693 50046 234191 209455 206366 253799 39249 172197 243552 223998221050 217456 225019 234165 258245 247696 258212 258465 86493 258133 244327 260640 261171 244996 202634 165950 220967 120977 204746 142850 99439 232439 246032 200948 265804 25913 262861 196077
155489 257528 267270 177044 267502 184840
144714 228575 268002 267980 227439 267980
268015 89502 228575 220893 160609 261107 110747 235532 248196 228948 259361 235032 139512 257528 260369 261650 234174 116174 239732 213835 146913 216227 182290 117013 259600 139512 258479 173101 235532 258488 264551 263661 242668 154884 150096 265842 259137 781573 234734 244436 265841 265837 255337 110955 265842 266301 928040 122557 135420 209519 265756 136489 242517 266965 134035 266613 183469 244996 255662 267352 208797 267270 267043 213560 261868 267352 186938 267369 263516 266942 111292 233513 262069 172807 263960 184840 266495 252548 267617 193770 262668 225918 147759 154290 240108 240110 208486 240113 242586 257960 109168 109395 109519 112206 231215 246186 267980 259491 265933 196016 235032 228948 131056 121927 134861 195791 116300 268362 152889
167466 165684 254048 175015 174016 142825 129128 171417 129128 95809 239567 247021 46579 123580 171417 173543 197422 187835 217832 206573 169546 193107 190805 220309 211112 132768 97945 164783 206446 251608 90182 256018 138470 110826 175494 134764 145647 212562 179166 214784 176977 191434 191434 239536 236342 227702 204425 205079 85333 254935 232837 232385 232341 254087 50535 235202 94159 52365 255034 153045 159457 173235 96270 196020 191774 230332 95298 89514 73649 203027 217404 65573 255457 199874 233133 205367 233693 50046 234191 209455 206366 253799 39249 172197 243552 223998221050 217456 225019 234165 258245 247696 258212 258465 86493 258133 244327 260640 261171 244996 202634 165950 220967 120977 204746 142850 99439 232439 246032 200948 265804 25913 262861 196077
155489 257528 267270 177044 267502 184840
144714 228575 268002 267980 227439 267980
268015 89502 228575 220893 160609 261107 110747 235532 248196 228948 259361 235032 139512 257528 260369 261650 234174 116174 239732 213835 146913 216227 182290 117013 259600 139512 258479 173101 235532 258488 264551 263661 242668 154884 150096 265842 259137 781573 234734 244436 265841 265837 255337 110955 265842 266301 928040 122557 135420 209519 265756 136489 242517 266965 134035 266613 183469 244996 255662 267352 208797 267270 267043 213560 261868 267352 186938 267369 263516 266942 111292 233513 262069 172807 263960 184840 266495 252548 267617 193770 262668 225918 147759 154290 240108 240110 208486 240113 242586 257960 109168 109395 109519 112206 231215 246186 267980 259491 265933 196016 235032 228948 131056 121927 134861 195791 116300 268362 152889 134500 268338 220735 192060 113276 265526 264824 126784 191851 103366 229144 158651 257484 248696 265804 206387 158123 136188 235928 194941 208797 241819 239732 215376 220212 165957 266906

${gg} ${exists ? " exists " : "*[ MR.057-BOT ]* 💕"}`, MessageType.text)
}
if(text.includes("!bhsjepang")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`╔ ═〘 *♥  ️MR.057-BOT♥  ️* 〙╗

*[ Bahasa Jepang yang paling umum ]*

• Senpai = Senior 
• Kouhai = Junior 
• Hidoi = Jahat 
• Dousta? = Kenapa?, Ada apa? 
• Nani!! = Apa!! 
• Zutto = Kalau saja, Selalu 
• Kirei = Indah 
• Kawaii = Cantik, Imut 
• Yaksoku = Janji 
• Kedo/Demo = Tapi 
• Warui/Gomen = Maaf 
• Sumimasen = Permisi, maaf 
• Omedetou, ne = selamat ya 
• Dame = Jangan, Tidak 
• Sugoi! = Hebat, Keren 
• Daijoubu desu = Saya tidak apa apa / Saya baik baik saja 
• Hanabi = Kembang api 
• Tadaima = Aku pulang 
• Okaerinasai = Selamat pulang 
• Ja, mata/ Mata ne = Sampai jumpa 
• Ittekimasu = Aku berangkat 
•Itterasshai = Hati hati di jalan 
• Ohayou gozaimasu= Selamat Pagi 
• Konnichiwa (ha) = Selamat Siang 
• Konbanwa (ha) = Selamat Malam 
• Oyasuminasai = Selamat tidur 
• Moshi-moshi = Halo (di ucapkan ketika berada dalam sosmed) 
• Zannen desu = Sayang sekali 
• Irasshaimase = Selamat datang 
• Onegai = Tolong 
• Yoroshiku Onegaishimasu = Mohon bimbingannya/bantuannya 
• Doumo/Arigatou = Terima Kasih 
• Iya = Hai 
• Iie = Tidak 
• Ittadakimasu = Selamat makan 
• Nandemonai = Bukan apa apa 
• Nanda korewa? = Apa ini? 
• Dare desu ka? = Siapa ini? 
• Wakatta = Oke, ngerti. 
• Sou ne .. = Begitulah, Mungkin 
• Masaka.... = Nggak mungkin..... (ah masa .....) 
• Naru hodo = Oh gitu 
•Yokatta... = Syukurlah.... 
• Hontou ni?/Souka? = Bener gitu?
• Kimi wa boku no mono = kamu milikku
• Ki o tsukete ne = Hati-hati yah~ 
• Onaka ga suita = Aku lapar
• Itadakimassuuu = Selamat Makaaannn 
• Ii yume wo mite ne = Mimpi indah yah, 
• Yatta ! = Horee! 
• Kawaisou ni... = kasian... 
• Chotto matte ! = Tunggu bentar! 
• Uso = Bohong 
• Uso tsuki ! = Tukang bohong! 
• Uso Jyanai! = Jangan bohong! 
• Nan da yo!? = Apa kau!? 
• Damare! = Diammm! 
• Omae wa kankei nai darou.. ! = Bukan urusanmu..! 
• Mata ne / Mata yo ~ = Sampe jumpa~ 
 • Jibun no seida = Salah sendiri 
• Hitomebore datta no yo... = Cinta pada pandangan pertama
• Doki-doki shichatta yo... = Aku jadi deg-degan nih... 
• Suki da .. = Aku suka kamu 
• Kareshi ga iru no ? = Udah punya pacar? 
• Bukkoroshite yaru! = Akan kubunuh kau! (bisanya diucapkan kalau lagi pada berantem).

${gg} ${exists ? " exists " : "*[ MR.057-BOT ]* 💕"}`, MessageType.text)
}
if(text.includes("!menuadmin")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,` ╭───「 *ADMIN GRUP* 」
├≽ ️!kick (tag member ny)
├≽️ !kick all (Owner Grup)
├≽️ !demote @
├≽️ !promote @
├≽️ !close 
├≽️ !opengrup
╰─────────
${gg} ${exists ? " " : "*Thank for Using MR.057-BOT* 💕"}
_#tetap jaga kesehatan_ ^_^`, MessageType.text)
}
if(text.includes("!listzodiak")){
var num = text.replace(/!help/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+''

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`╭───「 *ZODIAK LIST* 」
├≽  Zodiak Aries (21 Maret – 20 April)
├≽ ️Zodiak Taurus (21 April – 20 Mei)
├≽ ️Zodiak Gemini (21 Mei – 20 Juni)
├≽ ️Zodiak Cancer (21 Juni – 20 Juli)
├≽ ️Zodiak Leo (21 Juli – 21 Agustus)
├≽ ️Zodiak Virgo (22 Agustus – 22 September)
├≽ ️Zodiak Libra (23 September – 22 Oktober)
├≽ ️Zodiak Scorpio (23 Oktober – 22 November)
├≽ ️Zodiak Sagittarius (23 November – 20 Desember)
├≽ ️Zodiak Capricorn (21 Desember – 19 Januari)
├≽ ️Zodiak Aquarius (20 Januari – 18 Februari)
├≽ ️Zodiak Pisces (19 Februari – 20 Maret)
╰───────── ${gg} ${exists ? " " : "*Thank for Using MR.057-BOT* 💕"}`, MessageType.text)
}


//Chat A187 ID
else if (text == 'assalam84$(7_;7&+6ualaikum'){
conn.sendMessage(id, '3aalaikumsalam, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'sa55_&55-&lam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'asalamualai5-+&&kum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Assalamual656&aikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik !help/#info/#donasi Contoh !help' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik !help/#info/!donasi Contoh !help' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik !help/#info/!donasi Contoh !help' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == '$ydwtf'){
conn.sendMessage(id, 'Owner IRFAN wa.me/+6282286425538' ,MessageType.text);
}
else if (text == 'irfan'){
conn.sendMessage(id, 'Aku BOT nya irfan' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod?' ,MessageType.text);
}
else if (text == 'anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik !help' ,MessageType.text);
}
else if (text == 'H&6&ai'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Woi6-----'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'E6&76_^√®√×√¶oy'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == '√^√¥¥π{√{Hi'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Ga×√×√√×√×n'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Siπ}^π¶¥πs'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Bro•π¶π¶π'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Minπ}π•π¶¥π'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'tggt'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'I ••¥••×©√×®√×®√®√×®√×√¶ve u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi Contoh #help' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == '!menu'){
conn.sendMessage(id, '*BAKAA!!* Ulangi dengan perrintah *!help* ' ,MessageType.text)
}
else if (text == '!'){
conn.sendMessage(id, '*BAKAA!!* Masukan perintah *!help* ' ,MessageType.text)
}                                    
else if (text == '!artinama'){
conn.sendMessage(id, '*BAKAA!!* contoh: !nama Rendy' ,MessageType.text)
}
else if (text == '!pasangan'){
conn.sendMessage(id, '*BAKAA!!* contoh: !pasangan Rendy & MR.057a' ,MessageType.text)
}
else if (text == '#menu'){                                                                                                                 
  conn.sendMessage(id, '*BAKAA!!* Ulangi dengan perintah *!help* ' ,MessageType.text)
}
else if (text == '!zodiak2'){
conn.sendMessage(id, '*BAKAA!!* Masukan perintah !zodiak contoh : !zodiak 16-03-2006' ,MessageType.text)
}
else if (text == '!zodiak'){
conn.sendMessage(id, '*BAKAA!!* Masukan perintah !zodiak contoh : !zodiak Scorpio' ,MessageType.text)
}
else if (text == '!stiker'){
conn.sendMessage(id, '*BAKAA!!* masukan gambar dengan caption !sticker' ,MessageType.text)
}

// Fitur
if (text.includes('!nulis')){
  var teks = text.replace(/!nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('!nulis')){
  var teks = text.replace(/!nulis /, '')
    axios.get('https://mhankbarbars.herokuapp.com/nulis?text='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('!nekonime')){
  var aris = text.replace(/ /, '')
    axios.get('https://arugaz.herokuapp.com/api/nekonime')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('!waifu')){
  var aris = text.replace(/ /, '')
    axios.get('https://mhankbarbars.herokuapp.com/api/waifu')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('!kpop')){
  var aris = text.replace(/ /, '')
    axios.get(',https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('!loli')){
  var aris = text.replace(/ /, '')
    axios.get('https://mhankbarbars.herokuapp.com/api/randomloli')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes("!meme"))
   {
    var items = ["funny meme", "meme", "meme 2020"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {                 
       var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];                                                           
              imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
var buf = Buffer.from(response, 'base64'); // Ta-da<--->                                                               
     conn.sendMessage(
            id,
              buf,MessageType.image)                                                                                                
              conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
    3        }
        )

    });                                                                                                                 
  }
  if (text.includes('!bmkg')){
  var aris = text.replace(/ /, '')
    axios.get('https://arugaz.herokuapp.com/api/infogempa')                                           
       .then((res) => {                                                                                      
        imageToBase64(res.data.map)
        .then(                                                                                                 
        (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)                                                  
        })
    })
}
if (text.includes("!bmkg")){
  const aris = text.replace(/!infogempa /, "")
  axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) =>{
  conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = ` *Info Gempa* \n\ *Lokasi 📍* : _${res.data.lokasi}_ \n *Kedalaman 〽 ️* : _${res.data.kedalaman}_ \n *Koordinat ️📌* : _${res.data.koordinat}_ \n *Magnitude 💢* : _${res.data.magnitude}_ \n *Waktu ⏳* : _${res.data.waktu}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes('!igstalk')){
  var teks = text.replace(/!igstalk /, '')
    axios.get('https://arugaz.herokuapp.com/api/stalk?username='+teks)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {                                                                                                                                    var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes("!meme"))
   {
    var items = ["funny meme", "meme", "meme 2020"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
var buf = Buffer.from(response, 'base64'); // Ta-da<--->
              conn.sendMessage(
            id,
              buf,MessageType.image)
              conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    });
    }
if (text.includes("!igstalk")){
  const aris = text.replace(/!igstalk /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${aris}`).then ((res) =>{
  conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Info Instagram *_${aris}_* \n\n *Username* : _${res.data.Username}_ \n *Nama ️* : _${res.data.Name}_. \n *Jumlah Followers ️* : _${res.data.Jumlah_Followers}_ \n *Jumlah Following ️* : _${res.data.Jumlah_Following}_ \n *Jumlah Post ️* : _${res.data.Jumlah_Post}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!infoanime")){
const aris = text.replace(/!infoanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/dewabatch?q=${aris}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = ` *Info Anime* ${aris} : \n\n ${res.data.result} `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!animek")){
const aris = text.replace(/!infoanime /, "")
axios.get(`https://mhankbarbars.herokuapp.com/api/kuso?q=${aris}`).then((res) => {
conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Info Anime* ${aris} : \n\n ${res.data.result} `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
     if (text.includes("!covidcountry")){
const aris = text.replace(/!covidcountry /, "")
axios.get(`https://arugaz.herokuapp.com/api/corona?country=${aris}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Negara : ${res.data.result.country}\n\nActive : ${res.data.result.active}\ncasesPerOneMillion :${res.data.result.casesPerOneMillion}\ncritical : ${res.data.result.critical}\ndeathsPerOneMillion : ${res.data.result.deathsPerOneMillion}\nrecovered : ${res.data.result.recovered}\ntestPerOneMillion : ${res.data.result.testPerOneMillion}\ntodayCases : ${res.data.result.todayCases}\ntodayDeath : ${res.data.result.todayDeath}\ntotalCases : ${res.data.result.totalCases}\ntotalTest : ${res.data.result.totalTest}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes("!animek")){
const aris = text.replace(/!infoanime /, "")
axios.get(`https://mhankbarbars.herokuapp.com/api/kuso?q=${aris}`).then((res) => {
conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Info Anime* ${aris} : \n\n ${res.data.result} `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!gay")){
const aris = text.replace(/!gay /, "")
axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
    let hasil = ` ${res.data.desc} \n\n *Tingkat Gay* : _${res.data.persen}_%`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
 if (text.includes("!ping")){
const aris = text.replace(/!ping /, "")
axios.get(`https://api.banghasan.com/domain/nping/${aris}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nresult : ${res.data.hasil}`;                                        
          conn.sendMessage(id, hasil ,MessageType.text);
  })
 }                                                                                                                     
  if (text.includes("!hostsearch")){
const aris = text.replace(/!hostsearch /, "")
axios.get(`https://api.banghasan.com/domain/hostsearch/${aris}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nhasil : ${res.data.hasil}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes("!zodiak")){
const aris = text.replace(/!zodiak /, "")
axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=aruga&tgl-bln-thn=${aris}`).then((res) => {
    let hasil = `➸ Lahir : ${res.data.lahir}\n➸ ultah : ${res.data.ultah}\n➸  ️usia : ${res.data.usia}\n➸ zodiak : ${res.data.zodiak} ️`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes("!say")){
  const teks = text.replace(/!say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes("!ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/yta?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!ytmp4")){
const teks = text.replace(/!ytmp4 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah\n\nJudul: ${res.data.title}\n\nUkuran video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!twt")){
const teks = text.replace(/!twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Berhasil$ silahkan klik link di bawah untuk mendownload hasilnya$\nKlik link dibawah\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!tts")){
const teks = text.replace(/!tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    conn.sendMessage(id, gtts ,MessageType.text);
}
if (text.includes("!tiktok")) {
const tictoc = text.replace(/!tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
	 conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
     let titoe = `Berhasil$$$ Silahkan klik link dibawah ini untuk mendownload hasilnya$ \nKlik link dibawah\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya.\n\nJudul: ${res.data.title}\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!instagram")){
const teks = text.replace(/!ig /, "")
axios.get(`https://st4rz.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya.\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!Wiki")){
const teks = text.replace(/!Wiki /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/quotesnime/random=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!wiki")){
const teks = text.replace(/!wiki /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!sholat")){
  const teks = text.replace(/!sholat /, "")
  axios.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\nImsyak : ${res.data.Imsyak}\nSubuh : ${res.data.Subuh} \nDzuhur : ${res.data.Dzuhur}\nAshar : ${res.data.Ashar} \nMaghrib : ${res.data.Maghrib}\nIsya : ${res.data.Isya} \nTengah malam : ${res.data.Dhuha} `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
else if (text == '!quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!sim")){
const aris = text.replace(/!simi /, "")
axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${aris}`).then((res) => {
conn.sendMessage(id, '*BAKAA* perintah ini tidak terrdaftar di *menu* ketikkan !help untuk menampilkan menu', MessageType.tex)
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes("!jadwaltv")){
const teks = text.replace(/!Wiki /, "")
axios.get(`https://api.haipbis.xyz/jadwaltvnow=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `Jam : ${jadwalNow.jam}\n\nJadwalTV : ${jadwalNow.jadwalTV}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!cuaca")){
const teks = text.replace(/!cuaca/, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/cuaca?q=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!daerah")){
const teks = text.replace(/!cuaca/, "")
axios.get(`https://mhankbarbar.herokuapp.com/daerah=${teks}`).then((res) => {
conn.sendMessage(id, `[ ❗ ] terjadi kesalahan pada saat proses di mulai`, MessageType.text)           
let hasil = `➸ Tempat : ${weather.result.tempat}`;
conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!urlweb")){
const teks = text.replace(/!cuaca/, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/url2image?url=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
let hasil = `➸ Tempat : ${weather.result.tempat}`;
conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!chord")){
const teks = text.replace(/!chord /, "")
axios.get(`https://alfians-api.herokuapp.com/api/chord?q=${teks}`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = `*Nih Cord Lagu Onii Chan~${teks} * \n\nCord: _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!wikien")){
const teks = text.replace(/!wikien /, "")                                                      
axios.get(`https://arugaz.herokuapp.com/api/wikien?q=${teks}`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *According to Wikipedia:* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!harinasional")){
  const teks = text.replace(/!harinasional /, "")
  axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  let hasil = `menurut tanggal ${teks} adalah\n\n *Tanggal* : _${res.data.tanggal}_ \n *Keterangan* : _${res.data.keterangan}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!puisi")){
const teks = text.replace(/!puisi1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)                                          
let hasil = ` *Nih Puisinya Onii chan~*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!puisi2")){                                                   
const teks = text.replace(/!puisi2 /, "")                                    
axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = ` *Nih Puisinya Onii chan~*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!puisi3")){
 var aris = text.replace(/ /, '')
axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
    let hasil = ` ➸ ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes("!cerpen")){
const teks = text.replace(/!cerpen /, "")                           
axios.get(`https://arugaz.herokuapp.com/api/cerpen`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)           
let hasil = ` *Nih cerpen Onii chan~*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);                      
})        
}      
if (text.includes("!cersex")){                             
const teks = text.replace(/!cersex /, "")                                                     
axios.get(`https://arugaz.herokuapp.com/api/cersex2`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih cersex Onii chan~*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!scall")){                      
const teks = text.replace(/!spamcall /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamcall?no=${teks}`).then((res) => {
conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)                                   
let hasil = ` *INFO SPAM CALL* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("bucin")){                                                     
const teks = text.replace(/!bucin /, "")
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
    let hasil = ` _${res.data.desc}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!infonime")){
const teks = text.replace(/!infoanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}`).then((res) => {              
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = ` *INFO ANIME ${teks} :* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!checkip"))
  { const aris = text.replace(/!checkip /, "")
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{
  let hasil = `➸ *City* : ${res.data.city}\n*Latitude* :.${res.data.latitude}\n*Longtitude* : ${res.data.longitude}\n*Region* :.${res.data.region_name}\n*Region Code* : ${res.data.region_code}\n*IP* :.${res.data.ip}\n*Type* : ${res.data.type}\n*Name* : ${res.data.name}\n*zip* :.${res.data.zip}\n*Geonime* : ${res.data.location.geoname_id}\n*Capital* :.${res.data.location.capital}\n*Calling* : ${res.data.location.calling_code}\n\n*Country Flag* :.${res.data.location.country_flag}\n\n*CountryFlagEmoji* :.${res.data.location.country_flag_emoji}`.
  conn.sendMessage(id, hasil, MessageType.text);
 })
 }
if (text.includes("!ssms")){
const teks = text.replace(/!spamsms /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${teks}&jum=20`).then((res) => {
conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO SPAM SMS 20 PESAN* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!indohot")){
const teks = text.replace(/!indohot /, "")
axios.get(`https://arugaz.herokuapp.com/api/indohot`).then((res) => {
conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Inget dosa* \n\n *Judul* _${res.data.result.judul}_ \n\n *Status* _${res.data.result.genre}_ \n\n *Durasi* _${res.data.result.durasi}_ \n\n *Link Bosq* _${res.data.result.url}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!filmanime")){
const teks = text.replace(/!filmanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${teks}`).then((res) => {
conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = ` *Film Anime ${teks} :* \n\n *Judul* _${res.data.result.title}_ \n\n *Rating* _${res.data.result.rating}_ \n\n *Info* _${res.data.result.sinopsis}_ \n\n *Link Video* _${res.data.result.video}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!bitly")){
const teks = text.replace(/!bitly /, "")
axios.get(`https://api.haipbis.xyz/bitly?url=${teks}`).then((res) => {        
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `Nih Onii chan \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '#okaaplaa'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#ingvjg'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '$doakK'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#somzkzE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#DkznzkzI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#iozkz'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '!foto'){
conn.sendMessage(id, 'kirim !foto cewek/cowok\n\nContoh: !foto cewek' ,MessageType.text);
}
else if (text == '!stickergif'){
conn.sendMessage(id, '[ ❗ ] kirim video max 10s tidak boleh lebih!!' ,MessageType.text)
}
else if (text == '!hentai'){
conn.sendMessage(id, 'Gomennasai *Onii-chan* Lagi error 😞' ,MessageType.text)
}
else if (text == '!brainly'){
conn.sendMessage(id, '*BAKAA!!* Masukan kata kunci !brainly Contoh: !brainly apa itu matahari' ,MessageType.text)
}
else if (text == '!sticker'){
conn.sendMessage(id, '*BAKAA!!* masukan gambar dengan hastag !sticker' ,MessageType.text)
}
else if (text == '!menu'){
conn.sendMessage(id, '*BAKAA!!* Ulangi dengan perrintah *!help* ' ,MessageType.text)
}
else if (text == '!'){
conn.sendMessage(id, '*BAKAA!!* Masukan perintah *!help* ' ,MessageType.text)
}
else if (text == '!zodiak'){
conn.sendMessage(id, '*BAKAA!!* contoh: !zodiak scorpio ' ,MessageType.text)
}
else if (text == '#help'){
conn.sendMessage(id, '*BAKAA!!* Ulangi dengan perintah *!help* ' ,MessageType.text)
}
else if (text == '!stiker'){
conn.sendMessage(id, '*BAKAA!!* masukan gambar dengan hastag !sticker' ,MessageType.text)
}
else if (text == '!zodiak Aries'){
conn.sendMessage(id, '*zodiak Aries* Aries: 21 Maret - 20 April Pemilik zodiak Aries merupakan sosok yang pemberani dan memiliki jiwa petualang yang besar. Mereka adalah orang yang kreatif, agresif, dan berani berinisiatif untuk melakukan perubahan. Selain itu, sifat dan karakter zodiak Aries juga pantang menyerah, enerjik, pandai beradaptasi, serta cepat belajar. Namun, zodiak berlambang domba jantan ini memiliki sifat keras kepala, ambisius, dan kerap mengambil risiko tanpa berpikir panjang. ' ,MessageType.text)
}
else if (text == '!zodiak Taurus'){
conn.sendMessage(id, '*zodiak Taurus* Taurus: 21 April - 20 Mei Nalurimu sedang bekerja keras hari ini dan kamu harus mempercayai mereka dan melakukan apa yang mereka katakan. Meskipun semua orang di sekitarmu tidak setuju dan mengikuti jalan yang berbeda, kamu harus tetap berpegang pada jalanmu sendiri. Ini mungkin akan menjadi keputusan yang sulit untuk dibuat, tetapi kamu akan segera menuai hasilnya.' ,MessageType.text)
}
else if (text == '!zodiak Gemini'){
conn.sendMessage(id, '*zodiak Gemini* Gemini: 21 Mei - 20 Juni Kamu tidak meluangkan waktu untuk menyelesaikan masalah sepele. Hari ini mereka telah menumpuk untuk tampil besar. Hari ini kamu merasa dirimu terjerat. Masalahnya menjadi rumit dan kamu tidak tahu harus mulai dari mana. Dianjurkan untuk berbicara tatap muka. Di penghujung hari, mungkin kamu akan merasa nyaman berada di dekat pasangan.' ,MessageType.text)
}
else if (text == '!zodiak Cancer'){
conn.sendMessage(id, '*zodiak Cancer* Cancer: 21 Juni - 20 Juli Perdebatan kecil cenderung muncul sepanjang hari. Penting bagi Anda untuk mengabaikan masalah kecil hari ini. Jika tidak, Anda hanya akan menghancurkan kedamaian pikiran Anda sendiri. Cobalah untuk berbagi masalah Anda dengan seseorang karena ini bisa sangat membantu dalam meningkatkan mood Anda. Merencanakan aktivitas sendiri bisa menjanjikan hari ini.' ,MessageType.text)
}
else if (text == '!zodiak Leo'){
conn.sendMessage(id, '*zodiak Leo* Leo: 21 Juli - 21 Agustus sangat pendendam, mereka tidak akan pernah melupakan kejadian bersejarah yang paling pahit yang telah mereka terima, mereka tidak bisa berbasa-basi kepada orang-orang yang telah menyakiti mereka, jika mereka sudah tidak suka dengan seseorang, mereka akan menunjukannya, tetapi berbanding terbalik kepada pasangannya mereka sangat pemaaf tetapi untuk orang lain dia sangat pendendam.' ,MessageType.text)
}
else if (text == '!zodiak Virgo'){
conn.sendMessage(id, '*zodiak Virgo* Virgo: 22 Agustus - 22 Pada dasarnya orang dengan karakter zodiak Virgo adalah orang yang cenderung pendiam. Meski demikian sikap dewasa dan diplomatis yang tinggi membuat mereka mudah dalam menyesuaikan lingkungan pertemanan. Tidak sulit bagi mereka untuk mencari teman baru di lingkungannya.' ,MessageType.text)
}
else if (text == '!zodiak Libra'){
conn.sendMessage(id, '*zodiak libra* Libra: 23 September - 22 Oktober dikenal sebagai sosok yang dapat bekerja sama, diplomatis, ramah, berpikiran adil, dan memiliki jiwa sosial yang tinggi. Mereka juga menyukai kelembutan, berbagi dengan orang lain, dan berjalan-jalan ke luar rumah. Sosok yang lahir dengan zodiak ini sangat tidak menyukai kekerasan, ketidakadilan, dan suara yang bising.' ,MessageType.text)
}
else if (text == '!zodiak Scorpio'){
conn.sendMessage(id, '*zodiak Scorpio* Scorpio: 23 Oktober - 22 November sendiri juga dipengaruhi oleh elemen air yang membuat mereka tampak terlihat tenang namun juga elemen ini mempengaruhi tindakan dan dorongan emosi yang kuat dari pribadi pemilik zodiak scorpio sendiri. Terkadang mereka cenderung impulsif dan tidak mampu mengendalikan luapan perasaannya sendiri. Bagi scorpio, emosi harus diekspresikan untuk menikmati setiap moment yang terjadi saat itu juga. Namun uniknya mereka mewujudkan emosi tersebut dengan cara yang berbeda dari pemilik zodiak lainnya.' ,MessageType.text)
}
else if (text == '!zodiak Sagittarius'){
conn.sendMessage(id, '*zodiak Sagitarius* Sagitarius: 23 November - 20 Desember terkenal berjiwa petualang, cerdas, serta memiliki pengetahuan yang luas. Mereka merupakan sosok yang percaya diri, optimis, dan selalu berpikir positif. Pemilik zodiak Sagitarius pada umumnya selalu jujur, terus terang, pintar membawa diri, dan menjadi sosok inspirasi bagi orang lain. Namun, karakter dan sifat zodiak Sagitarius yang terlalu berterus terang dan percaya diri berlebihan kadang membuat mereka tersandung masalah.berjiwa Petualang, Begini Karakter dan Sifat Zodiak Sagitarius ' ,MessageType.text)
}
else if (text == '!zodiak Capricorn'){
conn.sendMessage(id, '*zodiak Capricon* Capricorn: 21 Desember - 19 Januari sosok yang ambisius. Namun, perlu diketahui bahwa ambisius dalam konteks ini tidak sepenuhnya bersifat negatif. Capricon sangat tahu apa yang mereka inginkan dan apa yang mereka tuju, sehingga ketika mereka memiliki suatu tujuan yang ingin dicapai, maka mereka tidak akan pernah berhenti untuk berusaha.Selain itu, sifat disiplin dan bertanggung jawab juga menjadi salah satu kelebihan dari Capricon.Mereka juga dikenal sebagai sosok yang dewasa, terutama dalam menyikapi permasalahan yang tengah dihadapi. Karena hal itulah, mereka sangat bijaksana dan setia kawan. Kedua karakter yang dimiliki tersebut menjadikan zodiak Capricon sangat cocok untuk dijadikan sebagai sahabat dan tempat untuk meminta saran.Orang yang lahir dalam naungan zodiak Capricon lebih pintar dalam mengatur keuangan dan berhati-hati dalam mengambil keputusan, dan karena hal itu pula mereka juga cenderung memiliki hidup yang lebih stabil. ' ,MessageType.text)
}
else if (text == '!zodiak Aquarius'){
conn.sendMessage(id, '*zodiak Aquarius* Aquarius: 20 Januari - 18 Februari Pemilik zodiak kesebelas ini kebanyakan memiliki sifat pemalu dan terkesan pendiam, tapi mereka juga bisa sangat energik dan agresif. Mereka juga termasuk orang pemikir serta mampu melihat jauh ke depan sekaligus dari kedua sisi permasalahan tanpa prasangka. Kemampuan itu cenderung membuat mereka mudah menyelesaikan masalah.Dengan sifat dan karakter zodiak Aquarius yang visioner tersebut, dia mampu memahami masa depan dan tahu persis apa yang ingin dilakukan lima atau sepuluh tahun ke depan.Sementara kelemahan mereka yakni sangat temperamental, emosional, sulit diprediksi, keras kepala, dan lebih suka menyendiri yang cenderung memisahkan diri dengan orang lain.Tak heran bila mereka sangat individualistis dan sulit berkelompok. Aquarius memiliki kebutuhan untuk menyendiri dan menjauh dari segalanya. Hal ini dianggap berguna untuk membantu memulihkan kekuatannya' ,MessageType.text)
}
else if (text == '!zodiak Pisces'){
conn.sendMessage(id, '*zodiak Pisces* Pisces: 19 Februari - 20 Maret rela berkorban untuk membantu orang lain semampu mereka. Pisces mau melakukan yang terbaik untuk membantu siapa pun dengan cara apa pun yang dia bisa. Biasanya, Pisces akan mendengarkan dulu yang dikatakan orang lain sebelum dia mengungkapkan pendapatnya. Hanya orang yang tulus hatinya yang mampu berempati. Pisces akan berdiri di samping teman-temannya yang membutuhkan bantuannya dan menyelami pikiran dan hati mereka. Pisces adalah pendengar dan pengamat yang sangat baik yang memiliki pikiran intuitif untuk meramalkan atau memprediksi apa yang akan terjadi dalam waktu dekat.Intuisi akan menjadi suara batin bagi Pisces yang membantunya mencari petunjuk di sekitar orang lain dan menggunakan informasi yang dikumpulkan untuk membuat perkiraan perkiraan.' ,MessageType.text)
}
else if (text == '!nama'){
conn.sendMessage(id, '*BAKAA!!* contoh: !nama Rendy' ,MessageType.text)
}
else if (text == '!pasangan'){
conn.sendMessage(id, '*BAKAA!!* contoh: !pasangan Rendy & MR.057a' ,MessageType.text)
}
else if (text == '#menu'){
conn.sendMessage(id, '*BAKAA!!* Ulangi dengan perintah *!help* ' ,MessageType.text)
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!katabijak')
      {

         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!fakta')
      {
         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')	
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }
   }
   if (messageType === MessageType.text)
 {
    let is = m.message.conversation.toLocaleLowerCase()

    if (is == '!pantuncinta')
    {
       fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
          .then(res => res.text())
          .then(body =>
          {
             let tod = body.split("\n");
             let pjr = tod[Math.floor(Math.random() * tod.length)];
             let pantun = pjr.replace(/pjrx-line/g, "\n");
             conn.sendMessage(id, pantun, MessageType.text)
          });
    }
 }
if (text.includes('!waifu')){                                                                        var aris = text.replace(/!waifu /, '')
    axios.get('https://st4rz.herokuapp.com/api/waifu')
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] WAIT SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
 if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!pantun')
      {
         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }
   }
 if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!daerah')
      {
          fetch('https://mhankbarbar.herokuapp.com/daerah')
          conn.sendMessage(id, `[ ❗ ] terjadi kesalahan pada saat proses di mulai`, MessageType.text)
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");                                                    
                   conn.sendMessage(id, pantun, MessageType.text)
            });
      }
   }
   if (text.includes("!covidindo"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`❣covid -indonesia❣\n\nPositif ==> ${positif} \nSembuh ==> ${sembuh} \nMeninggal ==> ${meninggal}\nDirawat ==> ${dirawat}`, MessageType.text);
}
   if (text.includes("!quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   if (text.includes("!quotesnime"))
   {
      var url = 'https://mhankbarbar.herokuapp.com/api/quotesnime/random'
      conn.sendMessage(id, '[ ❗ ] terjadi kesalahan pada saat proses di mulai', MessageType.text)
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();
            conn.sendMessage(
               id,
               `
_${kata}_
        
    
<------>*~${author}*
         `, MessageType.text^M
            );

         });
   }
   else if (text.includes("!nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      ❣Arti dari namamu adalah❣️


         Nama _*${nama}*_ ${h}


`,
 MessageType.text);
  });
  }
  else if (text.includes("!pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `



 *❣Kecocokan berdasarkan nama❣*


 ${d}



    `, MessageType.text);
  });
  }
   if (text.includes("!foto cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
            conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("!foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("!animeimg"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
    conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
if (messageType === MessageType.text)
   {
 let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!motivasi')
      {
         fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
       });
      }
   }
if (text.includes("!lirik")){
    const teks = text.split("!lirik")[1]
    axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
         conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
        let hasil = `❣️ *lirik lagu* ❣️${teks} \n\n\n ${res.data.result.lirik}`
    conn.sendMessage(id, hasil, MessageType.text)
    })
}
if (text.includes("!alay")){
    const alay = text.split("!alay")[1]
    axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
	{ let hasil = `${res.data.text}`
	conn.sendMessage(id, hasil, MessageType.text)
    })
}
if (text.includes("!chord")){
    const teks = text.split("!chord")[1]
    axios.get(`https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=${teks}`).then ((res) => {
         conn.sendMessage(id, '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar', MessageType.tex)
        let hasil = `❣ ️ *chord music* ❣ ️${teks} \n\n\n ${res.data.result.lirik}`
    conn.sendMessage(id, hasil, MessageType.text)
    })
}

// LIST CVPULSA
client.on('message', msg => {
  if (msg.body == 'cvpulsa') {
      msg.reply(`
╔══✪〘 MENU CV PULSA 〙✪══
║
╠➥ *RATE CV PULSA*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 CV PULSA 〙✪══
║Untuk layanan convert pulsa
║saat ini hanya melayani dari 
║pulsa Telkomsel.
║rate saat ini 700
║Untuk menghitungnya:
║pulsa X 700 = saldo yg di dapat
║Contoh:
║100 X 700 = 70.000
║Jadi jika ingin mengconvert
║pulsa 100k berarti 
║mendapatkan saldo 
║sebesar 70k
║
║jika sudah paham dan ingin 
║melanjutkan, silahkan transfer 
║pulsanya ke nomor 
║081348421097
║Jangan lupa kirim bukti 
║transfernya 
║ya kak. ~Mr.057
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
//LIST PUBG

client.on('message', msg => {
  if (msg.body == 'listpubg') {
      msg.reply(`
╔══✪〘 MENU UC PUBG 〙✪══
║
╠➥ *UC PUBG REG INDO*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 UC PUBG INDO A 〙✪══
║ 
╠➥ *FAST RESPON*
╠➥ 50 uc= 10.000
╠➥ 125 uc = 26.500
╠➥ 100 uc = 30.000
╠➥ 150 uc = 31.500
╠➥ 250 uc = 49.000
╠➥ 500 uc = 98.000
╠➥ 700 uc = 140.000
╠➥ 1250 uc = 253.000
╠➥ 2500 uc = 505.000
║
╠══✪〘 UC PUBG INDO B 〙✪══
║
╠➥ *LOW RESPON*
╠➥50 uc = 9.000
╠➥53 uc = 9.500
╠➥100 uc = 20.000
╠➥150 uc = 27.000
╠➥156 uc = 28.000
╠➥250 uc = 44.500
╠➥263 uc = 45.500
╠➥500 uc = 90.000
╠➥525 uc = 91.000
╠➥600 uc = 105.000
╠➥700 uc = 125.000
╠➥800 uc = 140.000
╠➥1000 uc = 172.000
╠➥1250 uc = 222.000
╠➥1350 uc = 235.000
╠➥1375 uc = 236.000
╠➥1500 uc = 262.000
╠➥1800 uc = 305.000
╠➥2000 uc = 340.000
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
//LIST FF
client.on('message', msg => {
  if (msg.body == 'listff') {
      msg.reply(`
╔══✪〘 MENU DM FF 〙✪══
║
╠➥ *DIAMOND FF*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 DIAMOND FF 〙✪══
║ 
╠➥ 5 Dm = 850
╠➥ 20 Dm = 2.770
╠➥ 50 Dm = 6.648
╠➥ 70 Dm = 9.141
╠➥ 100 Dm = 13.296
╠➥ 140 Dm = 18.282
╠➥ 150 Dm = 19.944
╠➥ 210 Dm = 27.423
╠➥ 355 Dm = 45.705
╠➥ 425 Dm = 54.846
╠➥ 500 Dm = 64.818
╠➥ 720 Dm = 91.410
╠➥ 860 Dm = 109.692
╠➥ 1000 Dm = 127.974
╠➥ 1075 Dm = 137.115
╠➥ 1440 Dm = 182.820
╠➥ 2000 Dm = 249.300
╠➥ 2720 Dm = 340.710
╠➥ 4000 Dm = 498.600
║
╠➥M.M = 27.700
╠➥M.B = 110.800
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
// LIST MENU
client.on('message', msg => {
  if (msg.body == 'menu') {
      msg.reply(`
╔══✪〘 INFORMATION 〙✪══  
║
╠➥ MENU LAYANAN MR.057
╠➥ Codder Bot : irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 MENU MR.057 STORE 〙✪══
║
╠➥ *JASA REKBER/PULBER*
║
╠═══✪〘MENU COMMAND〙✪═
║
╠➥ *CONVERT PULSA : cvpulsa*
╠➥ *DM FREE FIRE  : listff*
╠➥ *DM ML         : listml*
╠➥ *UC PUBG       : listpubg*
╠➥ *PULSA TF TSEL : pulsatf*
╠➥ *PULSA ALL OPR : allpulsa*
╠➥ *QUOTA         : paketdata*
╠➥ *GARENA SHELL  : listshell*
╠➥ *CV EMONEY     : cvemoney*
╠➥ *PULSA LISTRIK : listrik*
╠➥ *CV PAYPAL     : cvpaypal* 
║
╚═〘 MR.057 STORE 〙`);
  }
});
//LIST PULSA TF
client.on('message', msg => {
  if (msg.body == 'pulsatf') {
      msg.reply(`
╔══✪〘 MENU PULSA TF 〙✪══
║
╠➥ *PULSA TF TELKOM*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 PULSA TF TSEL 〙✪══
║ 
╠➥ 5.000 Harga= 6.000
╠➥ 10.000 harga= 11.000
╠➥ 15.000 harga= 15.000
╠➥ 20.000 harga= 19.000
╠➥ 25.000 harga= 23.500
╠➥ 30.000 harga= 28.000
╠➥ 35.000 harga =33.000
╠➥ 40.000 harga =36.500
╠➥ 45.000 harga= 42.000
╠➥ 50.000 harga= 44.000
╠➥ 55.000 harga= 50.000
╠➥ 60.000 harga= 53.000
╠➥ 65.000 harga= 58.000
╠➥ 70.000 harga= 62.000
╠➥ 75.000 harga= 66.000
╠➥ 80.000 harga= 70.500
╠➥ 85.000 harga= 75.000
╠➥ 90.000 harga= 80.000
╠➥ 95.000 harga= 83.500
╠➥ 100.000 harga= 87.000
╠➥ 110.000 harga= 97.000
╠➥ 120.000 harga= 105.000
╠➥ 130.000 harga= 115.000
╠➥ 140.000 harga= 122.000
╠➥ 150.000 harga= 133.000
╠➥ 200.000 harga= 172.000
╠➥ 250.000 harga= 225.000
╠➥ 300.000 harga= 262.000
╠➥ 400.000 harga= 350.000
╠➥ 500.000 harga= 435.000
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
//list PULSA ALL OPERATOR
client.on('message', msg => {
  if (msg.body == 'allpulsa') {
      msg.reply(`
🔰 --[ *PULSA ALL OPERATOR* ]-- 🔰
        
Hi,👋️
INI MENU PULSA ALL OPERATOR ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : ISI ULANG ALL OPERATOR* 
     
Telkomsel M-Kios
Indosat isi ulang
Axis isi ulang
Tri isi ulang
Smartfrend isi ulang
Xl isi ulang
Byu isi ulang

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
//LIST PAKET DATA / QUOTA
client.on('message', msg => {
  if (msg.body == 'paketdata') {
      msg.reply(`
╔══✪〘 MENU QUOTA INTERNET 〙✪══
║
╠➥ *QUOTA INTERNET*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 QUOTA INTERNET 〙✪══
║ 
╠➥ Quota telkomsel = qtsel
╠➥ Quota indosat = qindo
╠➥ Quota axis = qaxis
╠➥ Quota tri = qtri
╠➥ Quota smartfrend = qsmart
╠➥ Quota xl = qxl
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
//QTELKOMSEL
client.on('message', msg => {
  if (msg.body == 'qtsel') {
      msg.reply(`
🔰 --[ *MENU QUOTA TELKOMSEL* ]-- 🔰
        
Hi,👋️ 
INI MENU QUOTA TELKOMSEL ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : LIST QUOTA TELKOMSEL* 
     
Telkomsel Data Flash = t1
Telkomsel Semua Jaringan = t2
Telkomsel Data Mini = t3 
Telkomsel GamesMax = t4
Telkomsel Data Bulk = t5 
Telkomsel Paket Combo = t6 
Gift Quota tsel super murah = t7

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
//QINDOSAT
client.on('message', msg => {
  if (msg.body == 'qindo') {
      msg.reply(`
🔰 --[ *MENU QUOTA INDOSAT* ]-- 🔰
        
Hi,👋️ 
INI MENU QUOTA INDOSAT ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : LIST QUOTA INDOSAT* 
     
Gift data = isat1
Indosat Data = isat2
Indosat Yellow = isat3
Indosat Internet Unlimited = isat4
Indosat Freedom Internet = isat5
ISAT FREEDOM COMBO = isat6
Indosat Freedom Combo = isat7
ISAT FREEDOM UNLIMITED = isat8
ISAT FREEDOM INTERNET = isat9
Indosat Paket Ekstra = isat10
Indosat Freedom = isat11

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
//QAXIS
client.on('message', msg => {
  if (msg.body == 'qaxis') {
      msg.reply(`
🔰 --[ *MENU QUOTA AXIS* ]-- 🔰
        
Hi,👋️ 
INI MENU QUOTA AXIS ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : LIST QUOTA AXIS* 
     
Axis bronet = axis1
Axis Owsem = axis2

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
//QTRI
client.on('message', msg => {
  if (msg.body == 'qtri') {
      msg.reply(`
🔰 --[ *MENU QUOTA TRI* ]-- 🔰
        
Hi,👋️ 
INI MENU QUOTA TRI ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : LIST QUOTA TRI* 
     
Tri data = tri1
Three Mix Small = tri2
Three Mini = tri3
Three Always On = tri4
Three Mix Combo = tri5
Three Mix Super = tri6
Three AlwaysOn Unlimited = tri7

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
//QSMART
client.on('message', msg => {
  if (msg.body == 'qsmart') {
      msg.reply(`
🔰 --[ *MENU QUOTA SMARTFREN* ]-- 🔰
        
Hi,👋️ 
INI MENU QUOTA SMARTFREN ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : LIST QUOTA SMARTFREN* 
     
Smart Internet
Smart Data

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
//QXL
client.on('message', msg => {
  if (msg.body == 'qxl') {
      msg.reply(`
🔰 --[ *MENU QUOTA XL* ]-- 🔰
        
Hi,👋️ 
INI MENU QUOTA XL ! ✨
      
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
      
*♻  : LIST QUOTA XL* 
     
XL Combo LITE = xl1
XL Hotrod = xl2
XL Xtra Combo = xl3
XL Xtra Combo VIP = xl4

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
        
🔰 --[ *MR.057 BOT* ]-- 🔰`);
  }
});
// list GSHELL
client.on('message', msg => {
  if (msg.body == 'listshell') {
      msg.reply(`
╔══✪〘 MENU GARENA SHELL 〙✪══
║
╠➥ *GARENA SHELL*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 GARENA SHELL 〙✪══
║ 
╠➥ 33 gs = 9.500
╠➥ 66 gs = 19.000
╠➥ 165 gs = 46.000
╠➥ 330 gs = 91.500
║
╠➥ 3.300 gs = 911.000
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
// LIST DIAMOND ML
client.on('message', msg => {
  if (msg.body == 'listml') {
      msg.reply(`
╔══✪〘 MENU DM ML 〙✪══
║
╠➥ *DIAMOND ML*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 DIAMOND ML 〙✪══
║ 
╠➥ 3💎 = 1.800
╠➥ 12💎 = 3.800
╠➥ 15💎 = kosong
╠➥ 28💎 = 8.000
╠➥ 30💎 = kosong
╠➥ 33💎 = kosong
╠➥ 36💎 = 9.900
╠➥ 45💎 = kosong
╠➥ 59💎 = 15.700
╠➥ 60💎 = kosong
╠➥ 74💎 = 19.700
╠➥ 85💎 = 22.700
╠➥ 170💎 = 45.000
╠➥ 167💎 = kosong
╠➥ 185💎 = 49.900
╠➥ 222💎 = 59.900
╠➥ 296💎 = 80.000
╠➥ 370💎 = 100.000
╠➥ 568💎 = 146.000
╠➥ 702💎 = kosong
╠➥ 875💎 = 223.000
╠➥ 1159💎 = 293.000
╠➥ 1830💎 = 475.000
╠➥ 2010 💎 = 486.000
╠➥ 3638💎 = kosong
╠➥ 4830💎 = 1.167.000
╠➥ 6050💎 = 1.487.000
║
╚═〘 *MR.057 STORE* 〙`);
  }
});
// MENU PE PA PE PA
client.on('message', msg => {
  if (msg.body == 'p') {
      msg.reply(`
      Pe pa pe pa

      Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
  }
});
// PE PA PE PA 2
client.on('message', msg => {
  if (msg.body == 'P') {
      msg.reply(`
      Pe pa pe pa

      Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
  }
});
// asaalamualaikum
client.on('message', msg => {
  if (msg.body == 'assalamualaikum') {
      msg.reply(`
      waalaikumsalam

      Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
  }
});
// Assalamualaikum
client.on('message', msg => {
  if (msg.body == 'Assalamualaikum') {
      msg.reply(`
      Waalaikumsalam

      Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
  }
});

//Tolonglah bro jangan di ubah ubah Aris187 ID


})