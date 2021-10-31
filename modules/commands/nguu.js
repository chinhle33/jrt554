const fs = require("fs");
module.exports.config = {
name: "nguu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "nguu=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat nguu",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("nguu")==0)) {
		var msg = {
				body: " clmmm nè  !",
				attachment: fs.createReadStream(__dirname + `/noprefix/huan.mp4`)
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

  if (typeof data["nguu"] == "undefined" || data["nguu"] == true) data["nguu"] = false;
  else data["nguu"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["nguu"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}