////////AQUÍ EMPIEZA MI BOT///////////
const Discord = require("discord.js");
const client = new Discord.Client();
//////////PRESENCIA DEL BOT/////////
function presence(){
  client.user.setPresence({
      status:"online",
      activity: {
        name: "Ayudo a los ،ৎ Café Death☆’ 𓄼",
        type: "PLAYING"
      }
  })
}
///////AQUÍ PARA QUE EL BOT ESTE LISTO//////
client.on("ready", () => {
    console.log("Lista para la guía!");
    presence();
 });
 ////////COMANDOS//////
 client.on("message", (message) => {
   if(message.content.startsWith("-publicidad")) {
     message.channel.send("Hola, ¿cómo están? ya en el canal `#🧁blog-del-chat ` subímos una noticia de personalización, ve a verla.");

   }
  ///////COMANDO WIKI////////
     // Comenzamos creamos el embed - RANDOM PARA WIKI
// Nota: Si usas la V12 reemplaza RichEmbed por MessageEmbed
if(message.content.startsWith("mwiki")) {
let wiki = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription("[¡Pulsa acá para ir a un artículo random de Wikipedia!](http://es.wikipedia.org/wiki/Special:Random)")
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/1024px-Wikipedia_svg_logo.svg.png")
/////////ANUNCIOS///////
message.channel.send(wiki)
   }
   if(message.content.startsWith("-anuncio1")) {
    message.channel.send("Hola a todos los de acá, vengo a informales sobre que en el canal de `⌦curiosidades` \n Se subió **LA MALDICIÓN DE LOS MÚSICOS** :skull_crossbones: ");
  }
  ////PODER VER LA FOTO DE PERFIL DE TODOS, TANTO COMO LA SUYA Y LA DE OTROS///////

  ///////MENSAJE EMBED PARA BLOG DE CHAT/////////

  if(message.content.startsWith("-mensajeuno")) {
    const mensajeuno = new Discord.MessageEmbed()
    .setTitle(' . .╭──࿎࿎─ ︿︿ 🥄 ︿︿︿︿ .   .   .   .   .   .\n🍵**NUEVA ACTUALIZACIÓN**🍵\n.╰───  ⃟ੂ۪͙۫ׄꦿ๑࿐ ︶︶︶︶︶︶ ♡⃕ ⌇. . . ')
    .setColor(0xFEDCD2)
    .setDescription(' . . . . . . ┊⿻🥧Hola, aquí subí la nueva **PERSONALIZACIÓN** de **DEATH NOTE** para móvil, si quieres los iconos y las imagénes aquí pasaré el blog:\nhttps://mariadrutc.blogspot.com/2021/01/bienvenidos-yo-como-siempre-dandoles.html <@765652810682859590>\n. . . . . . ╰──༄ ‧₊˚───── ─── ❨ 🍮 ❩ ')
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage('https://i.ibb.co/7WvN54S/personalizaci-n-death-note.png');
    message.channel.send(mensajeuno);
  }
    ///////MENSAJE EMBED CURIOSIDADES/////////

    if(message.content.startsWith("-imagen")) {
      const curiosidades = new Discord.MessageEmbed()
      .setColor(0x7afff6)
      .setImage('https://i.ibb.co/brt9N9V/verify.gif');
      message.channel.send(curiosidades);
    }
        ///////MENSAJE EMBED CURIOSIDADES/////////

        if(message.content.startsWith("-verify")) {
          const curiosidades = new Discord.MessageEmbed()
          .setColor(0xfffc33)
          .setDescription('˚｡ * <:deco3:829456712264056873> ╭ Para **verificarte** 	(.❛ ᴗ ❛.) <:deco3:829456712264056873> ˚₊﹆ \n <:deco1:829456655632433152> ┊ <:deco2:829456685734821974> escribe `bears` \n ๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ ')
          .setAuthor(client.user.username, client.user.avatarURL())
          message.channel.send(curiosidades);
        }
          ///////MENSAJE EMBED CURIOSIDADES/////////

    if(message.content.startsWith("-separador")) {
      const curiosidades = new Discord.MessageEmbed()
      .setColor(0x7afff6)
      .setImage('https://i.ibb.co/4M701vw/separador-maria-eee.png');
      message.channel.send(curiosidades);
    }
        /////// MESAJE EMBED PARA BIENVENIDAS///////////
        if(message.content.startsWith("-wlc")) {
          const curiosidades = new Discord.MessageEmbed()
          .setTitle(' . .╭──࿎࿎─ ︿︿ 🥄 ︿︿︿︿ .   .   .   .   .   .\n ⍝☕**Usuario:**☕\n. ⍝')
          .setColor(0xfdecd2)
          .setDescription(' . . . . . . ┊⿻🥧**¡WELCOME!\nGracias por unirtenos.\nRecuerda leer nuestras <#813804159434096678>\nSin más, tómate el siguiente sorbo.🎀\n. . . . . . ╰──༄ ‧₊˚───── ─── ❨ 🍮 ❩ ')
          .setAuthor(client.user.username, client.user.avatarURL())
          .setImage('https://i.ibb.co/RgvCGFp/welcomemejorcongif.gif');
          message.channel.send(curiosidades);

        }
   });

client.login("NzczNzM1OTI5NjU5NjU0MTY1.X6NjvA.Ukqs5-zlEY5er61Dp6eXD8REpNI");