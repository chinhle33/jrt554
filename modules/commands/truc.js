const fs = require("fs");
module.exports.config = {
name: "truc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "chinhle",
	description: "truc=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat truc",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("truc")==0 || (event.body.indexOf("truc")==0)) {
		var msg = {
				body: " con rời !",
				attachment: fs.createReadStream(__dirname + `/noprefix/truc.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
