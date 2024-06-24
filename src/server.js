import http from 'node:http'
// CommonJS => requeire, padrão antigo
// ESModules => import/export, novo padrão. (add no package.json => "type":"module")

// - HTTP
//  - Método HTTP
//  - URL

// GET => Buscar uma informação do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuários no back-end
// POST /users => Criando usuários no back-end

const server = http.createServer((req, res) => {
  const {method, url } = req
  return res.end('Hello World')
})

server.listen(3333)