function displayEnglish(){
    document.getElementById("title").innerHTML = "Hello";
    document.getElementById("paragraph").innerHTML = "Text of paragraph";
}
function displayFrench(){
    document.getElementById("title").innerHTML = "Bonjour";
    document.getElementById("paragraph").innerHTML = "Text du paragraph";
}

function displayDarkMode() {
    document.getElementById("modetype").style.backgroundColor = "black";
    document.getElementById("modetype").style.color = "white";

}
function displayLightMode() {
    document.getElementById("modetype").style.backgroundColor = "white";
    document.getElementById("modetype").style.color = "black";
}
document.getElementById("entext").addEventListener("click",displayEnglish);
document.getElementById("frtext").addEventListener("click",displayFrench);
document.getElementById("d_mode").addEventListener("click",displayDarkMode);
document.getElementById("l_mode").addEventListener("click",displayLightMode);