function displayNavBar(){
    let navbars = document.getElementById("nav-toggler");
    let navlist = document.querySelector("#navbar ul");

    let show = addEventListener('click', () => {
        navlist.children[0].style.display = "block";
        navlist.children[1].style.display = "block";
        navlist.children[2].style.display = "block";
        navlist.children[3].style.display = "block";
        navlist.children[4].style.display = "block";
        navlist.style.transition ="all 1s ease";
        setTimeout(hide, 6000);
    })
    
    function hide(){
        navlist.style.display = "none";
    }
    navbars.onclick = show;
}
