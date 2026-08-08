const list = document.getElementById("allinfo");
const topBTN = document.querySelectorAll('.jumptop');
const prevBTN = document.querySelectorAll('.jumpprev');
const nextBTN = document.querySelectorAll('.jumpnext');
const bottomBTN = document.querySelectorAll('.jumpbottom');
let currentpage = 0;
let condition = {};
let maxpage = 0;
function get() {
    list.replaceChildren();
    fetch("/api/infos/all")
    .then(res => res.json())
    .then(infolists => {
        const AVIABLEDISPNUM = 20;
        let dispnum = 0;
        maxpage = Math.ceil(infolists.length/AVIABLEDISPNUM)-1;
        for (let i=currentpage*AVIABLEDISPNUM;i<(currentpage+1)*AVIABLEDISPNUM;i++) {
            let infolist = infolists[i];
            if (infolist == undefined) break;
            let dataparent = document.createElement("a");
            dataparent.href = `./${infolist.id}/`;
            let data = document.createElement("div");
            data.textContent = infolist.date;
            dataparent.appendChild(data);

            data = document.createElement("div");
            data.textContent = infolist.category;
            dataparent.appendChild(data);
            
            data = document.createElement("div");
            data.textContent = infolist.title;
            dataparent.appendChild(data);

            data = document.createElement("div");
            data.textContent = infolist.description;
            dataparent.appendChild(data);
            list.appendChild(dataparent);

            dispnum++;
        }
        const num = document.querySelectorAll('.pageinfo');
        num.forEach(fordisp => {
            if (infolists.length === 0) {
                fordisp.textContent = "0件中 0 - 0件表示";
            } else {
                fordisp.textContent =
                `${infolists.length}件中 ${currentpage*AVIABLEDISPNUM+1} - ${currentpage*AVIABLEDISPNUM+dispnum}件表示`;
            }
        });
    })
    .then(() => {
        if (currentpage!=0) {
            topBTN.forEach(btn => class_aviable(btn,true));
            prevBTN.forEach(btn => class_aviable(btn,true));
        } else {
            topBTN.forEach(btn => class_aviable(btn,false));
            prevBTN.forEach(btn => class_aviable(btn,false));
        }
        if (currentpage<maxpage) {
            nextBTN.forEach(btn => class_aviable(btn,true));
            bottomBTN.forEach(btn => class_aviable(btn,true));
        } else {
            nextBTN.forEach(btn => class_aviable(btn,false));
            bottomBTN.forEach(btn => class_aviable(btn,false));
        }
    });
}
function class_aviable(x,flg) {
    if (flg) x.classList.add('aviable');
    else x.classList.remove('aviable');
}

get();
topBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentpage!=0) {
            currentpage = 0;
            get();
        }
    });
});
prevBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentpage!=0) {
            currentpage--; 
            get();
        }
    });
});
nextBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentpage<maxpage) {
            currentpage++; 
            get();
        }
    });
});
bottomBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentpage<maxpage) {
            currentpage = maxpage;
            get();
        }
    });
});