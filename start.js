

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


const start = document.getElementById("start");
start.addEventListener("click", function (){
    const index = Math.floor(Math.random()*quizs.length)
    console.log(index)
    window.location.href = quizs[index];
})
