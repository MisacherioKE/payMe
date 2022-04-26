"use strict";
window.oncontextmenu =()=>{
    return false;
}

// Logo
document.getElementById("logo").src ="/images/pillarsLogo.png";
document.getElementById("logo").style.height ="70px";


// Navbar
document.getElementById("navBar").style.display ="inline";
document.getElementById("navBar").style.display ="flex";
document.getElementById("navBar").style.alignItems ="center";
document.getElementById("navBar").style.justifyContent ="space-evenly";
document.getElementById("navBar").style.width ="100%";
document.getElementById("navBar").style.height ="10vh";
document.getElementById("navBar").style.backgroundColor ="lightblue";
document.getElementById("navBar").style.position = "fixed";
document.getElementById("navBar").style.zIndex ="100";



// Items
document.getElementById("home").style.textDecoration ="none";
document.getElementById("home").style.color ="green";
document.getElementById("home").style.fontSize ="18px";

document.getElementById("whoWe").style.textDecoration ="none";
document.getElementById("whoWe").style.color ="green";
document.getElementById("whoWe").style.fontSize ="18px";

document.getElementById("whatWe").style.textDecoration ="none";
document.getElementById("whatWe").style.color ="green";
document.getElementById("whatWe").style.fontSize ="18px";

document.getElementById("contact").style.textDecoration ="none";
document.getElementById("contact").style.color ="green";
document.getElementById("contact").style.fontSize ="18px";

document.getElementById("donate").style.textDecoration ="none";
document.getElementById("donate").style.color ="green";
document.getElementById("donate").style.fontSize ="18px";

document.getElementById("partners").style.textDecoration ="none";
document.getElementById("partners").style.color ="green";
document.getElementById("partners").style.fontSize ="18px";

document.getElementById("team").style.textDecoration ="none";
document.getElementById("team").style.color ="green";
document.getElementById("team").style.fontSize ="18px";

// Text
document.getElementById("text").innerHTML ="Your Payment Is Long Overdue!";
document.getElementById("text").style.color ="red"
document.getElementById("paytext").innerHTML ="Kindly Pay Your Developer!";
document.getElementById("mpesa").innerHTML ="Mpesa Number: 0700796985";