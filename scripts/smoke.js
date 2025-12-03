const fs = require('fs')
const path = require('path')

function fail(msg){
  console.error('SMOKE FAILED:', msg)
  process.exit(2)
}

const distIndex = path.join(__dirname, '..', 'dist', 'index.html')
if(!fs.existsSync(distIndex)){
  fail('dist/index.html not found — build may have failed')
}

const html = fs.readFileSync(distIndex, 'utf8')
if(!/QuickResume/.test(html)){
  fail('Expected text "QuickResume" not found in dist/index.html')
}

console.log('SMOKE OK — dist/index.html contains QuickResume')
process.exit(0)
