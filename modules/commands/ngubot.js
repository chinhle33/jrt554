const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ngubot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "chính dừa trên hùng chó",
  description: "ngubot",
  commandCategory: "Cấm sử dụng bot",
  usages: "chửi bot clmm",
  cooldowns: 4,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  var idgr = `${event.threadID}`;

  if ((event.body.toLowerCase() == "bot ngu thế") || (event.body.toLowerCase() == "bot lon") || (event.body.toLowerCase() == "bot óc chó") || (event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "bot súc vật")|| (event.body.toLowerCase() == "súc vật bot") || (event.body.toLowerCase() == "dmm bot")|| (event.body.toLowerCase() == "cc nè bot") || (event.body.toLowerCase() == "óc chó bot") || (event.body.toLowerCase() == "mẹ mày bot") || (event.body.toLowerCase() == "mẹ m bot") || (event.body.toLowerCase() == "sủa đi bot") || (event.body.toLowerCase() == "chó bot") || (event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "bot bị ngu") || (event.body.toLowerCase() == "bot như cặc") || (event.body.toLowerCase() == "bot như shit") || (event.body.toLowerCase() == "bot như cứt") || (event.body.toLowerCase() == "cút đi bot") || (event.body.toLowerCase() == "bot cái lồn") || (event.body.toLowerCase() == "kick bot đi") || (event.body.toLowerCase() == "bot óc") || (event.body.toLowerCase() == "bot như lồn") || (event.body.toLowerCase() == "bot lazada") || (event.body.toLowerCase() == "bot ngu vãi")) {
    data.reason = reason || null;
    global.data.threadBanned.set(idgr, { reason: data.reason});
    return api.sendMessage(`❌Nhóm ${idgr} của bạn đã bị ban, không thể sử dụng bot!\n❌Lý do: Chửi bot\n✔️Vui lòng liên hệ admin để xem xét lại. `, threadID);
  };


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }


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

  if (typeof data["ngubot"] == "undefined" || data["ngubot"] == true) data["ngubot"] = false;
  else data["ngubot"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["ngubot"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}