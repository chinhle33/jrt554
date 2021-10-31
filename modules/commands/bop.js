const fs = require("fs");
module.exports.config = {
name: "bop",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "chinh",
    description: "bop",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần chat :)",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("bop")==0 || (event.body.indexOf("bop")==0)) {
        var msg = {
                body: "phê không anh êi...",
                attachment: fs.createReadStream(__dirname + `/noprefix/bop.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}