const fs = require("fs");
module.exports.config = {
name: "Bot lồn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Bot lồn",
	commandCategory: "Other",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot lồn")==0 || (event.body.indexOf("Bot lồn")==0)) {
		var msg = {
				body: "Chửi cái lồn mẹ mày",
				attachment: fs.createReadStream(__dirname + `/noprefix/tenor.gif`)
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

  if (typeof data["botlon"] == "undefined" || data["botlon"] == true) data["botlon"] = false;
  else data["botlon"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["botlon"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}