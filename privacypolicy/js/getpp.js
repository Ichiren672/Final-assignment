fetch("./pp.html")
.then(res => res.text())
.then(txt => {
   document.getElementById('pp').innerHTML = txt
});