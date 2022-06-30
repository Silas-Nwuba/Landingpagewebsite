var navLink = document.getElementById("navLink");
function showMenu() {
    navLink.style.right = "0";
}
function hideMenu() {
    navLink.style.right = "-200px";
}
var contentText1 = document.getElementById('contenttext1');
contentText1.style.display = "none";
const contentText2 = document.getElementById("contenttext2");
contentText2.style.display = "none";
const contentText3 = document.getElementById("contenttext3");
contentText3.style.display = "none";
function facultyIcon(x) {
    const contentHideandShow = document.getElementById("contenttext1");
    const icon = document.getElementById("icon1");
    if (contentHideandShow.style.display === "none") {
        contentHideandShow.style.display = "block";
        x.classList.toggle = ("fa-chevron-dowm");
    }
    else {
        contentHideandShow.style.display = "none";
        x.classList.toggle("fa-chevron-right");
    }
}
function personalizeIcon(x) {
    const contentHideandShow = document.getElementById("contenttext2");
    const icon = document.getElementById("icon2");
    if (contentHideandShow.style.display === "none") {
        contentHideandShow.style.display = "block";
        x.classList.toggle = ("fa-chevron-dowm");
    }
    else {
        contentHideandShow.style.display = "none";
        x.classList.toggle("fa-chevron-right");

    }
}
function Interdisciplinarity(x) {
    const contentHideandShow = document.getElementById("contenttext3");
    const icon = document.getElementById("icon3");
    if (contentHideandShow.style.display === "none") {
        contentHideandShow.style.display = "block";
        x.classList.toggle = ("fa-chevron-dowm");
    }
    else {
        contentHideandShow.style.display = "none";
        x.classList.toggle("fa-chevron-right");
    }
}
