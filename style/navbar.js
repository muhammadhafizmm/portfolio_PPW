//navbar function
function tooglebtn1() {
    var btn = document.getElementById("mobile-menu-button");
    var nav = document.getElementById("navbar");
    var ops = document.getElementById("select");
    document.querySelector("html").classList.toggle("noscroll");
    btn.classList.toggle("active");
    ops.classList.toggle("active");
    nav.classList.toggle("active");
 };
 function lineover(j){
     var line = document.getElementsByClassName("nav-line");
     var sel = document.getElementsByClassName("nav-select");
         line[j].classList.add("active");
         sel[j].classList.add("active");
 };
 function lineout(j){
     var line = document.getElementsByClassName("nav-line");
     var sel = document.getElementsByClassName("nav-select");
         line[j].classList.remove("active");
         sel[j].classList.remove("active");
 }