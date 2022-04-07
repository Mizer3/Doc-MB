var voile = document.createElement("div");
var bt = document.querySelector(".burger");
var menu = document.querySelector(".menu");
voile.setAttribute("id", "voile");
document.getElementsByTagName("body")[0].appendChild(voile);
bt.addEventListener("click", function(){
    voile.style.display = "block";
    bt.classList.add("active");
    menu.classList.add("active");
});
voile.addEventListener("click", function(){
    voile.style.display = "none";
    bt.classList.remove("active");
    menu.classList.remove("active");
});