
const quizs = [
    "file:///c%3A/Users/1633865/Desktop/final/final.html",
    "file:///c%3A/Users/1633865/Desktop/final/final2.html",
    "file:///c%3A/Users/1633865/Desktop/final/final3.html",
    "file:///c%3A/Users/1633865/Desktop/final/final4.html",
    "file:///c%3A/Users/1633865/Desktop/final/final5.html",
    "file:///c%3A/Users/1633865/Desktop/final/final6.html",
    "file:///c%3A/Users/1633865/Desktop/final/final7.html",
    "file:///c%3A/Users/1633865/Desktop/final/final8.html",
    "file:///c%3A/Users/1633865/Desktop/final/final9.html",
    "file:///c%3A/Users/1633865/Desktop/final/final10.html"
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