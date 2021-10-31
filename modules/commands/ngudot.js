const fs = require("fs");
module.exports.config = {
name: "ngudot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "ngu dốt",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu dốt")==0 || (event.body.indexOf("Ngu dốt")==0)) {
		var msg = {
				body: "Đúng! thằng này ngu lắm",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngudot.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
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

  if (typeof data["ngudot"] == "undefined" || data["ngudot"] == true) data["ngudot"] = false;
  else data["ngudot"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["ngudot"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}