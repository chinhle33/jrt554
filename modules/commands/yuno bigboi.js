const fs = require("fs");
module.exports.config = {
	name: "yuno bigboi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Yuno bigboi",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yuno bigboi")==0 || (event.body.indexOf("Yuno bigboi")==0)) {
		var msg = {
				body: "phui phui phui phui",
				attachment: fs.createReadStream(__dirname + `/noprefix/yunobigboi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}