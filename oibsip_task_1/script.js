window.addEventListener("scroll",()=>{
    document.querySelector("header>.top-content>.navigation").classList.toggle("sticky",window.scrollY > 0);
});