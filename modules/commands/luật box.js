const fs = require("fs");
module.exports.config = {
name: "luật box",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "luật box=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat luật box",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("luật box")==0 || (event.body.indexOf("luật box")==0)) {
		var msg = {
				body: " luật nè mấy con rời !",
				attachment: fs.createReadStream(__dirname + `/noprefix/luật.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
