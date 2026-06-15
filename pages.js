import { createElement, setFavicon, importCSSFromList, importJSFromList, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importJS, setAttribute } from "./nether.js";

window.showFunctions = showFunctions
window.showHome = showHome

await importCSSFromList([
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

await importJSFromList([
    "https://modern-web.nether.click/js/components/footer-bar.js"
])

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://modern-web.nether.click/js/components/app-drawer.js"
])

await setFavicon("favicon.png");

await setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="favicon.png" alt="Nether.js Logo">
    </button>
`)

await setContentOfFooter(`
    <button onclick="showHome()">
        <img src="favicon.png" alt="">
    </button>
`)

setAttribute("html", "lang", "en")

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
    setTitle("Functions - Nether.js")
    setContentOfMain(`
        <h1>Functions</h1>
        <!-- <section>
            <div class="grouped-list">
                <button class="item" onclick="showFunction_log()">log</button>
                <button class="item" onclick="showFunction_logWarning()">logWarning</button>
                <button class="item" onclick="showFunction_logError()">logError</button>
                <button class="item" onclick="showFunction_logInfo()">logInfo</button>
                <button class="item" onclick="showFunction_alert()">alert</button>
                <button class="item" onclick="showFunction_scrollUp()">scrollUp</button>
                <button class="item" onclick="showFunction_importJS()">importJS</button>
                <button class="item" onclick="showFunction_importCSS()">importCSS</button>
                <button class="item" onclick="showFunction_setTitle()">setTitle</button>
                <button class="item" onclick="showFunction_setFavicon()">setFavicon</button>
                <button class="item" onclick="showFunction_importJSFromList()">importJSFromList</button>
                <button class="item" onclick="showFunction_importCSSFromList()">importCSSFromList</button>
                <button class="item" onclick="showFunction_createElement()">createElement</button>
                <button class="item" onclick="showFunction_setContentOfHeader()">setContentOfHeader</button>
                <button class="item" onclick="showFunction_setContentOfMain()">setContentOfMain</button>
                <button class="item" onclick="showFunction_setContentOfFooter()">setContentOfFooter</button>
                <button class="item" onclick="showFunction_getProtocol()">getProtocol</button>
                <button class="item" onclick="showFunction_getCpu()">getCpu</button>
                <button class="item" onclick="showFunction_getMemory()">getMemory</button>
                <button class="item" onclick="showFunction_getURLParam()">getURLParam</button>
                <button class="item" onclick="showFunction_setHTML()">setHTML</button>
                <button class="item" onclick="showFunction_setText()">setText</button>
                <button class="item" onclick="showFunction_setAttribute()"></button>
            </div>
        </section>-->
    `)
}

function showAbout() {
    scrollUp()
    setTitle("About - Nether.js")
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