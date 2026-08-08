const check=document.getElementById('agree');
const sendbox=document.getElementById('send');

check.addEventListener('change', () => {
    if (check.checked) {
        sendbox.classList.add('agreed');
        sendbox.disabled=false;
    } 
    else {
        sendbox.classList.remove('agreed');
        sendbox.disabled=true;
    } 
});
