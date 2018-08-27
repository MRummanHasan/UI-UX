document.getElementById("mySidenav").style.width = "0";
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    document.getElementById("openbtn").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var w = document.getElementById("mySidenav").style.width;
    console.log("closing " + w);
    document.getElementById("main").style.marginLeft = "39px";
}


function toggleNav() {
    var w = document.getElementById('mySidenav').style.width;
    // console.log(w);
    if (w == '0px') {
        openNav();
    }
    else {
        closeNav();
    }
}

function dockNav() {
    console.log("dock dock dock");
    document.getElementById("main").style.marginLeft = "289px";
    // document.getElementById("imgName").src=".../res/unhideIcon.png";
}

function hideUnhide() {
    var t = document.getElementById('main').style.marginLeft;
    console.log(t);
    if (t == '0px') {
        dockNav();
    }
    else {
        closeNav();
    }
}
