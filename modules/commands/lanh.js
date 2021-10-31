const fs = require("fs");
module.exports.config = {
name: "lanh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "lanh=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat kim linh",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lanh")==0 || (event.body.indexOf("Lanh")==0)) {
		var msg = {
				body: " lanh trap nè  !",
				attachment: fs.createReadStream(__dirname + `/noprefix/lanh.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
