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
    script.onload = () => console.log(`Script (JS) loaded: ${src} (nether.js - importJS)`)
    script.onerror = () => console.error(`Script (JS) Failed to load: ${src} (nether.js - importJS)`);
    document.head.appendChild(script);
}

export function importCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => console.log(`Stylesheet (CSS) loaded: ${href} (nether.js - importCSS)`);
    link.onerror = () => console.error(`Stylesheet (CSS) Failed to load: ${href} (nether.js - importCSS)`);
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

export async function importJSFromList(jsFilesList = []) {
    jsFilesList.forEach(file => {
        importJS(file)
    });
}

export async function importCSSFromList(cssFilesList = []) {
    cssFilesList.forEach(file => {
        importCSS(file)
    });
}

export function createElement(elementName, appendTo = document.body) {
    const element = document.createElement(elementName);

    appendTo.appendChild(element);
    return element;
}

export function setContentOfHeader(content) {
    let header = document.querySelector("header");
    
    if (!header) {
        console.info("HEADER created because it did not exist. (nether.js - setContentOfHeader)");
        header = document.createElement("header");
        document.body.appendChild(header);
    }
    header.innerHTML = content;
}

export function setContentOfMain(content) {
    let main = document.querySelector("main");
    
    if (!main) {
        console.info("MAIN created because it did not exist. (nether.js - setContentOfMain)");
        main = document.createElement("main");
        document.body.appendChild(main);
    }
    main.innerHTML = content;
}

export function setContentOfFooter(content) {
    let footer = document.querySelector("footer");

    if (!footer) {
        console.info("FOOTER created because it did not exist. (nether.js - setContentOfFooter)");
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }
    footer.innerHTML = content;
}

export function getProtocol() {
    return location.protocol
}

export function getCpu() {
    return navigator.hardwareConcurrency
}

export function getMemory() {
    return navigator.deviceMemory
}

export function getURLParam(name) {
    const param = new URLSearchParams(location.search).get(name);

    if (param === null) {
        console.error(`URL Param "${name}" not found in search bar. (nether.js - getURLParam)"`)
        return
    } else {
        return param
    }
}

export function setHTML(selector, content) {
    const setHTML_selector = document.querySelector(selector);

    if (setHTML_selector) {
        console.error(`Selector "${selector}" not found on page. (nether.js - setHTML)"`)
        return
    } else {
        setHTML_selector.innerHTML = `${content}`
    }
}

export function setText(selector, content) {
    const setText_selector = document.querySelector(selector)

    if (setText_selector) {
        console.error(`Selector "${selector}" not found on page. (nether.js - setText)"`)
        return
    } else {
        document.querySelector(selector).innerText = `${content}`
    }
}

export function setAttribute(selector, attribute, content) {
    if (!document.querySelector(selector)) {
        console.error(`Selector ${selector} not found on page (nether.js - setAttribute)`);
        return;
    } else {
        document.querySelector(selector)[attribute] = content;
    }
}