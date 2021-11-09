import fs from 'fs'
import readline from 'readline'
import fetch from 'node-fetch'

const rs = fs.createReadStream('./list.csv')
const ws = fs.createWriteStream('./output.csv')
const rl = readline.createInterface({
  input: rs,
  output: ws,
})

const start = async () => {
  console.log('start')

  for await (const id of rl) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1?id=${id}`)
    const data = await response.json()
    ws.write(`${data.title}\n`)
  }

  console.log('end')
}

start()
