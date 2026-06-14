function printWelcome() {
    console.log("thank you for using nether.js");
    console.log("learn more at https://js.nether.click/")
    console.log("Browser: " + navigator.userAgent)
    console.log("Origin: " + window.location.origin);
    fetch("https://api.ipify.org?format=json")
        .then(r => r.json())
        .then(d => console.log("IP:", d.ip));

    console.log("language: " + navigator.language)

}

printWelcome()

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
    script.onerror = () => console.error(`Failed to load script: ${src} (message from nether.js)`);
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
    const icon = document.querySelector("link[rel='icon']");
    const touch_icon = document.querySelector("link[rel='apple-touch-icon']");

    if (icon) {
        icon.href = iconUrl;
    } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = iconUrl;
        document.head.appendChild(link);
    }

    if (touch_icon) {
        touch_icon.href = iconUrl;
    } else {
        const link = document.createElement("link");
        link.rel = "apple-touch-icon";
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
    if (document.querySelector("header")) {
        document.querySelector("header").innerHTML = content;
    } else {
        document.body.appendChild(document.createElement("header"));
        document.querySelector("header").innerHTML = content;
    }
}

export function setContentOfMain(content) {
    if (document.querySelector("main")) {
        document.querySelector("main").innerHTML = content;
    } else {
        document.body.appendChild(document.createElement("main"));
        document.querySelector("main").innerHTML = content;
    }
}

export function setContentOfFooter(content) {
    if (document.querySelector("footer")) {
        document.querySelector("footer").innerHTML = content;
    } else {
        document.body.appendChild(document.createElement("footer"));
        document.querySelector("footer").innerHTML = content;
    }
}

export function getProtocol() {
    return location.protocol
}

export function getCpu() {
    return navigator.hardwareConcurrency
}