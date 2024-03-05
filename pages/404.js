import { header } from "./header.js"

function page404() {
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
            <h1>404 puslapis</h1>
            <p>Page not found</p>
            <p>Go home 👀</p>
        </main>
    </body>
    </html>`
}

export { page404 };