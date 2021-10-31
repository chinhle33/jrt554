const fs = require("fs");
module.exports.config = {
	name: "buồn",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "buồn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("buồn")==0 || (event.body.indexOf("Buồn")==0)) {
		var msg = {
				body: "Tôi Ổn Mà 😔",
				attachment: fs.createReadStream(__dirname + `/noprefix/buon.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}


module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": " thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": " success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["buon"] == "undefined" || data["buon"] == true) data["buon"] = false;
  else data["buon"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["buon"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}