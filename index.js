window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
})

window.onscroll() = scrollProgress();

function scrollProgress(){
    const currentState = document.body.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentage = (currentState-pageHeight) * 100;
    
    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";

}