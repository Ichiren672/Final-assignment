fetch("/com/header.html")
.then(res=>res.text())
.then(html=>{
    document.getElementById("header").innerHTML=html;
});
fetch("/com/aside.html")
.then(res=>res.text())
.then(html=>{
    document.getElementById("sidearea").innerHTML=html;
});
fetch("/com/footer.html")
.then(res=>res.text())
.then(html=>{
    document.getElementById("footarea").innerHTML=html;
});
window.addEventListener('scroll', () => {
    const top = document.querySelector(".gotop");
    if (window.scrollY >= 50) top.classList.add("show");
    else top.classList.remove("show");
});
document.querySelectorAll(".code-scr").forEach(box => {
    const textfile = box.dataset.path;
    
    if (textfile) {
        fetch(`./code/${textfile}`).then(res => res.text())
        .then(text => {
            text.split("\n").forEach(line => {
                const span = document.createElement("span");
                span.className = "code-line";
                span.textContent = line;
                box.appendChild(span);
            });
        });
    }
});
function copyCode(btn) {
    btn.classList.add("copy-now");
    btn.textContent="コピー中...";

    const codeBox=btn.closest(".codebox");
    const lines=codeBox.querySelectorAll(".code-line");
    let text="";
    lines.forEach(line => {
        text+=line.textContent+"\n";
    });
    navigator.clipboard.writeText(text);

    btn.classList.remove("copy-now");
    btn.textContent="コピー完了！";
    setTimeout(()=> {btn.textContent="コピー"},2000);
}