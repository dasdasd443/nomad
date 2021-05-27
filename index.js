let moon = document.querySelector(".dark-view");
moon.addEventListener("click", ()=>{
    moon.style.color = (moon.style.color == "black")? "white": "black";
    document.querySelector("#logo").style.color = (document.querySelector("#logo").style.color=="black")? "white":"black";
    document.querySelector(".logo-container").style.backgroundColor = (document.querySelector(".logo-container").style.backgroundColor == "white")?"black":"white";
    document.querySelector("#logo-img").style.opacity = (document.querySelector("#logo-img").style.opacity == 1)?0: 1;
    document.querySelector("#logo span").style.textShadow = "0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white, 0 0 50px white, 0 0 60px white";
});