const fs = require("fs");
module.exports.config = {
name: "linhcute",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "chinh",
    description: "linhcute",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần chat :)",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("@Nguyễn Thùy Linh")==0 || (event.body.indexOf("Nguyễn Thùy Linh")==0)) {
        var msg = {
                body: "NTL said êi...",
                attachment: fs.createReadStream(__dirname + `/noprefix/cute.jpg`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}