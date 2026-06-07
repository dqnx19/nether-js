export function log(message, type) {
    console.log(message);
}

export function logWarning(message) {
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

export function scrollUp(behavior = "smooth") {
    window.scrollTo({
        top: 0,
        behavior: behavior
    });
}

export function importJS(src) {
    const script = document.createElement('script');
    script.src = src;
    script.onerror = () => logError(`Failed to load script: ${src}`);
    document.head.appendChild(script);
};

export function importCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => logInfo(`Stylesheet loaded: ${href}`);
    link.onerror = () => logError(`Failed to load stylesheet: ${href}`);
    document.head.appendChild(link);
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