const toggle = document.getElementById("camouflageToggle");
const originalTitle = document.title;

function setFavicon(url) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        document.head.appendChild(link);
    }
    link.href = url;
}

function applyCamouflage(enabled) {
    if (enabled) {
        document.title = "EcoleDirecte";
        setFavicon("/guide-jeu-video/img/favicon/ecoledirecte.ico");
    } else {
        document.title = originalTitle;
        setFavicon("/guide-jeu-video/img/favicon/favicon.ico");
    }
}

// --- Gestion du cookie ---
function setCookie(name, value, hours) {
    let expires = "";
    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// --- Initialisation ---
const camouflageCookie = getCookie("camouflage") === "true";
applyCamouflage(camouflageCookie);

if (toggle) {
    toggle.checked = camouflageCookie;
    toggle.addEventListener("change", () => {
        const isEnabled = toggle.checked;
        setCookie("camouflage", isEnabled, 1); // expire après 1h
        applyCamouflage(isEnabled);
    });
}