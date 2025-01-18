document.addEventListener("contextmenu", function(event){
    event.preventDefault();
});

document.onkeydown = function(e) {
    if (e.keyCode == 123) {  // F12 key
        return false;
    }
};
