

'use strict'



const button = document.getElementById("a");
button.addEventListener("click", function (){
    console.log("oioi")
})

let aquestion = "ベネズエラ"
let amondai = document.getElementById("atext")

function aone(){
    amondai.textContent = aquestion
}

aone()

let bquestion = "メキシコ"
let bmondai = document.getElementById("btext")

function bone(){
    bmondai.textContent = bquestion
}

bone()
let cquestion = "キューバ"
let cmondai = document.getElementById("ctext")

function cone(){
    cmondai.textContent = cquestion
}

cone()
let dquestion = "プエルトリコ"
let dmondai = document.getElementById("dtext")

function done(){
    dmondai.textContent = dquestion
}

done()
let question = "この国はどこの国のでしょうか？"
let mondai = document.getElementById("question")

function doko(){
    mondai.textContent = question
}

doko()


const a = document.getElementById("a")

a.addEventListener("click", function(){
    if (confirm("ファイナルアンサー？")) {
        window.location.href = "https://motokiishihara17.github.io/MotokiIshihara17.fnd45/collect.html"
        //正解
    } else {
    }
    
})
const b = document.getElementById("b")

b.addEventListener("click", function(){
    if (confirm("ファイナルアンサー？")) {
        window.location.href = "https://motokiishihara17.github.io/MotokiIshihara17.fnd45/failed.html"
    } else {
    }
})
const c = document.getElementById("c")

c.addEventListener("click", function(){
    if (confirm("ファイナルアンサー？")) {
        window.location.href = "https://motokiishihara17.github.io/MotokiIshihara17.fnd45/failed.html"
    } else {
    }
})
const d = document.getElementById("d")

d.addEventListener("click", function(){
    if (confirm("ファイナルアンサー？")) {
        window.location.href = "https://motokiishihara17.github.io/MotokiIshihara17.fnd45/failed.html"
    } else {
    }
})

const fifty = document.getElementById("fiftyfifty");

fifty.addEventListener("click", function() {
    b.style.opacity = 0;
    c.style.opacity = 0;
    
})