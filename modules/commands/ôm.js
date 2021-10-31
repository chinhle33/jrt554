const request = require("request");
const fs = require("fs")
module.exports.config = {
  name: "ôm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng 🥀",
  description: "ôm người bạn tag",
  commandCategory: "general",
  usages: "ôm [tag người bạn cần ôm]",
  cooldowns: 5,
};

module.exports.run = function({

  api,

  event,

  args,

  client,

  __GLOBAL

}) {

  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

  if (!args.join(" ")) return out("Bạn chưa tag một người nào đó");

  else

  return request('https://nekos.life/api/hug', (err, response, body) => {

    let picData = JSON.parse(body);

    var mention = Object.keys(event.mentions)[0];

    let getURL = picData.url;

    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);

    let tag = event.mentions[mention].replace("@", "");

    let callback = function() {

      api.sendMessage({

        body: tag + " 𝐎̂𝐦 𝐁𝐚̣𝐧 𝐀̂́𝐦 𝐐𝐮𝐚́ ❤",

        mentions: [{

          tag: tag,

          id: Object.keys(event.mentions)[0]

        }],

        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)

      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);

    };

    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);

  });

}