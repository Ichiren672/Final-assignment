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

function loadApp() {
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
    const title = document.getElementById('title');
    const version = document.getElementById('ver')
    const tag = document.getElementById('tag');
    const tagdata = app.tag;
    title.textContent = app.name;
    version.textContent = `${app.version.Major}.${app.version.Minor}.${app.version.Patch}`;
    tag.replaceChildren();
    if (tagdata.main!=null)
    tagdata.main.forEach(x => {
        let span = document.createElement("span");
        span.textContent = x;
        span.style.backgroundColor = "lightcoral";
        tag.appendChild(span);
    });
    if (tagdata.code!=null)
    tagdata.code.forEach(x => {
        let span = document.createElement("span");
        span.textContent = x;
        span.style.backgroundColor = "cornflowerblue";
        tag.appendChild(span);
    });
    if (tagdata.environment!=null)
    tagdata.environment.forEach(x => {
        let span = document.createElement("span");
        span.textContent = x;
        span.style.backgroundColor = "yellow";
        tag.appendChild(span);
    });
    if (tagdata.other!=null)
    tagdata.other.forEach(x => {
        let span = document.createElement("span");
        span.textContent = x;
        tag.appendChild(span);
    });
}

const box=document.getElementById('downloadf');
box.addEventListener('click', () => {
    fetch("./software01.txt");
});

loadApp();