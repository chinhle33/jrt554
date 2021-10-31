const fs = require("fs");
module.exports.config = {
name: "linn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "linn=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat linn",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("linh")==0 || (event.body.indexOf("linh")==0)) {
		var msg = {
				body: " tao xẽ không nói là ảnh mạng đâu nhưng mà xinh thật !",
				attachment: fs.createReadStream(__dirname + `/noprefix/linn.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
