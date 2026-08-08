fetch("./tos.html")
.then(res => res.text())
.then(txt => {
   document.getElementById('tos').innerHTML = txt
});