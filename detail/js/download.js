const check=document.getElementById('agree');
const dlBtn=document.getElementById('downloadf');

const URL = location.pathname.split("/");
const appId = URL[URL.length-2]
let app = null;
//詳細ページのソフトを探す
for (let i = 0; i < APPLISTS.length; i++) {
    if (APPLISTS[i].name === appId) {
        app = APPLISTS[i];
        break;
    }
}

check.addEventListener('change', () => {
    if (check.checked) {
        box.disabled=false;
    } 
    else {
        box.disabled=true;
    } 
    console.log(check.checked);
});

dlBtn.addEventListener('click', () => {
    const link = document.createElement("a");
    link.href = `files/${app.name}.zip`;
    link.download = `${app.name}.zip`;
    link.click();
});