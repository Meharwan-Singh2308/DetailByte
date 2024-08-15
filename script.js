let menuIcon = document.querySelector(".menuIcon");
let humburgerMenu = document.querySelector(".humburgerMenu");


menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle("activeMenu");
    if(menuIcon.classList.contains("activeMenu")){
        humburgerMenu.style.right = "0%"
    }else{
        humburgerMenu.style.right = "-100%"

    }
})

