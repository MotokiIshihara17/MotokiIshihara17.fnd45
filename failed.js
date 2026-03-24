const button = document.getElementById("return");
button.addEventListener("click", function (){
    history.go(-(history.length - 1))
})
