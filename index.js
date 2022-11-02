const classeCache = document.querySelectorAll(".marque");
const cacheCache = document.querySelectorAll(".cache");


function toggle(){
    cacheCache.style.display;
    if(cacheCache.style.display != "none"){
        cacheCache.style.display = "none";
    }
    else{
        cacheCache.style.display = "block";
    }
};
classeCache.onclick = toggle;
