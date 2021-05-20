function MobileNavToggle() {
    let w = document.documentElement.clientWidth || window.innerWidth;
    if(w <= 950) {
        var x = document.getElementById("primary-nav");
        if (x.className === "primary-nav") {
          x.className += " responsive-nav";
        } else {
          x.className = "primary-nav";
        }
        console.log('hello');
    }
  }