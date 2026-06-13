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

export function importJSFromList(jsFilesList = []) {
    jsFilesList.forEach(file => {
        const script = document.createElement("script");
        script.src = file;
        script.defer = true;
        document.head.appendChild(script);
    });
}

export function importCSSFromList(cssFilesList = []) {
    cssFilesList.forEach(file => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = file;
        document.head.appendChild(link);
    });
}

export function createElement(elementName, appendTo = document.body) {
    const element = document.createElement(elementName);
    appendTo.appendChild(element);
    return element;
}

export function setContentOfHeader(content) {
    document.querySelector("header").innerHTML = content;
}

export function setContentOfMain(content) {
    document.querySelector("main").innerHTML = content;
}

export function setContentOfFooter(content) {
    document.querySelector("footer").innerHTML = content;
}