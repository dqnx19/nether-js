import { redirect, createElement, highlightSyntax, setFavicon, importCSSFromList, importJSFromList, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importJS, setAttribute } from "./nether.js";

window.showHome = showHome
window.showFunctions = showFunctions
window.showAbout = showAbout

await importCSSFromList([
    "https://web-ui.nether.click/fonts/lexend/lexend.css",

    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/app-drawer.css",

    "https://web-ui.nether.click/components/css/body.css",

    "https://web-ui.nether.click/components/css/copy-box.css",
    "https://web-ui.nether.click/components/css/cards.css",

    "https://web-ui.nether.click/components/css/footer.css",

    "https://web-ui.nether.click/components/css/grouped-list.css",

    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/headings.css",

    "https://web-ui.nether.click/components/css/main.css",
    
    "https://web-ui.nether.click/components/css/section.css",
    
    "https://web-ui.nether.click/components/css/tabs-switching.css"
]);

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://web-ui.nether.click/components/js/app-drawer.js",
    "https://web-ui.nether.click/components/js/tabs.js",
    "https://web-ui.nether.click/components/js/headings.js"
])

await setFavicon("img/icons/favicon.png");

await setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()" title="Displays home page">
        <img src="img/icons/favicon.png" alt="Nether.js Logo">
    </button>
`)

await setContentOfFooter(`
    <button onclick="showHome()" title="Displays Home Page">
        <img src="img/icons/favicon.png" alt="Nether.js Logo">
    </button>
    <button onclick="showSourceCode()" title="Displays Source code page">
        <img src="img/links-icons/source-code.svg" alt="Source code page icon">
    </button>
    <button onclick="showFunctions()" title="Displays Functions page">
        <img src="img/links-icons/functions.svg" alt="Functions page icon">
    </button>
    <button onclick="showAbout()" title="Displays About page">
        <img src="img/links-icons/about.svg" alt="About page icon">
    </button>
`)

await setAttribute("html", "lang", "en")

async function showHome() {
    scrollUp()
    setTitle("Nether.js")
    setContentOfMain(`
        <div class="cards">
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/source-code.svg" alt="Source code page link icon">
                    <span class="heading">Source code</span>
                </div>
                <div class="body">
                    <span>Source code and link to it</span>
                    <button onclick="showSourceCode()">Visit link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/functions.svg" alt="Functions page link icon">
                    <span class="heading">Functions</span>
                </div>
                <div class="body">
                    <span>List of all function</span>
                    <button onclick="showFunctions()">Visit link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/about.svg" alt="">
                    <span class="heading">About</span>
                </div>
                <div class="body">
                    <span>Information about the project</span>
                    <button onclick="showAbout()">Visit link</button>
                </div>
            </div>
        </div>
    `)

    nwui.headings.create({
        parent: "main",
        level: 1,
        content: "Nether.js"
    });

    nwui.cards.create({
        parent: "main",
        id: "links"
    })

    const db = await fetch("json/pages.json").then(r => r.json());

    db.forEach(element => {
        nwui.cards.addCard({
            onclick: element.func,
            image: `img/links-icons/${element.techname}.svg`,
            heading: `${element.name}`,
            parent: "#links"
        })
    });

}

async function showFunctions() {
    scrollUp();
    setTitle("Functions - Nether.js");
    setContentOfMain("");

    const functions = await fetch("db.json").then(r => r.json());

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Functions"
    })
    nwui.tabs.create({
        parent: "main",
        id: "functions"
    })

    nwui.tabs.addTab()
}

function showAbout() {
    scrollUp()
    setTitle("About - Nether.js")
}


showHome()