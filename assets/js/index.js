const bar = document.getElementById("nav-toggler");
const menu = document.querySelector(".dropdown-menu");
//const navigation = document.getElementsByClassName("dropdown-menu");
function show(){
    if (menu.style.display = "flex"){
        bar.onclick = menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}

bar.onclick = show();



