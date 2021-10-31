module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Lê chính ",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 100,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn chửi", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn chửi!");
setTimeout(() => {a({body: "ê thằng ml" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "đụ mẹ mày" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "nhanh ra đây" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "ra xiên nhau với tao" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "ra đây đi dm thằng lồn" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "chốn cl mẹ mày" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "dkmmm" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "địt mẹ mày ra đây" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "chốn dm m à" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "t xiên chết mẹ m bây giờ" + " " + name, mentions: arraytag})} , 8800);
setTimeout(() => {a({body: "cãi đmmm à em" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "lồn bà mày" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "địt con mẹ t xiên chết bố mày cho bà m cứu ông nội m xuống vớt chết đuối cả nhà mày bh" + " " + name, mentions: arraytag})} , 10000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 10500);
setTimeout(() => {a({body: "ra đây địt con mẹ" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "ra đây chơi em êi" + " " + name, mentions: arraytag})} , 11500);
setTimeout(() => {a({body: "chốn dmm" + " " + name, mentions: arraytag})} , 11800);
setTimeout(() => {a({body: "fuck" + " " + name, mentions: arraytag})} , 12000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 12500);
setTimeout(() => {a({body: "dmm" + " " + name, mentions: arraytag})} , 12800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 13000);
setTimeout(() => {a({body: "ra đây đi con lợn" + " " + name, mentions: arraytag})} , 13500);
setTimeout(() => {a({body: "tao nghỉ tý đã" + " " + name, mentions: arraytag})} , 14000);
setTimeout(() => {a({body: "à t đi xiên mẹ mày đã" + " " + name, mentions: arraytag})} , 14500);
setTimeout(() => {a({body: "clmm" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "đồ ngu" + " " + name, mentions: arraytag})} , 15800);
setTimeout(() => {a({body: "ra đây chơi em chạy cc à" + " " + name, mentions: arraytag})} , 16300);
setTimeout(() => {a({body: "ra đây đi em ơi" + " " + name, mentions: arraytag})} , 16800);
setTimeout(() => {a({body: "ra đây chơi em ơi chốn địt mẹ mày" + " " + name, mentions: arraytag})} , 17100);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 17500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 18000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 18500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 19000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 19500);
setTimeout(() => {a({body: "lồn bà mày" + " " + name, mentions: arraytag})} , 19800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 20500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 20900);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 21500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 22000);
setTimeout(() => {a({body: "dkmm" + " " + name, mentions: arraytag})} , 22500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 23000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 23500);
setTimeout(() => {a({body: "dm chốn cc" + " " + name, mentions: arraytag})} , 23800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 24500);
setTimeout(() => {a({body: "clm ra đây" + " " + name, mentions: arraytag})} , 24800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 25000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 25500);
setTimeout(() => {a({body: "dã chết cụ m giờ" + " " + name, mentions: arraytag})} , 26000);
setTimeout(() => {a({body: "chạy con mẹ mày" + " " + name, mentions: arraytag})} , 26500);
setTimeout(() => {a({body: "ra đây chửi nhau" + " " + name, mentions: arraytag})} , 27000);
setTimeout(() => {a({body: "ăn cứt không" + " " + name, mentions: arraytag})} , 27800);
setTimeout(() => {a({body: "dkmm" + " " + name, mentions: arraytag})} , 28300);
setTimeout(() => {a({body: "t xin phép cân cả nhà mày" + " " + name, mentions: arraytag})} , 28800);
setTimeout(() => {a({body: "thôi chủ tai mệt rồi" + " " + name, mentions: arraytag})} , 29100);
setTimeout(() => {a({body: "tao nghỉ đây" + " " + name, mentions: arraytag})} , 29500);
setTimeout(() => {a({body: "địt mẹ mày cút t đéo chửi nữa thằng ngu" + " " + name, mentions: arraytag})} , 30000);
 }ent.threadID, event.messageID);
    }
}