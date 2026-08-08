function openTab(tabId) {
    const tab = document.getElementById(tabId);
    const content = document.querySelector(`.tabcontent[data-tab="${tabId}"]`);
    if (!tab || !content) return;
    document.querySelectorAll(".tab")
        .forEach(t => t.classList.remove("selected"));
    tab.classList.add("selected");
    document.querySelectorAll(".tabcontent")
        .forEach(c => c.classList.remove("visible"));
    content.classList.add("visible");
}

document.querySelectorAll('.tab').forEach(tabbtn => {
    tabbtn.addEventListener("click",() => openTab(tabbtn.id));
});

document.querySelectorAll('.imageslider').forEach(slider => {
    const slides = slider.querySelector(".slides");
    const items = slider.querySelectorAll(".slidecontent");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    let index = 0;
    function updateSlider() {
        slides.style.transform = `translateX(-${index * 100}%)`;
        indicator.querySelectorAll("button").forEach((dot, i)=>{
            dot.classList.toggle("active", i === index);
        });
    }
    next.addEventListener("click", () => {
        index = (index + 1) % items.length;
        updateSlider();
    });
    prev.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length;
        updateSlider();
    });

    const indicator = slider.querySelector(".indicator");
    items.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.addEventListener("click", () => {
            index = i;
            updateSlider();
        });
        indicator.appendChild(dot);
    });
    updateSlider();
});
