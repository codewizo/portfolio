//const bar = document.getElementsByClassName("bar");
//const navigation = document.getElementsByClassName("dropdown-menu");
function show(){
    document.querySelector(".dropdown-menu").style.display = "flex";
    document.querySelector(".dropdown-menu").style.transition = "all 0.5s ease";
    setTimeout(hide, 4000);
}
function hide(){
    document.querySelector(".dropdown-menu").style.display = "none";
}


