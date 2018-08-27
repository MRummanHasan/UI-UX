document.getElementById("mySidenav").style.width = "0";
function openNav() {
    // closing nav2
    document.getElementById("mySidenavTwo").style.width = "0";
    var w = document.getElementById("mySidenavTwo").style.width;
    console.log("closing nav2");
    document.getElementById("mainBody").style.marginLeft = "39px";

    // opening nav1
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mainBody").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    document.getElementById("openbtn").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var w = document.getElementById("mySidenav").style.width;
    console.log("closing nav1");
    document.getElementById("mainBody").style.marginLeft = "39px";
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
    document.getElementById("mainBody").style.marginLeft = "289px";
    // document.getElementById("imgName").src=".../res/unhideIcon.png";
}

function hideUnhide() {
    var t = document.getElementById('mainBody').style.marginLeft;
    console.log(t);
    if (t == '0px') {
        dockNav();
    }
    else {
        closeNav();
    }
}
////////////////////// SIDE NAVBAR TWO ////////////////////////////
document.getElementById("mySidenavTwo").style.width = "0";
function openNavTwo() {
    // closing One
    document.getElementById("mySidenav").style.width = "0";
    var w = document.getElementById("mySidenav").style.width;
    console.log("closing " + w);
    document.getElementById("mainBody").style.marginLeft = "39px";

    // opening second
    document.getElementById("mySidenavTwo").style.width = "250px";
    document.getElementById("mainBody").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    document.getElementById("openbtn").style.display = "block";
}
function closeNavTwo() {
    document.getElementById("mySidenavTwo").style.width = "0";
    var w = document.getElementById("mySidenavTwo").style.width;
    console.log("closing " + w);
    document.getElementById("mainBody").style.marginLeft = "39px";
}
function toggleNavTwo() {
    var w = document.getElementById('mySidenavTwo').style.width;
    if (w == '0px')
        openNavTwo();
    else
        closeNavTwo();
}


function dockNavTwo() {
    console.log("dock2 dock2 dock2");
    document.getElementById("mainBody").style.marginLeft = "289px";
    // document.getElementById("imgName").src=".../res/unhideIcon.png";
}
function hideUnhideTwo() {
    var t = document.getElementById('mainBody').style.marginLeft;
    console.log(t);
    if (t == '0px') {
        dockNavTwo();
    }
    else {
        closeNavTwo();
    }
}