const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "in4admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: chính
  \n❎ Tuổi: 19
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao cân nặng: 1m71 51kg
  \n💘 Mối quan hệ: Độc thân
  \n😎 Quê quán: Sông Lô
  \n🤔 Nơi ở: Vĩnh Phúc
  \n👫 Gu: Giọng nói :<
  \n🌸 Tính cách: yêu em :3
  Facebook : https://www.facebook.com/Chinhle3601`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100030751998443}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };