import { setFavicon, importCSS, importJS, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, setAttribute } from "./nether.js";

window.showHome = showHome
window.showFunctions = showFunctions
window.showAbout = showAbout

await importCSS("https://web-ui.nether.click/fonts/lexend/lexend.css");

await importCSS("https://web-ui.nether.click/components/css/all.css");
await importCSS("https://web-ui.nether.click/components/css/app-drawer.css");
await importCSS("https://web-ui.nether.click/components/css/body.css");
await importCSS("https://web-ui.nether.click/components/css/copy-box.css");
await importCSS("https://web-ui.nether.click/components/css/cards.css");
await importCSS("https://web-ui.nether.click/components/css/footer.css");
await importCSS("https://web-ui.nether.click/components/css/grouped-list.css");
await importCSS("https://web-ui.nether.click/components/css/header.css");
await importCSS("https://web-ui.nether.click/components/css/headings.css");
await importCSS("https://web-ui.nether.click/components/css/main.css");
await importCSS("https://web-ui.nether.click/components/css/section.css");
await importCSS("https://web-ui.nether.click/components/css/tabs.css");

await importJS({
    src: "https://nether.click/js/import-app-drawer.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/all.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/app-drawer.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/tabs.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/headings.js"
});

await importJS({
    src: "lib/marked.js"
})

// await setFavicon("img/icons/favicon.png");

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

    functions.forEach(async func => {
        const readme = await fetch(`readme/${func.toLowerCase()}.md`).then(r => r.text());

        nwui.tabs.addTab({
            title: func,
            parent: "#functions",
            innerHTML: marked.parse(readme)
        })
    })
}

function showAbout() {
    scrollUp()
    setTitle("About - Nether.js")
}


showHome()