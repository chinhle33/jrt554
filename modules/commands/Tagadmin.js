module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100018806512683") {
    var aid = ["100018806512683","100018806512683"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin tao làm gì ttao kêu 500 anh em tao xiên mày bây giờ","Tag Admin cái cc","Đã bảo đừng tag Admin mà cmcmm thích chết à, thích đấm hả con lợn😠","Đĩ mẹ mày thích tag Admin không con lợn kia 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }


module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["tagadmin"] == "undefined" || data["tagadmin"] == true) data["tagadmin"] = false;
  else data["tagadmin"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["tagadmin"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}