fetch("/Final-assignment/com/header.html")
.then(res=>res.text())
.then(html=>{
    document.getElementById("header").innerHTML=html;
});
fetch("/Final-assignment/com/aside.html")
.then(res=>res.text())
.then(html=>{
    document.getElementById("sidearea").innerHTML=html;
});
fetch("/Final-assignment/com/footer.html")
.then(res=>res.text())
.then(html=>{
    document.getElementById("footarea").innerHTML=html;
});
window.addEventListener('scroll', () => {
    const top = document.querySelector(".gotop");
    if (window.scrollY >= 50) top.classList.add("show");
    else top.classList.remove("show");
});
