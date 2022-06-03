//Setup for all variables
let score = 0
let scoreCount = document.getElementById('score')
let susAmount = document.getElementById('susamount')
let info = document.getElementById('info')
let sus = 0
let cpc = 1
let cps = 0
let prius = 0
let scoreAsDiv = 0
let priusAmount = document.getElementById('priusamount')
let volks = 0
let volkAmount = document.getElementById('volkamount')
let honda = 0
let hondaAmount = document.getElementById('hondaamount')
let mercedes = 0
let mercedesAmount = document.getElementById('mercedesamount')
let rolls = 0
let rollsAmount = document.getElementById('rollsamount')
let buySusBtn = document.getElementById('buysusbtn')
let buyPriusBtn = document.getElementById('buypriusbtn')
let buyVolkBtn = document.getElementById('buyvolkbtn')
let buyHondaBtn = document.getElementById('buyhondabtn')
let buyMercedesBtn = document.getElementById('buymercedesbtn')
let buyRollsBtn = document.getElementById('buyrollsbtn')
let bug = 0
let bugAmount = document.getElementById('bugamount')
let buyBugBtn = document.getElementById('buybugbtn')
let oxStyle = document.getElementById('ox').style
let txStyle = document.getElementById('tx').style
let hxStyle = document.getElementById('hx').style
let oxActive = true
let txActive = false
let hxActive = false

setupdata()

//Checks for storage variables
function setupdata(){
    //score
    if (localStorage.getItem("score") === null) {
        localStorage.score = score;
    }else{
        score = parseInt(localStorage.score)
        scoreSet()
    }

    //cps
    if (localStorage.getItem("cps") === null) {
        localStorage.cps = cps;
    }else{
        cps = parseInt(localStorage.cps)
    }

    //cpc
    if (localStorage.getItem("cpc") === null) {
        localStorage.cpc = cpc;
    }else{
        cpc = parseInt(localStorage.cpc)
        info.textContent = cpc + " Per Click - " + cps + " Per Second"
    }

    //sus
    if (localStorage.getItem("sus") === null) {
        localStorage.sus = sus;
    }else{
        sus = parseInt(localStorage.sus)
        susAmount.textContent = "Sus Car - " + sus
    }

    //prius
    if (localStorage.getItem("prius") === null) {
        localStorage.prius = prius;
    }else{
        prius = parseInt(localStorage.prius)
        priusAmount.textContent = "Prius - " + prius
    }

    //volks
    if (localStorage.getItem("volks") === null) {
        localStorage.volks = volks;
    }else{
        volks = parseInt(localStorage.volks)
        volkAmount.textContent = "Volkswagen - " + volks
    }

    //honda
    if (localStorage.getItem("honda") === null) {
        localStorage.honda = honda;
    }else{
        honda = parseInt(localStorage.honda)
        hondaAmount.textContent = "Honda - " + honda
    }

    //mercedes
    if (localStorage.getItem("mercedes") === null) {
        localStorage.mercedes = mercedes;
    }else{
        mercedes = parseInt(localStorage.mercedes)
        mercedesAmount.textContent = "Mercedes - " + mercedes
    }

    //rolls
    if (localStorage.getItem("rolls") === null) {
        localStorage.rolls = rolls;
    }else{
        rolls = parseInt(localStorage.rolls)
        rollsAmount.textContent = "Rolls Royce - " + rolls
    }

    //bugatti
    if (localStorage.getItem("bug") === null) {
        localStorage.bug = bug;
    }else{
        bug = parseInt(localStorage.bug)
        bugAmount.textContent = "Bugatti - " + bug
    }
}

//Stores data into the webstorage
function store(){
    localStorage.setItem("score", score);
    localStorage.setItem("cpc", cpc);
    localStorage.setItem("cps", cps);
    localStorage.setItem("sus", sus);
    localStorage.setItem("prius", prius);
    localStorage.setItem("volks", volks);
    localStorage.setItem("honda", honda);
    localStorage.setItem("mercedes", mercedes);
    localStorage.setItem("rolls", rolls);
    localStorage.setItem("bug", bug);
}

//The button the user clicks to add to the score
function add(){
    score += cpc
    scoreSet()
    store()
}

//The button to buy sus car
function buysus(){
    if (oxActive == true){
        if (score >= 25){
            cpc += 1
            score -= 25
            sus += 1
            susAmount.textContent = "Sus Car - " + sus
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 250){
            cpc += 10
            score -= 250
            sus += 10
            susAmount.textContent = "Sus Car - " + sus
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 2500){
            cpc += 100
            score -= 2500
            sus += 100
            susAmount.textContent = "Sus Car - " + sus
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

//The button to buy prius
function buyprius(){
    if (oxActive == true){
        if (score >= 500){
            cpc += 10
            cps += 1
            score -= 500
            prius += 1
            priusAmount.textContent = "Prius - " + prius
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 5000){
            cpc += 100
            cps += 10
            score -= 5000
            prius += 10
            priusAmount.textContent = "Prius - " + prius
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 50000){
            cpc += 1000
            cps += 100
            score -= 50000
            prius += 100
            priusAmount.textContent = "Prius - " + prius
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

//The button to buy volkswagen
function buyvolk(){
    if (oxActive == true){
        if (score >= 5000){
            cpc += 25
            cps += 3
            score -= 5000
            volks += 1
            volkAmount.textContent = "Volkswagen - " + volks
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 50000){
            cpc += 250
            cps += 30
            score -= 50000
            volks += 10
            volkAmount.textContent = "Volkswagen - " + volks
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 500000){
            cpc += 2500
            cps += 300
            score -= 500000
            volks += 100
            volkAmount.textContent = "Volkswagen - " + volks
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

//The button to buy honda
function buyhonda(){
    if (oxActive == true){
        if (score >= 10000){
            cpc += 50
            cps += 10
            score -= 10000
            honda += 1
            hondaAmount.textContent = "Honda - " + honda
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 100000){
            cpc += 500
            cps += 100
            score -= 100000
            honda += 10
            hondaAmount.textContent = "Honda - " + honda
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 1000000){
            cpc += 5000
            cps += 1000
            score -= 1000000
            honda += 100
            hondaAmount.textContent = "Honda - " + honda
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

//The button to buy mercedes
function buymercedes(){
    if (oxActive == true){
        if (score >= 100000){
            cpc += 500
            cps += 100
            score -= 100000
            mercedes += 1
            mercedesAmount.textContent = "Mercedes - " + mercedes
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 1000000){
            cpc += 5000
            cps += 1000
            score -= 1000000
            mercedes += 10
            mercedesAmount.textContent = "Mercedes - " + mercedes
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 10000000){
            cpc += 50000
            cps += 10000
            score -= 10000000
            mercedes += 100
            mercedesAmount.textContent = "Mercedes - " + mercedes
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

//The button to buy rolls royce
function buyrolls(){
    if (oxActive == true){
        if (score >= 1000000){
            cpc += 5000
            cps += 1000
            score -= 1000000
            rolls += 1
            rollsAmount.textContent = "Rolls Royce - " + rolls
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 10000000){
            cpc += 50000
            cps += 10000
            score -= 10000000
            rolls += 10
            rollsAmount.textContent = "Rolls Royce - " + rolls
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 100000000){
            cpc += 500000
            cps += 100000
            score -= 100000000
            rolls += 100
            rollsAmount.textContent = "Rolls Royce - " + rolls
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

//The function to buy bugatti
function buybug(){
    if (oxActive == true){
        if (score >= 5000000){
            cpc += 25000
            cps += 5000
            score -= 5000000
            bug += 1
            bugAmount.textContent = "Bugatti - " + bug
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else if (txActive == true){
        if (score >= 50000000){
            cpc += 250000
            cps += 50000
            score -= 50000000
            bug += 10
            bugAmount.textContent = "Bugatti - " + bug
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }else{
        if (score >= 500000000){
            cpc += 2500000
            cps += 500000
            score -= 500000000
            bug += 100
            bugAmount.textContent = "Bugatti - " + bug
            info.textContent = cpc + " Per Click - " + cps + " Per Second"
            scoreSet()
        }
    }
    store()
}

function activateo(){
    oxStyle.backgroundColor = "rgb(2, 109, 0)";
    txStyle.backgroundColor = "black";
    hxStyle.backgroundColor = "black";
    oxActive = true
    txActive = false
    hxActive = false
    buySusBtn.textContent = "$25"
    buyPriusBtn.textContent = "$500"
    buyVolkBtn.textContent = "$5,000"
    buyHondaBtn.textContent = "$10,000"
    buyMercedesBtn.textContent = "$100,000"
    buyRollsBtn.textContent = "$1,000,000"
    buyBugBtn.textContent = "$5,000,000"
}

function activatet(){
    oxStyle.backgroundColor = "black";
    txStyle.backgroundColor = "rgb(2, 109, 0)";
    hxStyle.backgroundColor = "black";
    oxActive = false
    txActive = true
    hxActive = false
    buySusBtn.textContent = "$250"
    buyPriusBtn.textContent = "$5,000"
    buyVolkBtn.textContent = "$50,000"
    buyHondaBtn.textContent = "$100,000"
    buyMercedesBtn.textContent = "$1,000,000"
    buyRollsBtn.textContent = "$10,000,000"
    buyBugBtn.textContent = "$50,000,000"
}

function activateh(){
    oxStyle.backgroundColor = "black";
    txStyle.backgroundColor = "black";
    hxStyle.backgroundColor = "rgb(2, 109, 0)";
    oxActive = false
    txActive = false
    hxActive = true
    buySusBtn.textContent = "$2,500"
    buyPriusBtn.textContent = "$50,000"
    buyVolkBtn.textContent = "$500,000"
    buyHondaBtn.textContent = "$1,000,000"
    buyMercedesBtn.textContent = "$10,000,000"
    buyRollsBtn.textContent = "$100,000,000"
    buyBugBtn.textContent = "$500,000,000"
}

//The function to simplify the score
function scoreSet(){
    if (score >= 1000000000000000000){
        scoreAsDiv = score / 1000000000000000000
        scoreCount.textContent = scoreAsDiv.toFixed(2) + " Quin"
    }else if (score >= 1000000000000000){
        scoreAsDiv = score / 1000000000000000
        scoreCount.textContent = scoreAsDiv.toFixed(2) + " Quad"
    }else if (score >= 1000000000000){
        scoreAsDiv = score / 1000000000000
        scoreCount.textContent = scoreAsDiv.toFixed(2) + " T"
    }else if (score >= 1000000000){
        scoreAsDiv = score / 1000000000
        scoreCount.textContent = scoreAsDiv.toFixed(2) + " B"
    }else if (score >= 1000000){
        scoreAsDiv = score / 1000000
        scoreCount.textContent = scoreAsDiv.toFixed(2) + " M"
    }else if (score >= 1000){
        scoreAsDiv = score / 1000
        scoreCount.textContent = scoreAsDiv.toFixed(2) + " K"
    }else{
        scoreCount.textContent = score
    }
}

//The CPS
var sec = window.setInterval(function(){
    score += cps
    scoreSet()
    store()
}, 1000);