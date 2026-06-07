export function log(message, type) {
    console.log(message);
}

export function logWarn(message) {
    console.warn(message);
}

export function logError(message) {
    console.error(message);
}

export function logInfo(message) {
    console.info(message);
}

export function alert(message) {
    window.alert(message);
}

export function importJS(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    })
};

export function importCSS(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
        document.head.appendChild(link);
    });
}

export function setTitle(title) {
    document.title = title;
}

export function setFavicon(iconUrl) {
    if (document.querySelector("link[rel='icon']")) {
        document.querySelector("link[rel='icon']").href = iconUrl;
    } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = iconUrl;
        document.head.appendChild(link);
    }
}