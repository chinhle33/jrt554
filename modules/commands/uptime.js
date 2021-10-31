module.exports.config = {
	name: "uptime",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const time = process.uptime(),
	    days = Math.floor(time / (60 * 60 * 60)),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);

	const pidusage = await global.nodemodule["pidusage"](process.pid);

	const timeStart = Date.now();
	return request('https://4boxvn.com/api/gai' , (err, response, body) => {
	let picData = JSON.parse(body);                                                          
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
	let callback = function () {
	 api.sendMessage({
	 	body: `Bot UwU đã hoạt động được ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây.\n\n» Tổng người dùng: ${global.data.allUserID.length}\n» Tổng Nhóm: ${global.data.allThreadID.length}\n» Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}%\n» Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n» Ping: ${Date.now() - timeStart}ms`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}