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

export function setFavicon(path = 'favicon.png') {
    const icon = document.querySelector("link[rel='icon']");
    const touch_icon = document.querySelector("link[rel='apple-touch-icon']");

    if (icon) {
        icon.href = path;
    } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = path;
        document.head.appendChild(link);
    }

    if (touch_icon) {
        touch_icon.href = path;
    } else {
        const link = document.createElement("link");
        link.rel = "apple-touch-icon";
        link.href = path;
        document.head.appendChild(link);
    }
}

export async function importJSFromList(jsFilesList = []) {
    for (const file of jsFilesList) {
        await importJS(file);
    }
}

export async function importCSSFromList(cssFilesList = []) {
    for (const file of cssFilesList) {
        await importCSS(file);
    }
}

export function injectCSS(content) {
    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
}

export function injectJS(content) {
    const script = document.createElement('script');
    script.textContent = content;
    document.head.appendChild(script);
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
    if (typeof selector === "string") selector = document.querySelector(selector);

    if (!selector) {
        console.error(`Selector not found on page. (nether.js - setHTML)`);
        return;
    }
    selector.innerHTML = `${content}`;
}

export function setText(selector, content) {
    if (typeof selector === "string") selector = document.querySelector(selector);

    if (!selector) {
        console.error(`Selector not found on page. (nether.js - setText)`);
        return;
    }
    selector.innerText = `${content}`;
}

export function setAttribute(selector, attribute, content) {
    if (typeof selector === "string") selector = document.querySelector(selector);

    if (!selector) {
        console.error(`Selector not found on page. (nether.js - setAttribute)`);
        return;
    }
    selector.setAttribute(attribute, content);
}


export function addClass(target, className) {
    if (typeof target === "string") target = document.querySelector(target);
    target.classList.add(className);
}

export function removeClass(target, className) {
    if (typeof target === "string") target = document.querySelector(target);
    target.classList.remove(className);
}

export function setClass(target, className) {
    if (typeof target === "string") target = document.querySelector(target);
    target.className = className;
}

export function addId(target, id) {
    if (typeof target === "string") target = document.querySelector(target);
    target.id = id;
}

export function removeId(target) {
    if (typeof target === "string") target = document.querySelector(target);
    target.removeAttribute("id");
}

export function setId(target, id) {
    if (typeof target === "string") target = document.querySelector(target);
    target.id = id;
}

export function redirect(url, timing) {
    setTimeout(() => {
        window.location.href = url;
    }, timing);
}

export function add(number1, number2) {
    return number1 + number2;
}

export function subtract(number1, number2) {
    return number1 - number2;
}

export function multiply(number1, number2) {
    return number1 * number2;
}

export function divide(number1, number2) {
    if (number2 === 0) {
        console.error("Cannot divide by zero. (nether.js - divide)");
    }
    return number1 / number2;
}

export function highlightSyntax(language, selector) {
    const LANGUAGES = {
        js: [
            { regex: /\b(const|let|var|function|return|if|else|for|while|async|await|class|new|import|export)\b/g, cls: "kw" },
            { regex: /("[^"]*"|'[^']*'|`[^`]*`)/g, cls: "str" },
            { regex: /\b(\d+)\b/g, cls: "num" },
            { regex: /(\/\/.*)/g, cls: "com" },
            { regex: /(\/\*[\s\S]*?\*\/)/g, cls: "com" }
        ],

        html: [
            { regex: /(<\/?[a-zA-Z0-9\-]+)/g, cls: "tag" },
            { regex: /\b([a-zA-Z\-]+)(=)/g, cls: "attr", type: "attr" },
            { regex: /"([^"]*)"/g, cls: "val" }
        ],

        css: [
            // id selector: #form, #login
            { regex: /(#[a-zA-Z][\w-]*)/g, cls: "css-id" },
            // class selector: .card, .list
            { regex: /(\.[a-zA-Z][\w-]*)/g, cls: "css-class" },
            // attribute selector name, e.g. [type=  (before the "=")
            { regex: /\[\s*([a-zA-Z-]+)\s*(=)/g, cls: "css-attr", type: "attr" },
            // attribute selector value, e.g. ="text"
            { regex: /="([^"]*)"/g, cls: "css-attrval" },
            // property name: a bare word directly followed by a colon
            { regex: /\b([a-zA-Z-]+)\b(?=\s*:)/g, cls: "css-prop" },
            // declaration value: whatever sits between ":" and the next ";" or "}"
            { regex: /(?<=:\s*)([^;{}]+?)(?=\s*[;}])/g, cls: "css-val" },
            // element selector: a bare word immediately leading into a "{"
            { regex: /\b([a-zA-Z][a-zA-Z0-9]*)\b(?=[^{};]*\{)/g, cls: "css-elem" }
        ]
    };

    const rules = LANGUAGES[language];
    if (!rules) {
        console.warn("Unknown language:", language);
        return;
    }

    const escapeHtml = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        const raw = el.textContent;

        // 1) Collect every match from every rule against the ORIGINAL text only
        const matches = [];
        rules.forEach(rule => {
            const flags = rule.regex.flags.includes('g') ? rule.regex.flags : rule.regex.flags + 'g';
            const re = new RegExp(rule.regex.source, flags);
            let m;
            while ((m = re.exec(raw)) !== null) {
                matches.push({ start: m.index, end: m.index + m[0].length, m, rule });
                if (m[0].length === 0) re.lastIndex++; // guard against zero-length infinite loop
            }
        });

        // 2) Sort by start position; on ties prefer the longer/earlier-declared rule
        matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

        // 3) Keep only non-overlapping matches, in original text order
        const chosen = [];
        let lastEnd = 0;
        for (const cand of matches) {
            if (cand.start >= lastEnd) {
                chosen.push(cand);
                lastEnd = cand.end;
            }
        }

        // 4) Rebuild the string in a single pass, escaping plain text as we go
        let output = '';
        let cursor = 0;
        for (const { start, end, m, rule } of chosen) {
            output += escapeHtml(raw.slice(cursor, start));

            if (rule.type === "attr") {
                // group 1 = attribute name, group 2 = "="
                output += `<span class="${rule.cls}">${escapeHtml(m[1])}</span>${escapeHtml(m[2])}`;
            } else if (m[1] !== undefined) {
                output += `<span class="${rule.cls}">${escapeHtml(m[1])}</span>`;
            } else {
                output += `<span class="${rule.cls}">${escapeHtml(m[0])}</span>`;
            }

            cursor = end;
        }
        output += escapeHtml(raw.slice(cursor));

        el.innerHTML = output;
    });

    // Inject the stylesheet once, not on every call
    if (!document.getElementById('syntax-highlight-style')) {
        const css = `
.tag { color: #3b82f6; font-weight: bold; }
.attr { color: #f97316; }
.val { color: #14532d; }

.kw  { color: #38bdf8; font-weight: bold; }
.str { color: #f97316; }
.num { color: #a3e635; }
.com { color: #94a3b8; font-style: italic; }

.css-elem    { color: #f8fafc; }
.css-id      { color: #a855f7; }
.css-class   { color: #f97316; }
.css-prop    { color: #22c55e; }
.css-val     { color: #f97316; }
.css-attr    { color: #f97316; }
.css-attrval { color: #22c55e; }
        `;
        const style = document.createElement('style');
        style.id = 'syntax-highlight-style';
        style.textContent = css;
        document.head.appendChild(style);
    }
}