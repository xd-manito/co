const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "n3";

const embed = new Discord.RichEmbed();

bot.on("ready", () => {
  console.log("estoy listo!");
  bot.user
    .setActivity("N3XT PLAYERS SERVER", { type: "WATCHING" })
    .catch(console.error);
});

bot.on("guildMemberAdd", member => {
  const canal = member.guild.channels.find(
    channel => channel.id === "717215232254279720"
  );
  const nuevomiembro = embed
    .setTitle("BIENVENID@")
    .addField(
      "Usuario",
      "<@" +
        member.id +
        "> Bienvenid@ al Servidor de Discord de N3XT PLAYERS, yo soy N3Assistant, el asistente para las dudas que tengas sobre N3XT PLAYERS, ¡disfruta!."
    )
    .setColor(0x2f3136)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
    )
    .setFooter(
      "N3Assistant",
      "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
    );
  canal.sendEmbed(nuevomiembro);
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    //clearN3
    case "clear":
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(
          "lo siento mucho, los administradores no me pertmiten ejecutar este comando por ti."
        );
      }
      if (!args[1])
        return message.reply(
          "por favor especifica la cantidad de mensajes que deseas borrar..."
        );
      message.channel.bulkDelete(args[1]);
      break;
    //fin clearN3

    //ayudaymásN3
    case "website":
      const n3xtplayers = embed
        .setTitle("N3XT PLAYERS")
        .setURL("https://n3xt-players.jimdofree.com")
        .addField(
          "Descripción",
          "Existen 2 mundos, uno real y el otro virtual. Mientras como humanos debemos dividirnos entre la realidad y lo virtual, nos olvidamos para qué fue creado el mundo virtual, para complementar el mundo real. N3 es un mundo virtual creado para experimentar el mundo real con los superpoderes del mundo virtual, N3XT PLAYERS."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3xtplayers);
      break;

    case "acerca":
      const n3acerca = embed
        .setTitle("ACERCA DE N3XT PLAYERS")
        .setURL("https://n3xt-players.jimdofree.com/aboutn3/")
        .addField(
          "Nosotros:",
          "Creamos un mundo de servicios donde tu privacidad, tu integridad y tu creatividad sea la prioridad. Donde tú y tu estilo lleguen a donde quieras, queremos transformar tu mundo real con el mundo virtual, N3XT PLAYERS."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717433046780870706/20200602_134219-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3acerca);
      break;

    case "ayuda":
      const n3ayuda = embed
        .setTitle("N3Ayuda")
        .setURL("https://n3xt-players.jimdofree.com/support")
        .addField(
          "Soporte Técnico",
          "Si tienes alguna duda de algún servicio de N3XT PLAYERS, ¡Encuentra tu respuesta en nuestra web o menciona a `@N3Team` en el chat para obtener ayuda más rápida!, N3XT PLAYERS."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717433046780870706/20200602_134219-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3ayuda);
      break;

    case "soporte":
      const n3soporte = embed
        .setTitle("N3Soporte")
        .setURL("https://n3xt-players.jimdofree.com/support")
        .addField(
          "Soporte Técnico",
          "Si tienes alguna duda de algún servicio de N3XT PLAYERS, ¡Encuentra tu respuesta en nuestra web o menciona a `@N3Team` en el chat para obtener ayuda más rápida!, N3XT PLAYERS."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717433046780870706/20200602_134219-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3soporte);
      break;
    //fin ayudaymásN3

    //assistantN3
    case "assistant":
      const n3assistant = embed
        .setTitle("N3Asistant")
        .addField(
          "Descripción",
          "Soy N3Assistant, tu asistente personal dentro de N3Browser y dentro de este servidor soy un asistente para las dudas que tengas sobre N3XT PLAYERS, N3Asistant."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3assistant);
      break;

    case "version":
      const n3version = embed
        .setTitle("N3Asistant")
        .addField("Fase:", "Alfa")
        .addField(
          "¿Qué significa esto?",
          "Significa que el servicio aún está en fase de desarrollo y que puede contener fallas e inestabilidades, éste satisface la mayoría de requisitos, pero no quita que no pueda presentar errores/fallas."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/698723286326050856/716482175574474783/Logopit_1590893053481.jpg"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3version);
      break;

    case "comandos":
      const n3comandos = embed
        .setTitle("N3Assistant en Discord")
        .addField(
          "Comandos de N3Assistant:",
          "`n3acerca`" +
            "\n`n3ads`" +
            "\n`n3assistant`" +
            "\n`n3ayuda` o `n3soporte`" +
            "\n`n3books`" +
            "\n`n3cloud`" +
            "\n`n3comandos`" +
            "\n`n3creators`" +
            "\n`n3creatorsjoin`" +
            "\n`n3emoticons`" +
            "\n`n3events`" +
            "\n`n3games`" +
            "\n`n3guidelines`" +
            "\n`n3id`" +
            "\n`n3instant`" +
            "\n`n3partners`" +
            "\n`n3playersapp` (N3Players App)" +
            "\n`n3tools`" +
            "\n`n3tornado`" +
            "\n`n3website`"
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3comandos);
      break;
    //fin assistantN3

    //aplicacionesN3
    case "instant":
      const n3instant = embed
        .setTitle("N3Instant")
        .setURL("https://n3xt-players.jimdofree.com/instant/")
        .addField(
          "Descripción",
          "Descubre la galería de música del ecosistema de N3Play y el contenido proveniente de los N3Creators. La música mueve fronteras y tenerla de forma gratuita al alcance de todos es un golazo. Pistas, álbumes, emisoras de radio locales, playlists, etc. todo en una sola aplicación, N3Instant."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://image.jimcdn.com/app/cms/image/transf/dimension=70x10000:format=png/path/s686fc98d1e8253e9/image/i33315752a0ccbd8d/version/1586118453/image.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3instant);
      break;

    case "cloud":
      const n3cloud = embed
        .setTitle("N3Cloud App")
        .setURL("https://n3xt-players.jimdofree.com/cloud")
        .addField(
          "Descripción",
          "Un lugar para todas las formas de contenidos y servicios de N3XT PLAYERS están en la nube. Con la aplicaciones de N3Cloud, podrás administrar tu ID de N3XT PLAYERS muy fácil y sin problemas. La comunicación entre tu y N3 en un solo lugar, y tenemos en cuenta que darte tu privacidad es nuestro principal requisito para servirte, N3Cloud."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717504864271335434/Logopit_1590900324133.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3cloud);
      break;
    case "music":
      const n3music = embed
        .setTitle("N3Music")
        .setURL("https://n3xt-players.jimdofree.com/music")
        .addField("Descripción", " .")
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3music);
      break;

    case "tv":
      const n3tv = embed
        .setTitle("N3TV")
        .setURL("https://n3xt-players.jimdofree.com/tv")
        .addField("Descripción", " .")
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3tv);
      break;

    case "books":
      const n3books = embed
        .setTitle("N3Books")
        .setURL("https://n3xt-players.jimdofree.com/books-1/")
        .addField(
          "Pasa la página de una forma MUY SMOOOTH",
          "Lee  el contenido proveniente de los creadores de libros de N3XT PLAYERS. Disfruta y pasa las página de una forma MUY SMOOOTH, puedes tener de forma gratuita al alcance de un pulgar todos nuestros libris. Pistas, álbumes, emisoras de radio locales, playlists, etc. todo en una sola aplicación, N3Books."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717504864808337438/Logopit_1590947500612.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3books);
      break;
    //fin aplicacionesN3

    //serviciosN3
    case "id":
      const n3id = embed
        .setTitle("N3XT PLAYERS ID")
        .setURL("https://n3xt-players.jimdofree.com/id/")
        .addField(
          "¿Qué puedo hacer con un ID de N3XT PLAYERS?",
          "Con tu ID de N3XT PLAYERS puedes acceder a todos los servicios de N3XT PLAYERS, N3ID."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://image.jimcdn.com/app/cms/image/transf/dimension=341x2048:format=png/path/s686fc98d1e8253e9/image/i6daf93205a3dded9/version/1589059906/image.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3id);
      break;

    case "creators":
      const n3creators = embed
        .setTitle("N3Creators")
        .setURL("https://n3xt-players.jimdofree.com/creators-1")
        .addField(
          "Descripción",
          "Durante años hemos diseñado la mejor forma de llegar al público y nos convertimos en una gran comunidad. Permitimos con toda emoción que sean parte de nuestro éxito compartido. Sabemos que los creadores son parte esencial de nuestro universo y es hora de darles aquellas herramientas para que ambos lleguemos al máximo, N3Creators."
        )
        .addField(
          "¿Quieres formar parte de N3Creators?",
          "Escribe `n3creatorsjoin` en el chat para formar parte."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/716757094262374470/Logopit_1590899762404.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3creators);
      break;

    case "creatorsjoin":
      const n3creatorsjoin = embed
        .setTitle("¡Únete a N3Creators!")
        .setURL("https://n3xt-players.jimdofree.com/creators-form") //cambiar el link cuando exista uno para ingresar
        .addField(
          "Descripción",
          "Sé tu propio jefe y llega a más de 30 millones de usuarios activos en todas nuestras aplicaciones de entretenimiento, información y herramientas creativas y empresariales. Administra tu presencia en N3Players, N3Creators."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/716757094262374470/Logopit_1590899762404.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3creatorsjoin);
      break;

    case "partners":
      const n3playpartners = embed
        .setTitle("N3XT PLAYERS PARTNERS")
        .setURL("https://n3xt-players.jimdofree.com/n3playpartners")
        .addField(
          "¿Qué es un Partner de N3XT PLAYERS?",
          "Los socios de N3XT PLAYERS Play son creadores de todo tipo de contenido, ya sean músicos, escritores, vloggers, desarrolladores de videojuegos, streamers, podcasters entre otros tipos de creadores que se comprometen a llevar contenido de calidad, exclusivo y de forma consecuente, N3Partners."
        )
        .addField(
          "Beneficios",
          "La monetización de su contenido. Contenido de marca (contenido que no necesita revisión de N3XT PLAYERS para subirse, debe cumplir con las políticas de N3), entre otras cosas."
        )
        .addField(
          "Anuncios, Suscripciones y más...",
          "Visita nuestra web para más información: https://n3xt-players.jimdofree.com/n3playpartners"
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://image.jimcdn.com/app/cms/image/transf/dimension=341x2048:format=png/path/s686fc98d1e8253e9/image/i6daf93205a3dded9/version/1589059906/image.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3playpartners);
      break;

    case "guidelines":
      const n3guidelines = embed
        .setTitle("¡Dile al público que tu gran creación está disponible aquí!")
        .setURL("https://n3xt-players.jimdofree.com/guidelines")
        .addField(
          "Los recursos de marca NO necesitan la aprobación de N3XT PLAYERS.",
          "El uso de la marca de N3XT PLAYERS o las marcas involucradas con las plataformas de éste no necesita ser aprobado por N3XT PLAYERS para aparecer en sus creaciones, sin embargo debe de seguir una serie de reglas que podrás crear tu para garantizar su lectura y aparición en la publicidad, redes sociales, sitios web... N3LineamientodeDisponiblidad."
        )
        .addField(
          "Beneficios",
          "Los socios de N3XT PLAYERS Play son creadores de todo tipo de contenido, ya sean músicos, escritores, vloggers, desarrolladores de videojuegos, streamers, podcasters entre otros tipos de creadores que se comprometen a llevar contenido de calidad, exclusivo y de forma consecuente."
        )
        .addField(
          "Anuncios, Suscripciones y más...",
          "Visita nuestra web para más información: https://n3xt-players.jimdofree.com/n3playpartners"
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://image.jimcdn.com/app/cms/image/transf/dimension=341x2048:format=png/path/s686fc98d1e8253e9/image/i6daf93205a3dded9/version/1589059906/image.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3guidelines);
      break;

    case "ads":
      const n3ads = embed
        .setTitle("N3XT PLAYERS ADS")
        .setURL("https://n3xt-players.jimdofree.com/ads")
        .addField(
          "Déjate ver a más de 60 millones de personas.",
          "Al publicar un anuncio pago se mostrará dentro de los servicios de N3Play, esto da la posibilidad a que los creadores de contenido puedan crear contenido y monetizarlo. Los usuarios pueden dar clicks o simples impresiones y permite a la gente llegar a tu producto."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3ads);
      break;

    case "events":
      const n3events = embed
        .setTitle("Eventos de N3XT PLAYERS")
        .setURL("https://n3xt-players.jimdofree.com/events") //link del conglomerado n3play
        .addField("Próximos eventos")
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3events);
      break;

    case "emoticons":
      const n3emoticons = embed
        .setTitle("Emoticones de N3XT PLAYERS")
        .setURL("https://n3xt-players.jimdofree.com/emoticons")
        .addField("MUY PRONTO", "<:LynzQUE:698050577485004881>")
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3emoticons);
      break;
    //fin serviciosN3

    //playersappN3
    case "playersapp":
      const n3playersapp = embed
        .setTitle("N3Players App")
        .setURL("https://n3xt-players.jimdofree.com/n3players")
        .addField(
          "Una sola aplicación te lleva a todo nuestro mundo.",
          "Usa las N3Apps para conectar con tus servicios más queridos como productivos de toda nuestra gama de aplicaciones, que disfrutarás en N3Players aplicación con un solo click gracias a su gran formato de canales que permiten usar estos servicios sin descargar nada."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3playersapp);
      break;

    case "store":
      const n3store = embed
        .setTitle("N3Store")
        .setURL("https://n3xt-players.jimdofree.com/store")
        .addField("Descripción", " .")
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3store);
      break;

    case "games":
      const n3games = embed
        .setTitle("N3Games")
        .setURL("https://n3xt-players.jimdofree.com/games")
        .addField(
          "Descripción",
          "Juega entre muchos juegos con tus amigos y disfruta de los juegos móviles más emblemáticos o los que más te interesan y disfruta de mucho más entre todos. Cada MB cuenta, todos los juegos en streamimg para ti, N3Games."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717504863105450025/Logopit_1590899551648.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3games);
      break;

    case "tools":
      const n3tools = embed
        .setTitle("N3Tools")
        .setURL("https://n3xt-players.jimdofree.com/tools-1/")
        .addField(
          "Descripción",
          "Crea tu propio contenido de imágenes, videos y audio para tener en tu dispositivo o compartir. Sé un desarrollador de software y sube tu aplicación a N3Store con un generador de proyectos oficial de Steelly basado en N3Ux. Crea documentos, presentaciones y hojas de cálculo, conecta con tu equipo y colabora en vivo. Todo esto y más en una sola aplicación, N3Tools."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717504863960956958/Logopit_1590899898579.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3tools);
      break;
    //playersappN3

    case "tornado":
      message.react("🌪️");
      const n3tornadoazul = embed
        .setTitle("Tornado Azul 🌪️")
        .setURL("https://n3xt-players.jimdofree.com/n3tornadoazul")
        .addField(
          "¿Quién es Tornado Azul?",
          "Tornado Azul es el creador y desarrollador de N3XT PLAYERS, es una persona la cual lucha por lo que quiere, quiere hacer un conjunto de servicios para ti, donde tu privacidad sea el requisito más importante. Estamos aquí por él, nuestro líder, el mejor, N3TornadoAzul."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/716758879676923915/717786697018114209/4nM-FIAX_400x400.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3tornadoazul);
      break;

    case "S001MN300":
            if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(
          "lo siento mucho, los administradores no me pertmiten ejecutar este comando por ti."
        );
      }
      const S001MN300 = embed
        .setTitle("N3XT PLAYERS")
        .setURL("https://n3xt-players.jimdofree.com")
        .addField(
          "¡Estamos en todas tus redes sociales favoritas!",
          "Puedes seguirnos presionando alguno de los siguientes enlaces:"
        )
        .addField("Twitter:", "https://twitter.com/n3players")
        .addField(
          "YouTube:",
          "https://www.youtube.com/channel/UCaImf8jINxWnxOa4foiiI6A?view_as=subscriber"
        )
        .addField("Instagram:", "https://instagram.com/n3players")
        .addField("Facebook:", "https://facebook.com/n3playersok")
        .addField(
          "Tumblr:",
          "https://www.tumblr.com/blog/n3players/blog/n3players"
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(S001MN300);
      break;

    case "S002MN300":
            if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(
          "lo siento mucho, los administradores no me pertmiten ejecutar este comando por ti."
        );
      }
      const S002MN300 = embed
        .setTitle("Políticas de privacidad de N3XT PLAYERS")
        .setURL("https://n3xt-players.jimdofree.com/terms")
        .addField(
          "La nueva era de experiencias acaba de comenzar. ¡Nosotros comenzamos contigo!",
          "Trabajamos en traerte la capacidad de llevar la tecnología mas poderosa en todo lugar y el acceso a toda persona en el mundo. En todas partes de la humanidad, del universo."
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/697970583513596006/717443403562090647/20200602_142342-ANIMATION.gif"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(S002MN300);
      break;

    case "S003MN300":
            if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(
          "lo siento mucho, los administradores no me pertmiten ejecutar este comando por ti."
        );
      }
      const S003MN300 = embed
        .setTitle("N3XT PLAYERS en Facebook")
        .setURL("https://facebook.com/n3playersok")
        .addField(
          "La nueva era de experiencias acaba de comenzar. ¡Nosotros comenzamos contigo!",
          "Gracias a ustedes, Usuarios. #N3Browser es la aplicación más utilizada de todo N3XT PLAYERS. <:LynzWOW:698054327511678986>. Eso es una gran sorpresa y nos da mucha emoción saber que les gusta su objetivo: ¡El internet perfecto!"
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/716758879676923915/717194475121934346/facebook-icon.png"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(S003MN300);
      break;

    case "S004MN300":
            if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(
          "lo siento mucho, los administradores no me pertmiten ejecutar este comando por ti."
        );
      }
      const n3tweet = embed
        .setTitle("Maia twitteó:")
        .setURL(
          "https://twitter.com/maiatheone/status/1268027264572235777?s=20"
        )
        .addField(
          "Contenido:",
          "Llegué a @N3Players a hacer un cambio, y no lo digo por presumir, lo digo porque estoy orgullosa de que N3 tome un nuevo camino, un camino que ayudo a forjar, y estoy súper contenta con lo que he hecho hasta ahora, y esto solo es el comienzo. - Maia; @N3Team"
        )
        .setColor(0x2f3136)
        .setThumbnail(
          "https://lh3.googleusercontent.com/proxy/3Z62mz5Tt7Zgo_h6hIsKSRQjsZc6HMWDQ_wjV8VJNiEa0U8m710k55aG44fPWPwBfvWYH9hn5IMbNh40SyvqKobSwqiPRCT47b4oBCljWxERnNLT-Sw"
        )
        .setFooter(
          "N3Assistant",
          "https://cdn.discordapp.com/attachments/716758879676923915/716760351458459698/unknown.png"
        );
      message.channel.sendEmbed(n3tweet);
      break;
  }
});
bot.login(process.env.BOT_TOKEN);
