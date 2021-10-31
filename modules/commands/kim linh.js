const fs = require("fs");
module.exports.config = {
name: "kim linh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "kim linh=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat kim linh",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("kim linh")==0 || (event.body.indexOf("kim linh")==0)) {
		var msg = {
				body: " nhớ lắm không !",
				attachment: fs.createReadStream(__dirname + `/noprefix/kim linh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
