
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


const next = document.getElementById("next");
next.addEventListener("click", function (){
        const index = Math.floor(Math.random() * quizs.length )
        window.location.href = quizs[index]

})

const count = window.history.length;
console.log(count)

if (count === 11) {
        window.location.href = "file:///c%3A/Users/1633865/Desktop/final/finish.html"
}
