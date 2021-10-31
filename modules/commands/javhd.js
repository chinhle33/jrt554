const fs = require("fs");
module.exports.config = {
name: "javhd",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huy hoàng và Hân - Fixed by LTD",
    description: "sex",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần chat :)",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("javhd")==0 || (event.body.indexOf("javhd")==0)) {
        var msg = {
                body: "ó nhau bản fake...",
                attachment: fs.createReadStream(__dirname + `/noprefix/javhd.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}