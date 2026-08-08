const list = document.getElementById("list");
const topBTN = document.querySelectorAll('.jumptop');
const prevBTN = document.querySelectorAll('.jumpprev');
const nextBTN = document.querySelectorAll('.jumpnext');
const bottomBTN = document.querySelectorAll('.jumpbottom');
const APPLISTS = [
        {
            "name": "software01",
            "version": {
                "Major": 1,
                "Minor": 1,
                "Patch": 3
            },
            "image": "test.JPG",
            "description": "ソフトの説明01",
            "dl": 2354,
            "tag": {
                "main": ["game"],
                "code": ["C++"],
                "environment": ["Windows"],
                "other": []
            }
        },
        {
            "name": "software02",
            "version": {
                "Major": 2,
                "Minor": 0,
                "Patch": 0
            },
            "image": "test.JPG",
            "description": "ソフトの説明02",
            "dl": 55,
            "tag": {
                "main": ["system"],
                "code": ["Java"],
                "environment": ["Linux","Mac"],
                "other": ["server"]
            }
        },
        {
            "name": "software03",
            "version": {
                "Major": 12,
                "Minor": 1,
                "Patch": 322
            },
            "image": "test.JPG",
            "description": "ソフトの説明03",
            "dl": 0,
            "tag": {
                "main": ["system"],
                "code": ["C++"],
                "environment": ["Windows"],
                "other": ["free","OSS"]
            }
        },
        {
            "name": "software04",
            "version": {
                "Major": 0,
                "Minor": 1,
                "Patch": 0
            },
            "image": "test.JPG",
            "description": "ソフトの説明04",
            "dl": 0,
            "tag": {
                "main": ["system"],
                "code": ["Golang"],
                "environment": ["Windows","Mac","Linux"],
                "other": []
            }
        },
        {
            "name": "software05",
            "version": {
                "Major": 5,
                "Minor": 0,
                "Patch": 10
            },
            "image": "test.JPG",
            "description": "ソフトの説明05",
            "dl": 14854,
            "tag": {
                "main": ["game"],
                "code": ["Java"],
                "environment": ["Windows","Mac","Linux"],
                "other": ["Plugin","free","OSS","Network","API"]
            }
        },
    ]
let currentpage = 0;
let condition = {};
let maxpage = 0;
function get() {

    const AVIABLEDISPNUM = 2;//1ページあたりの表示件数

    let dispnum = 0;
    list.innerHTML="";
    maxpage = Math.ceil(APPLISTS.length/AVIABLEDISPNUM)-1;
    for (let i=currentpage*AVIABLEDISPNUM;i<(currentpage+1)*AVIABLEDISPNUM;i++) {
        const item = APPLISTS[i];
        if (item == undefined) break;
        const out = document.createElement("div");
        out.className = "list";
        let data = document.createElement("a");
        data.className = "title";
        data.textContent = item.name;
        data.href = `./detail/${item.name}/`;
        out.appendChild(data);

        data = document.createElement("div");
        data.className = "version";
        data.textContent = `${item.version.Major}.${item.version.Minor}.${item.version.Patch}`;
        out.appendChild(data);

        data = document.createElement("div");
        data.className = "image";
        let img = document.createElement("img")
        img.src = `./img/${item.image}`;
        data.appendChild(img);
        out.appendChild(data);

        data = document.createElement("div");
        data.className = "sub";
        data.textContent = item.description;
        out.appendChild(data);

        data = document.createElement("div");
        data.className = "dl";
        data.textContent = item.dl;
        out.appendChild(data);

        data = document.createElement("div");
        data.className = "tag";
        const tagdata = item.tag;
        if (tagdata.main!=null)
        tagdata.main.forEach(x => {
            let span = document.createElement("span");
            span.textContent = x;
            span.style.backgroundColor = "lightcoral";
            data.appendChild(span);
        });
        if (tagdata.code!=null)
        tagdata.code.forEach(x => {
            let span = document.createElement("span");
            span.textContent = x;
            span.style.backgroundColor = "cornflowerblue";
            data.appendChild(span);
        });
        if (tagdata.environment!=null)
        tagdata.environment.forEach(x => {
            let span = document.createElement("span");
            span.textContent = x;
            span.style.backgroundColor = "yellow";
            data.appendChild(span);
        });
        if (tagdata.other!=null)
        tagdata.other.forEach(x => {
            let span = document.createElement("span");
            span.textContent = x;
            data.appendChild(span);
        });
        
        out.appendChild(data);
        list.appendChild(out);

        dispnum++;
    }
    const num = document.querySelectorAll('.pageinfo');
    num.forEach(fordisp => {
        if (APPLISTS.length === 0) {
            fordisp.textContent = "0件中 0 - 0件表示";
        } else {
            fordisp.textContent =
            `${APPLISTS.length}件中 ${currentpage*AVIABLEDISPNUM+1} - ${currentpage*AVIABLEDISPNUM+dispnum}件表示`;
        }
    });
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