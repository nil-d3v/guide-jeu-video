const toggle = document.getElementById("camouflageToggle");

function setFavicon(url) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
}

setFavicon("img/favicon/favicon.ico");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.title = "EcoleDirecte";
        setFavicon("img/favicon/ecoledirecte.ico");
    } else {
        document.title = "Guide du Jeu Vidéo";
        setFavicon("img/favicon/favicon.ico");
    }
});