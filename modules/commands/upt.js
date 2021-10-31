module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai - JRT",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Hệ thống admin-bot",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
		"fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event,arg, Users }) => {
	const axios = global.nodemodule["axios"];
	const fast = global.nodemodule["fast-speedtest-api"];
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
  const request = require('request');
	const res = await axios.get(`http://le31.glitch.me/poem`);
  var love = res.data.data
	const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
	const timeStart = Date.now();
	let today = new Date();
 return api.sendMessage("", event.threadID, () => api.sendMessage(`>Chào cậu: ${name}\n>Hôm này là: ${gio}\n>Bot của  đã hoạt động được: ${hours} giờ ${minutes} phút ${seconds} giây.\n>Prefix: ${global.config.PREFIX}\n>Version: 1.2.15\n>Tổng người dùng: ${global.data.allUserID.length}\n>Tổng Nhóm: ${global.data.allThreadID.length}\n>Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n>Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n>Ping: ${Date.now() - timeStart}ms\n>Tốc độ mạng : ${ketqua} Mbs \n≻───── •👇🏻• ─────≺\n>Thính:\n${love}`, event.threadID, event.messageID));
}
