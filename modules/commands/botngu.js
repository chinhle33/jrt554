module.exports.config = {
name: "chửi bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "Chửi bot",
	commandCategory: "NoPrefix",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "Địt mẹ con chó ";
	let varinput = [ "bot", "Bot", "Bot ngu", "bot ngu", "Bot đểu", "bot đểu" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + '\nMày chửi ai đấy ? :) ',
		mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
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

  if (typeof data["botngu"] == "undefined" || data["botngu"] == true) data["botngu"] = false;
  else data["botngu"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["botngu"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}