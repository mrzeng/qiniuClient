const path = require('path')
const fs = require("fs")

let packagePaths = [
    path.join(__dirname, "..", "node_modules/ali-oss/package.json"),
    path.join(__dirname, "..", "node_modules/agentkeepalive/package.json"),
    path.join(__dirname, "..", "node_modules/ali-oss/node_modules/agentkeepalive/package.json")
]

packagePaths.forEach((path) => {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path).toString("utf8")
        content = content.replace('"browser"', '"browser1"')
        fs.writeFileSync(path, content)
        console.log(`${path}---修改完成`)
    }
})
