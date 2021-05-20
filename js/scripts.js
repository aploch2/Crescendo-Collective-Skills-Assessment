function MobileNavShow() {
    let w = document.documentElement.clientWidth || window.innerWidth;
    if(w <= 950) {
        let x = document.getElementById("primary-nav");
        let menuIcon = document.getElementById("menu-icon");
        let closeIcon = document.getElementById("close-icon");

        if (x.className === "primary-nav") {
          x.classList.add ("responsive-nav");
          menuIcon.style.display = "none";
          closeIcon.style.display = "block";
        } else {
          x.className = "primary-nav";
        }
        console.log('Show');
    }
}
function MobileNavHide() {
    let w = document.documentElement.clientWidth || window.innerWidth;
    if(w <= 950) {
        let x = document.getElementById("primary-nav");
        let menuIcon = document.getElementById("menu-icon");
        let closeIcon = document.getElementById("close-icon");

        if (x.className === "primary-nav responsive-nav") {
          x.classList.remove("responsive-nav");
          menuIcon.style.display = "block";
          closeIcon.style.display = "none";
        } else {
          x.className = "primary-nav";
        }
        console.log('Hide');
    }
}