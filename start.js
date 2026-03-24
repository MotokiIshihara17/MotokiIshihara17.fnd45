
const quizs = [
    "MotokiIshihara17.fnd45/final.html",
    "MotokiIshihara17.fnd45/final2.html",
    "MotokiIshihara17.fnd45/final3.html",
    "MotokiIshihara17.fnd45/final4.html",
    "MotokiIshihara17.fnd45/final5.html",
    "MotokiIshihara17.fnd45/final6.html",
    "MotokiIshihara17.fnd45/final7.html",
    "MotokiIshihara17.fnd45/final8.html",
    "MotokiIshihara17.fnd45/final9.html",
    "MotokiIshihara17.fnd45/final10.html"
]



const start = document.getElementById("start");
start.addEventListener("click", function (){
    const index = Math.floor(Math.random()*quizs.length)
    console.log(index)
    window.location.href = quizs[index];
})
