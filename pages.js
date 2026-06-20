import { createElement, setFavicon, importCSSFromList, importJSFromList, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importJS, setAttribute } from "./nether.js";

window.showFunctions = showFunctions
window.showHome = showHome

await importCSSFromList([
    "https://modern-web.nether.click/fonts/lexend/lexend.css",
    "https://modern-web.nether.click/components/css/all.css",
    "https://modern-web.nether.click/components/css/body.css",
    "https://modern-web.nether.click/components/css/header.css",
    "https://modern-web.nether.click/components/css/main.css",
    "https://modern-web.nether.click/components/css/footer.css",
    "https://modern-web.nether.click/components/css/section.css",
    "https://modern-web.nether.click/components/css/headings.css",
    "https://modern-web.nether.click/components/css/logo.css",
    "https://modern-web.nether.click/components/css/grouped-list.css",
    "https://modern-web.nether.click/components/css/app-drawer.css",
    "https://modern-web.nether.click/components/css/copy-box.css",
]);

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://modern-web.nether.click/components/js/app-drawer.js",
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
    <button onclick="showFunctions()" title="Displays Functions">
        <img src="img/links-icons/functions.svg" alt="Functions page icon">
    </button>
`)

await setAttribute("html", "lang", "en")

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

async function showFunctions() {
    scrollUp();
    setTitle("Nether.js Functions");
    setContentOfMain(`
        <h1>Functions</h1>
        <section>
            <div class="grouped-list" id="functions-list"></div>
        </section>
    `);

    const functions = await fetch("db.json").then(r => r.json());

    const list = document.getElementById("functions-list");

    functions.forEach(fn => {
        const button = createElement("button");
        button.textContent = fn.name;
        button.onclick = () => showFunction(fn.name, fn.what_it_does, fn.parameters, fn.example_usage);
        button.classList.add("item");

        list.appendChild(button);
    });
}


function showFunction(name, what, params, examples) {
    scrollUp();
    setTitle(`${name} - Nether.js Function`);

    let examplesHTML = "";

    examples.forEach(ex => {
        examplesHTML += `
            <div class="copy-box">
                <div class="head">
                    <span class="language">JavaScript (JS)</span>
                </div>
                <div class="body">
                    <pre class="code">${ex}</pre>
                </div>
            </div>
            <br>
        `;
    });

    setContentOfMain(`
        <h1>${name}</h1>

        <section>
            <h2>Description</h2>
            <p>${what}</p>
        </section>

        <section>
            <h2>Parameters</h2>
            <p>${params}</p>
        </section>

        <section>
            <h2>Examples</h2>
            ${examplesHTML}
        </section>
    `);
}

function showAbout() {
    scrollUp()
    setTitle("About - Nether.js")
}


showHome()