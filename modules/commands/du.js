module.exports.config = {
	name: "du",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Ảnh ngực",
	commandCategory: "NSFW",
	usages: "vếu",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://simsimi.info/v2/image.php?api_key=leanhtruong&image=du').then(res => {
	var image = res.data.data;
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
  });
}