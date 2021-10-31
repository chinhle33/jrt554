module.exports.config = {
name: "Huấn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Huấn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("huấn")==0 || (event.body.indexOf("Huấn")==0)) {
		var msg = {
				body: "Nghe lời thầy dạy nè",
				attachment: fs.createReadStream(__dirname + `/noprefix/3 Thứ Đang Hot Trên MXH .mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

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

  if (typeof data["hi"] == "undefined" || data["huấn"] == true) data["huấn"] = false;
  else data["huấn"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["huấn"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}