const check=document.getElementById('agree');

check.addEventListener('change', () => {
    if (check.checked) {
        box.disabled=false;
    } 
    else {
        box.disabled=true;
    } 
    console.log(check.checked);
});