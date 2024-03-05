import { header } from "./header.js"

function pageAbout() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${header()}
        <main>
            <h1>About puslapis</h1>
            <p>About Lietuva!</p>
        </main>
    </body>
    </html>`
}

export { pageAbout }