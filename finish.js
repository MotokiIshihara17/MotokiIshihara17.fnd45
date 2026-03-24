const start = document.getElementById("start");
start.addEventListener("click", function (){
    history.go(-(history.length - 1))
})
