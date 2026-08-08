const INFOLISTS=[
    {
        "id": 1,
        "date": "2026-08-01",
        "category": "site",
        "title": "サイト設立",
        "description": "サイトの運用をスタートしました。"
    },
    {
        "id": 1,
        "date": "2026-08-08",
        "category": "update",
        "title": "software01の更新",
        "description": "software01の脆弱性を修正しました。"
    }
];

const listbox = document.getElementById('info');
if (INFOLISTS.length == 0) listbox.textContent = "まだ何もない...";
else {
    listbox.textContent = "";
    INFOLISTS.forEach(infolist => {
        let dataparent = document.createElement("div");
        dataparent.href = `./infomation/${infolist.id}/`;
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
        listbox.appendChild(dataparent);
    });
}