let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let content = document.querySelector(".mohamed");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value*3 + "px";
    mountains3.style.top = value*2 +"px";
    mountains4.style.top = value*1.5 +"px";
    river.style.top = value +"px";
    boat.style.top = value +"px";
    boat.style.left = value*3 +"px";
    content.style.fontSize = value + "px";
    if(scrollY > 76){
        content.style.fontSize = 67 + "px";
        content.style.position = "fixed";
        if(scrollY >= 450){
            content.style.display = "none";
        }
        else{
            content.style.display = "block";
        }
        if(scrollY >= 127){
            document.querySelector(".main").style.background = "linear-gradient(to top,#376281, #10001f)";
        }
        else{
            document.querySelector(".main").style.background = "linear-gradient(to top,#200016, #10001f)";
        }
    }
};