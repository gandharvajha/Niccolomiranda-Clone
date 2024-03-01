var navtogleopen= document.getElementById("navtogleopen");
var navtogleclose= document.getElementById("navtogleclose");
var navbar=document.getElementById("nav-menu");

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl= gsap.timeline()
tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})



navtogleopen.addEventListener("click", function() {
    if (navbar.style.display === "none") {
        navbar.style.display = "block"; 
        navbar.style.backgroundColor = "rgb(0 0 0 / 85%)"; 
        navbar.style.marginTop = "-109px"; 
        navbar.style.padding= " 200px"; 
        navbar.style.color= "#ffffff";
        navbar.style.textAlign= "center"; 
        navbar.style.fontSize= "3.5rem"; 
       
        navtogleclose.style.fontSize = "2.5rem";
        // navbar.classList.add('bar');
        navtogleclose.style.display = "block";
        navtogleclose.style.color = "#ffffff";
        navtogleclose.style.zIndex = "9999";
        navtogleopen.style.display = "none";

       
    } else {
        navbar.style.display = "none"; 
        navtogleclose.style.display = "none";
        navtogleopen.style.display = "block";
    }
});

navtogleclose.addEventListener("click",function(){
    if(navbar.style.display === "block"){
        navbar.style.display = "none";
        navtogleopen.style.display = "block";
        navtogleclose.style.display = "none";
    }
})
