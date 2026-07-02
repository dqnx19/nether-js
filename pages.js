import { createElement, setFavicon, importCSSFromList, importJSFromList, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importJS, setAttribute } from "./nether.js";

window.showFunctions = showFunctions
window.showHome = showHome

await importCSSFromList([
    "https://modern-web.nether.click/fonts/lexend/lexend.css",
    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/body.css",
    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/main.css",
    "https://web-ui.nether.click/components/css/footer.css",
    "https://web-ui.nether.click/components/css/section.css",
    "https://web-ui.nether.click/components/css/headings.css",
    "https://web-ui.nether.click/components/css/grouped-list.css",
    "https://web-ui.nether.click/components/css/app-drawer.css",
    "https://web-ui.nether.click/components/css/copy-box.css",
    "https://web-ui.nether.click/components/css/tabs-switching.css"
]);

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://web-ui.nether.click/components/js/app-drawer.js",
    "https://web-ui.nether.click/components/js/tabs-switching.js"
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
    setTitle("Functions - Nether.js");
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
    setTitle(`${name} - Functions - Nether.js`);

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
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('what')" data-tab="what">What it does</button>
                    <button class="tab" onclick="showTab('import')" data-tab="import">Import</button>
                    <button class="tab" onclick="showTab('params')" data-tab="params">Parameters</button>
                    <button class="tab" onclick="showTab('examples')" data-tab="examples">Examples</button>
                </div>
                <div class="tab-content active" id="what">
                    <h2>Description</h2>
                    <p>${what}</p>
                </div>
                <div class="tab-content" id="import">
                    <h2>Import</h2>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">JS</span>
                        </div>
                        <div class="body">
                            <pre class="code">import { ${name} } from "https://js.nether.click/nether.js"</pre>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="params">
                    <h2>Parameters</h2>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">JS</span>
                        </div>
                        <div class="body">
                            <pre class="code">${name}(${params})</pre>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="examples">
                    <h2>Examples</h2>
                    ${examplesHTML}
                </div>
            </div>
        </section>
    `);
}

function showAbout() {
    scrollUp()
    setTitle("About - Nether.js")
}


showHome()