// scroll-up animation in home
const arrow = document.querySelector(".scroll-up");
const client = document.querySelector(".navbar");
const clientOptions = {
    rootMargin: ""
}
const pageObsever = new IntersectionObserver(function(
    entries, 
    clientObsever
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                arrow.classList.add("active");
            } else{
                arrow.classList.remove("active")
            }
        })
    }, clientOptions);
pageObsever.observe(client);



// porto animation in home

function portoHover(j){
    var overlay = document.getElementsByClassName("overlay");
    for (var i = 0; i < overlay.length; i++){
        overlay[i].classList.add("active");
    }
    overlay[j].classList.remove("active");
}
function portoOut(j){
    var overlay = document.getElementsByClassName("overlay");
    for (var i = 0; i < overlay.length; i++){
        overlay[i].classList.remove("active");
    }
}