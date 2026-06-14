import { createElement, setFavicon, importCSSFromList, importJSFromList, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importJS } from "./nether.js";

window.showFunctions = showFunctions
window.showHome = showHome

importCSSFromList([
    "https://modern-web.nether.click/css/fonts.css",
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

setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="favicon.png" alt="Nether.js Logo">
    </button>
`)

setContentOfFooter(`
    <button onclick="showHome()">
        <img src="favicon.png" alt="">
    </button>
`)

function showHome() {
    scrollUp()
    setTitle("Nether.js")
    setContentOfMain(`
        <h1>Nether.js</h1>
        <section>
            <h2>Links</h2>
            <div class="grouped-list">
                <button class="item" onclick="showFunctions()">Functions</button>
            </div>
        </section>
    `)
}

function showFunctions() {
    scrollUp()
    setTitle("Nether.js Functions")
    setContentOfMain(`
        
    `)
}

function showFunction_log() {
    scrollUp()
    setTitle("log - Nether.js Functions")
    setContentOfMain(`
        <h1>log</h1>

    `)
}

function showFunction_logWarning() {
    
}

function showFunction_logError() {

}

function showFunction_logInfo() {

}

showHome()

importJS("ddd.ks")