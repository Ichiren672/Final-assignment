const listbox = document.getElementById('info');
fetch("/api/infos")
.then(res => res.json())
.then(infolists => {
    if (infolists.length == 0) listbox.textContent = "まだ何もない...";
    else {
        listbox.replaceChildren();
        infolists.forEach(infolist => {
            let dataparent = document.createElement("a");
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
})