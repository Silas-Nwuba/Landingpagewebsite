var navLink = document.getElementById("navLink");
function showMenu(){
    navLink.style.right = "0";
}
function hideMenu(){
    navLink.style.right = "-200px";
}
const readMore = document.getElementById("readMore")
readMore.style.display = "none";
function readFunction(){
    if(readMore.style.display == "none")
    readMore.style.display = "block";
    else{
        readMore.style.display = "none";
    }
}