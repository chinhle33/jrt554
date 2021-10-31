const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "búlon",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "huy hoàng và hoàng",
  description: "Bú Lồn Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "bulon",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
		"request": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://i.imgur.com/oVtB5Ze.gif",
             ];
   var callback = () => api.sendMessage({body:`Chảy Nước Chưa Em Yêu 😛`
  ,attachment: fs.createReadStream(__dirname + "/cache/bulon.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bulon.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bulon.gif")).on("close",() => callback());
   };