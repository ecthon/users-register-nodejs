import http from 'node:http'
// CommonJS => requeire, padrão antigo
// ESModules => import/export, novo padrão. (add no package.json => "type":"module")

const server = http.createServer((req, res) => {
  return res.end('Hello World')
})

server.listen(3333)