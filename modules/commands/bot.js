/** Không tự động get như module system đâu - xem thông tin pc "WIN + R -> dxdiag" **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LDC",
  description: "Thông tin bot và phần cứng đang hoạt động",
  commandCategory: "Info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://uploads.disquscdn.com/images/81f2257d8a2cba4fd000b3a5f6a090f724d0fd6a9324bcd51687ee666df685b5.gif?fbclid=IwAR1BpNIpX8QCdKbSKfdi7vhOth_Fl5yVx6YMnyNBKlyTcPKqxGuCM-1W4EI",
  ];
   var callback = () => api.sendMessage({body:`Thông tin bot và phần cứng đang hoạt động:
• Thông tin bot đang sử dụng:
• CPU:
• RAM: 
• SSD or HDD: 
• Windows Version: 
• Network: 
• Uptime max: 
• Độ ổn định: Medium/Low
• Language: Tiếng Việt
• Computer name: 
» Updating....`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "bot thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "bot success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["bot"] == "undefined" || data["hi"] == true) data["bot"] = false;
  else data["bot"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}