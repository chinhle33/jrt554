function _0x2d8f() { var _0x14bad6 = ['3330TJWrxa', '373266IiqCSr', '1560800cKSOJe', '2.0.0', 'Chửi\x20Bot\x20V', 'ManhG', '3xnRpOU', '318780OilVVJ', '6470LVOCLA', 'chuibot', '380758mXfsmw', '594728etsjbT', 'ng\x20reply\x20t', 'exports', '972495aoarlA', 'Noprefix', 'config', 'an\x20user\x20bằ', '6uVLlAd', 'ersion\x208\x20b']; _0x2d8f = function () { return _0x14bad6; }; return _0x2d8f(); } function _0x26ed(_0x4a1b42, _0x158644) { var _0x13eeca = _0x2d8f(); return _0x26ed = function (_0x248c46, _0x2a408a) { _0x248c46 = _0x248c46 - (0xb00 + -0x22de + 0x1924); var _0x95736f = _0x13eeca[_0x248c46]; return _0x95736f; }, _0x26ed(_0x4a1b42, _0x158644); } var _0x4a2b22 = _0x26ed; (function (_0x263134, _0x19c685) { var _0xab34ee = _0x26ed, _0x2da8e5 = _0x263134(); while (!![]) { try { var _0x1865f8 = parseInt(_0xab34ee(0x14f)) / (0x1 * 0x24a5 + 0x241 * 0xa + -0x25e * 0x19) + -parseInt(_0xab34ee(0x149)) / (-0x1 * -0x5d5 + -0xa * 0x155 + -0x13 * -0x65) + -parseInt(_0xab34ee(0x14e)) / (-0x9 * 0x301 + -0x17c * -0x5 + -0x9d * -0x20) * (parseInt(_0xab34ee(0x153)) / (0x67 * -0x21 + -0xcce + -0x83 * -0x33)) + parseInt(_0xab34ee(0x156)) / (0xb50 + 0x1132 + -0x1c7d) + -parseInt(_0xab34ee(0x146)) / (0x1e6f + 0x1 * -0x25d9 + 0x4 * 0x1dc) * (-parseInt(_0xab34ee(0x152)) / (0x1d * -0x14b + 0x59 * 0x2c + 0x2 * 0xb1d)) + parseInt(_0xab34ee(0x14a)) / (0x90b + 0x6 * 0x138 + -0x3 * 0x571) + -parseInt(_0xab34ee(0x148)) / (0x1 * -0x2282 + -0xd90 + -0x301b * -0x1) * (parseInt(_0xab34ee(0x150)) / (-0x896 + 0xc5 + 0x7db)); if (_0x1865f8 === _0x19c685) break; else _0x2da8e5['push'](_0x2da8e5['shift']()); } catch (_0x58b764) { _0x2da8e5['push'](_0x2da8e5['shift']()); } } }(_0x2d8f, 0x12b00 + 0x23297 + 0x17 * -0x585), module[_0x4a2b22(0x155)][_0x4a2b22(0x158)] = { 'name': _0x4a2b22(0x151), 'version': _0x4a2b22(0x14b), 'hasPermssion': 0x0, 'credits': _0x4a2b22(0x14d), 'description': _0x4a2b22(0x14c) + _0x4a2b22(0x147) + _0x4a2b22(0x159) + _0x4a2b22(0x154) + 'n', 'commandCategory': _0x4a2b22(0x157), 'usages': '', 'cooldowns': 0x2, 'denpendencies': { 'fs-extra': '', 'request': '' } });

module.exports.onLoad = async function () {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const path = resolve(__dirname, "cache/CHUIBOT");
  if (!existsSync(path)) mkdirSync(path, { recursive: true });
  //Hàm dowload file có sẵn (có thể thay)
  //Jpg nhé
  //if (!existsSync(resolve(__dirname, 'cache/CHUIBOT', 'chuithe1.jpg'))) await downloadFile("https://haingoaiphiemdam.com/images/file/7OIQ0R1h1ggBAKUH/concac-dep.jpg", resolve(__dirname, 'cache/CHUIBOT', 'chuithe1.jpg'));
  //if (!existsSync(resolve(__dirname, 'cache/CHUIBOT', 'chuithe2.jpg'))) await downloadFile("https://github.com/manhkhac/mirai-1.2.8/raw/data/img/amen.jpg", resolve(__dirname, 'cache/CHUIBOT', 'chuithe2.jpg'));
  //GIF nhé
  if (!existsSync(resolve(__dirname, 'cache/CHUIBOT', 'chuithe3.gif'))) await downloadFile("https://c.tenor.com/p0so-KaD03cAAAAC/bunny-girl-senpai-slap.gifhttps://c.tenor.com/p0so-KaD03cAAAAC/bunny-girl-senpai-slap.gif", resolve(__dirname, 'cache/CHUIBOT', 'chuithe3.gif'));
  //MP4 nhé
  //if (!existsSync(resolve(__dirname, 'cache/CHUIBOT', 'chuithe.mp4'))) await downloadFile("https://github.com/manhkhac/mirai-1.2.8/raw/data/mp4/chuitheconcac.mp4", resolve(__dirname, 'cache/CHUIBOT', 'chuithe.mp4'));
  //MP3 nhé
  //if (!existsSync(resolve(__dirname, 'cache/CHUIBOT', 'domixi.mp3'))) await downloadFile("https://github.com/manhkhac/mirai-1.2.8/raw/data/mp3/domixichubay1p.mp3", resolve(__dirname, 'cache/CHUIBOT', 'domixi.mp3'));
}

module.exports.handleReply = async function ({
  api: e,
  args: n,
  Users: a,
  event: s,
  handleReply: t
}) {
  const {
    threadID: d,
    messageID: i
  } = s, {
    reason: o
  } = t;
  var g = await a.getNameUser(s.senderID);
  const r = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var l = s.body.split(" "),
    m = t.author,
    h = t.nameU;
  switch (t.type) {
    case "reply":
      var c = global.config.ADMINBOT;
      for (let n of c) e.sendMessage({
        body: "📄Lời chăng chối từ " + g + ":\n " + s.body,
        mentions: [{
          id: s.senderID,
          tag: g
        }]
      }, n, ((e, n) => global.client.handleReply.push({
        name: this.config.name,
        messageID: n.messageID,
        messID: s.messageID,
        author: s.senderID,
        id: s.threadID,
        nameU: g,
        type: "banU"
      })));
      break;
    case "banU":
      if ("ban" != l[0] && "Ban" != l[0]) {
        e.sendMessage({
          body: `Admin ❤ ${g} thông tin đến bạn:\n\n${s.body}\n\n»»💬Reply tin nhắn này để nói lời chăng chối của bạn tới admin`,
          mentions: [{
            tag: g,
            id: s.senderID
          }]
        }, t.id, ((e, n) => global.client.handleReply.push({
          name: this.config.name,
          author: s.senderID,
          messageID: n.messageID,
          type: "reply"
        })), t.messID);
        break
      } {
        let n = (await a.getData(m)).data || {};
        n.banned = 1, n.reason = o || null, n.dateAdded = r, await a.setData(m, {
          data: n
        }), global.data.userBanned.set(m, {
          reason: n.reason,
          dateAdded: n.dateAdded
        }), e.sendMessage(`»Thông báo từ Admin ${g}«\n\n ${h}\n- Bạn Đã Bị Ban\n- Cấm sử dụng bot.\nLý do: Chửi bot`, m, (() => e.sendMessage(`${e.getCurrentUserID()}`, (() => e.sendMessage(`★★BanSuccess★★\n\n🔷${h} \n🔰TID:${m} `, d)))))
      }
    case "chuithe":
      e.sendMessage({
        body: `Admin ❤ ${g} thông tin đến bạn:\n\n${s.body}\n\n»»💬Reply tin nhắn này để nói lời chăng chối của bạn tới admin`,
        mentions: [{
          tag: g,
          id: s.senderID
        }]
      }, t.id, ((e, n) => global.client.handleReply.push({
        name: this.config.name,
        author: s.senderID,
        messageID: n.messageID,
        type: "reply"
      })), t.messID)
  }
};

module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n,
	Threads: e
}) => {
	var {
		threadID: a,
		messageID: b,
		body: h,
		senderID: c
	} = o;
	if (c == t.getCurrentUserID()) return;
	const i = global.nodemodule["fs-extra"];
	var m = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	let l = await n.getNameUser(o.senderID);
	var r = o.threadID;
	let s = o.senderID,
		d = (await e.getData(o.threadID)).threadInfo;
	const g = global.config.ADMINBOT;
	var u = [`${l} Bạn đã chửi bot vào ${m}.\n- Tin nhắn này đã được gửi về cho admin.\n- Thêm lần nữa ăn ban bạn nhé :)))`, `${l}, mày thích chửi bố mày không, ăn ban nhé con trai :)))`, `${l} mày đã ngu, lại còn óc chó, đéo biết dùng bot chửi cc :)))`, `${l}, óc lồn, mày tuổi lồn dùng bot của bố mày nhé. \nÀ đéo phải mày tuổi cặc nhé :)))`],
		D = u[Math.floor(Math.random() * u.length)],
        //Đưỡng dẫn ảnh, mp3, video, gif nhé
		I = [ 
      //i.createReadStream(__dirname + `/cache/CHUIBOT/chuithe1.jpg`),
       // i.createReadStream(__dirname + `/cache/CHUIBOT/chuithe2.jpg`),
        i.createReadStream(__dirname + `/cache/CHUIBOT/chuithe3.gif`)
        //i.createReadStream(__dirname + `/cache/CHUIBOT/chuithe.mp4`),
        //i.createReadStream(__dirname + `/cache/CHUIBOT/domixi.mp3`)
      ],
		f = {
			body: D,
			attachment: I[Math.floor(Math.random() * I.length)]
		};
  //Những câu chửi BOT ko viết HOA nhé
	["botngu", "bot ngu", "bot gà", "con bot lol", "bot ngu lol", "bot chó", "dm bot", "đm bot", "dmm bot", "dmm bot", "đmm bot", "đb bot", "bot điên", "bot dở", "bot khùng", "đĩ bot", "bot paylac rồi", "con bot lòn", "cmm bot", "clap bot", "bot ncc", "bot oc", "bot óc", "bot óc chó", "cc bot", "bot tiki", "lozz bottt", "lol bot", "loz bot", "lồn bot", "bot lồn", "bot lon", "bot cac", "bot nhu lon", "bot như cc", "bot như bìu", "Bot sida", "bot sida", "bot fake", "bot cc", "bot shoppee", "bot đểu", "bot dỡm","cc bot"].forEach((o => {
		let n = o[0].toUpperCase() + o.slice(1);
		if (h === o.toUpperCase() | h === o | n === h) {
			let n = d.threadName;
			modules = "Chửi bot:", console.log(modules, o + "|", n), t.sendMessage(f, a, (() => {
				var e = g;
				for (var e of g) t.sendMessage(`=== Bot Notification ===\n\n👥Tên Box: ${n}\n⛔ID box: ${r}\n🆘Tên tội nhân: ${l} \n🔰ID tội nhân: ${s}\n🕒Time: ${m}\n😥Chửi bot: ${o}`, e, ((o, t) => global.client.handleReply.push({
					name: this.config.name,
					author: c,
					messageID: t.messageID,
					messID: b,
					id: r,
					type: "chuithe"
				})))
			}))
		}
	}))
};

module.exports.run=async({event:a,api:e})=>e.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?",a.threadID);



module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": " thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": " success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["chuibot"] == "undefined" || data["chuibot"] == true) data["chuibot"] = false;
  else data["chuibot"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["chuibot"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}