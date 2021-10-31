const fs = require("fs");
module.exports.config = {
	name: "bruh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "Bủh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bủh")==0 || (event.body.indexOf("Bruh")==0)) {
		var msg = {
				body: "Bủh Bủh",
				attachment: fs.createReadStream(__dirname + `/noprefix/xxx.mp3`)
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

  if (typeof data["bruh"] == "undefined" || data["bruh"] == true) data["bruh"] = false;
  else data["bruh"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["bruh"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}