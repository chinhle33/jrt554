module.exports.config = {
    name: "sing",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát video thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Phương tiện",
    usages: "[searchVideos]",
    cooldowns: 10,
    dependencies: {
        "ytdl-core": "",
        "simple-youtube-api": ""
    },
    envConfig: {
        "YOUTUBE_API": "AIzaSyDEE1-zZSRVI8lTaQOVsIAQFgL-_BJKvhk"
    }
};

module.exports.handleReply = async function ({
    api,
    event,
    handleReply
}) {
    const axios = global.nodemodule['axios'];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const res = await axios.get(`https://raw.githubusercontent.com/D-Jukiee/data/main/sing.json`);
    const length_KEY = res.data.keySing.length
    const randomAPIKEY = res.data.keySing[Math.floor(Math.random() * length_KEY)]
    const {
        createReadStream,
        createWriteStream,
        unlinkSync,
        statSync
    } = global.nodemodule["fs-extra"];
    try {
        var options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {
                id: `${handleReply.link[event.body - 1]}`
            },
            headers: {
                'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
                'x-rapidapi-key': `${randomAPIKEY.API_KEY}`
            }
        };
        const data = await axios.request(options);
        path1 = __dirname + `/cache/${event.senderID}.m4a`
        const getms = (await axios.get(`${data.data.link}`, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));
        api.unsendMessage(handleReply.messageID)
        if (fs.statSync(__dirname + `/cache/${event.senderID}.m4a`).size > 26000000) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.senderID}.m4a`), event.messageID);
        else return api.sendMessage({
            body: `${data.data.title}`,
            attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.m4a`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.m4a`), event.messageID)
    } catch {
        return api.sendMessage('Không thể xử lý yêu cầu của bạn!', event.threadID, event.messageID);
    }
    return api.unsendMessage(handleReply.messageID);
}
module.exports.run = async function ({
    api,
    event,
    args
}) {
    const axios = global.nodemodule['axios'];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const res = await axios.get(`https://raw.githubusercontent.com/D-Jukiee/data/main/sing.json`);
    const length_KEY = res.data.keySing.length
    const randomAPIKEY = res.data.keySing[Math.floor(Math.random() * length_KEY)]
    const ytdl = global.nodemodule["ytdl-core"];
    const YouTubeAPI = global.nodemodule["simple-youtube-api"];
    const {
        createReadStream,
        createWriteStream,
        unlinkSync,
        statSync
    } = global.nodemodule["fs-extra"];
    const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
    const keyapi = global.configModule[this.config.name].YOUTUBE_API
    if (args.length == 0 || !args) return api.sendMessage('» Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    if (args.join(" ").indexOf("https://") == 0) {
        var url = args.join(" ")
        var urlsplit = url.split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);
        const linkUrlSing = urlsplit[3]
        var options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {
                id: `${linkUrlSing}`
            },
            headers: {
                'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
                'x-rapidapi-key': `${randomAPIKEY.API_KEY}`
            }
        };
        const data = await axios.request(options);
        console.log(data.data.link)
        path1 = __dirname + `/cache/${event.senderID}.m4a`
        const getms = (await axios.get(`${data.data.link}`, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));
        if (fs.statSync(__dirname + `/cache/${event.senderID}.m4a`).size > 26000000) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.senderID}.m4a`), event.messageID);
        else return api.sendMessage({
            body: `» ${data.data.title}`,
            attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.m4a`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.m4a`), event.messageID)
    } else {
        try {
            var link = [],
                msg = "",
                num = 0,
                numb = 0;
            var imgthumnail = [];
            var results = await youtube.searchVideos(keywordSearch, 6);
            for (let value of results) {
                if (typeof value.id == 'undefined') return;
                link.push(value.id);
                var idd = value.id;
                let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
                let gettime = datab.items[0].contentDetails.duration;
                let timeee = (gettime.slice(2));
                let timee = timeee.replace('S', '')
                let time = timee.replace('M', ':')
                let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
                let channel = datac.items[0].snippet.channelTitle;
                let folderthumnail = __dirname + `/cache/${numb+=1}.png`;
                let linkthumnail = `https://img.youtube.com/vi/${value.id}/maxresdefault.jpg`;
                let getthumnail = (await axios.get(`${linkthumnail}`, {
                    responseType: 'arraybuffer'
                })).data;
                fs.writeFileSync(folderthumnail, Buffer.from(getthumnail, 'utf-8'));

                imgthumnail.push(fs.createReadStream(__dirname + `/cache/${numb}.png`));
                num = num+=1
                if (num == 1) var num1 = "⓵"
                if (num == 2) var num1 = "⓶"
                if (num == 3) var num1 = "⓷"
                if (num == 4) var num1 = "⓸"
                if (num == 5) var num1 = "⓹"
                if (num == 6) var num1 = "⓺"
                msg += (`${num1} 《${time}》 ${value.title}\n\n`);
            }
            var body = `»🔎 Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n\n${msg}» Hãy reply(phản hồi) chọn một trong những tìm kiếm trên`

            return api.sendMessage({
                    attachment: imgthumnail,
                    body: body
                }, event.threadID, (error, info) => global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    link
                }),
                event.messageID);
        } catch (error) {
            const fs = global.nodemodule["fs-extra"];
            const axios = global.nodemodule["axios"];
            var link = [],
                msg = "",
                num = 0,
                numb = 0;
            var imgthumnail = []
            var results = await youtube.searchVideos(keywordSearch, 6);
            for (let value of results) {
                if (typeof value.id == 'undefined') return;
                link.push(value.id);
                var idd = value.id;
                let folderthumnail = __dirname + `/cache/${numb+=1}.png`;

                let linkthumnail = `https://img.youtube.com/vi/${value.id}/hqdefault.jpg`;

                let getthumnail = (await axios.get(`${linkthumnail}`, {
                    responseType: 'arraybuffer'
                })).data;
                let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
                let gettime = datab.items[0].contentDetails.duration;
                let timeee = (gettime.slice(2));
                let timee = timeee.replace('S', '')
                let time = timee.replace('M', ':')

                let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
                let channel = datac.items[0].snippet.channelTitle;
                fs.writeFileSync(folderthumnail, Buffer.from(getthumnail, 'utf-8'));
                imgthumnail.push(fs.createReadStream(__dirname + `/cache/${numb}.png`));
                num = num+=1
                if (num == 1) var num1 = "⓵"
                if (num == 2) var num1 = "⓶"
                if (num == 3) var num1 = "⓷"
                if (num == 4) var num1 = "⓸"
                if (num == 5) var num1 = "⓹"
                if (num == 6) var num1 = "⓺"
                msg += (`${num1} 《${time}》 ${value.title}\n\n`);
            }
            var body = `»🔎 Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n\n${msg}» Hãy reply(phản hồi) chọn một trong những tìm kiếm trên`
            return api.sendMessage({
                    attachment: imgthumnail,
                    body: body
                }, event.threadID, (error, info) => global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    link
                }),
                event.messageID);
        }
    }
    for (let ii = 1; ii < 7; ii++) {
        unlinkSync(__dirname + `/cache/${ii}.png`)
    }
}