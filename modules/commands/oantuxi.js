module.exports.config = {
    name: "oantuxi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VĐT&NTH",
    description: "Game kéo búa bao",
    commandCategory: "general",
    usages: "Games",
    cooldowns: 3,
    dependencies: {
        "request":"",
        "fs-extra":""
    }
};

module.exports.handleReply = async function({ api, event, handleReply, client }) {
const request = global.nodemodule["request"];
const { createWriteStream, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
computerChoice = "rock";
} else if(computerChoice <= 0.67) {
computerChoice = "paper";
} else {
computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
if (choice1 === choice2){
return "The result is a tie!";
}
else if (choice1 ==="rock"){
if (choice2==="scissors"){
return "rock wins";
}
else {
return "page win";
}
}
else if (choice1 ==="paper"){
if (choice2==="scissors"){
return "scissors wins";
}
else {
return "paper win";
}
}
else{
if (choice2==="rock"){
return "scissors wins";
}
else {
return "rock win";
}
}

};

compare(userChoice,computerChoice);