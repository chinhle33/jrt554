const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "gái",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Hoàng ",
  description: "=))",
  commandCategory: "Hình ảnh",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  return request('https://4boxvn.com/api/gai.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                          
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    
    let callback = function() {
      api.sendMessage({
        body:  " gái nè bạn",
        attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback);
  });
}