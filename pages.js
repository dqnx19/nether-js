import { createElement, setFavicon, importCSSFromList, importJSFromList } from "./nether.js";

window.showFunctions = showFunctions
window.showHome = showHome

importCSSFromList([
    "https://modern-web.nether.click/css/elements/all.css",
    "https://modern-web.nether.click/css/elements/body.css",
    "https://modern-web.nether.click/css/elements/header.css",
    "https://modern-web.nether.click/css/elements/main.css",
    "https://modern-web.nether.click/css/elements/footer.css",
    "https://modern-web.nether.click/css/elements/section.css",
    "https://modern-web.nether.click/css/elements/h1.css",
    "https://modern-web.nether.click/css/elements/h2.css",
    "https://modern-web.nether.click/css/components/logo.css",
    "https://modern-web.nether.click/css/components/footer-bar.css",
    "https://modern-web.nether.click/css/components/grouped-list.css",
    "https://modern-web.nether.click/css/components/app-drawer.css"
]);

importJSFromList([
    "https://modern-web.nether.click/js/components/footer-bar.js"
])

setFavicon("favicon.png");

const header = createElement("header");
const main = createElement("main");
const footer = createElement("footer");

header.innerHTML = `
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="favicon.png" alt="Nether.js Logo">
    </button>
`;

footer.innerHTML = `
    <button onclick="showHome()">
        <img src="favicon.png" alt="">
    </button>
`;

function showHome() {
    main.innerHTML = `
        <h1>Nether.js</h1>
        <section>
            <h2>Links</h2>
            <div class="grouped-list">
                <button class="item" onclick="showFunctions()">Functions</button>
            </div>
        </section>
    `;
}

function showFunctions() {
    main.innerHTML = `
        <h1>Function</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showFunction_"></button>
            </div>
        </section>
    `;
}

function showFunction_log() {

}

function showFunction_logWarning() {
    
}

function showFunction_logError() {

}

function showFunction_logInfo() {

}

showHome()