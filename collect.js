
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


const next = document.getElementById("next");
next.addEventListener("click", function (){
        const index = Math.floor(Math.random() * quizs.length )
        window.location.href = quizs[index]

})

const count = window.history.length;
console.log(count)

if (count >= 11) {
        window.location.href = "finish.html"
}
