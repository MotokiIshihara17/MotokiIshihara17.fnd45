
const quizs = [
    "final.html",
    "final2.html",
    "final3.html",
    "final4.html",
    "final5.html",
    "final6.html",
    "final7.html",
    "final8.html",
    "final9.html",
    "final10.html"
]



const start = document.getElementById("start");
start.addEventListener("click", function (){
    const index = Math.floor(Math.random()*quizs.length)
    console.log(index)
    window.location.href = quizs[index];
})
