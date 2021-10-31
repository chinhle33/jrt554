const fs = require("fs");
module.exports.config = {
name: "tlinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tlinh=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat tlinh",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tlinh")==0 || (event.body.indexOf("tlinh")==0)) {
		var msg = {
				body: "sao đấy bb !",
				attachment: fs.createReadStream(__dirname + `/noprefix/tlinh.mp4`)
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
    "successText": "thành công",
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

  if (typeof data["tlinh"] == "undefined" || data["tlinh"] == true) data["tlinh"] = false;
  else data["tlinh"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["tlinh"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
