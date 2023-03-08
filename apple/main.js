function enSite() {
    document.getElementById("allWebsiteEn").style.visibility= "visible";
    document.getElementById("allWebsiteEn").style.position= "relative";  
    document.getElementById("allWebsiteAr").style.visibility = "hidden";
    document.getElementById("allWebsiteAr").style.position = "absolute";
    document.getElementById("allWebsiteAr").style.width = "0vw";
    document.getElementById("allWebsiteAr").style.height = "0vh";



}
function arSite() {
    document.getElementById("allWebsiteAr").style.visibility = "visible";
    document.getElementById("allWebsiteEn").style.visibility= "hidden"; 
    document.getElementById("allWebsiteEn").style.position = "absolute";
    document.getElementById("allWebsiteAr").style.position= "relative";  
    document.getElementById("allWebsiteAr").style.width = "100vw";
    document.getElementById("allWebsiteAr").style.height = "100vh";


}