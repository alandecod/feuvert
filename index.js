const classeCache = document.querySelectorAll(".marque");
const cacheCache = document.querySelectorAll(".cache");


function toggle(){
    if(cacheCache.style.display === "none"){
        cacheCache.style.display = "block";
    }
    else{
        cacheCache.style.display = "none";
    };
}

classeCache.forEach(classe =>{
    classe.addEventListener("click",toggle)})


cacheCache.forEach(clsCacher =>{
    clsCacher.addEventListener("click",toggle)})
