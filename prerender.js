import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const { render } = await import('./dist/server/entry-server.js')

const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
const appHtml = render()
const result = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), result)
console.log('pre-rendered index.html')
