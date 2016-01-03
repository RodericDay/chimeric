function currentScreenIndex() {
    return Math.round(window.scrollX/nav.scrollWidth);
}

function shiftScreen(n) {
    setScreen(currentScreenIndex()+n);
}

function setScreen(n) {
    var shift = n * nav.scrollWidth - window.scrollX;
    window.scrollBy(shift, 0);
    updateTrackers();
}

function updateTrackers() {
    title.textContent = screens[currentScreenIndex()].dataset.title;
    window.location.hash = currentScreenIndex();
}

function initialize() {
    if (window.location.hash) {
        var n = window.location.hash.slice(1);
        setScreen(n);
    }
    window.onscroll = updateTrackers;
}

var screens = document.getElementsByClassName("screen");
document.addEventListener("DOMContentLoaded", initialize);
