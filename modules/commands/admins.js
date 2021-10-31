module.exports.config = {
	name: "admins",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "Admin Bot[key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có 1admins\n👉Sử dụng +admins 1",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("==== Admin 1 ====\nTên: lê đức chính\nLiên hệ:\nhttps://www.facebook.com/chinhle3601/", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("==== Admin 2 ====\nTên: lê đức chính\nLiên hệ:\nhttps://www.facebook.com/profile.php?id=100018806512630", event.threadID, event.messageID);
	}
}