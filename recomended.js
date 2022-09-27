var wins=document.querySelector("#wins");
var privateWordLetters=document.querySelector("#privateword");
var numofchanses=document.querySelector("#numofchanses");
var listfofchoosenletters=document.querySelector("#listfofchoosenletters");





var sozler = ['defter', 'mekteb', 'ana', 'qardas', 'stol', 'masa'];
var choosenWord = sozler[Math.floor(Math.random() * sozler.length)].split("");
var privateWord = [...choosenWord].fill("_");
var wrongchoosen = [];
var win = 0;
var chanses = 9;
privateWordLetters.innerHTML =privateWord


function startGame(e) {
    if (choosenWord.join("").includes(e.key) === true) {
        for (let i = 0; i < choosenWord.length; i++) {
            if (e.key === choosenWord[i]) {
                privateWord[i] = e.key;
                privateWordLetters.innerHTML =privateWord
                if (privateWord.join("").includes("_") === false) {
                    win++
                    wins.innerHTML=win
                    alert("you win")

                }
            }
        }
    } else {
        chanses--
        wrongchoosen.push(e.key);
        numofchanses.innerHTML=chanses;
        listfofchoosenletters.innerHTML=wrongchoosen
        if (wrongchoosen.length === 9) {
            numofchanses.innerHTML=chanses
            alert('you lose')
        }
    }


 

}


window.onkeyup = startGame

