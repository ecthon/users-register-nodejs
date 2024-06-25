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

// Aplicação Stateful/Stateless 
// Stateful => sempre vai ter algum tipo de informação sendo salva em memória
// Stateless => geralmente salva em dispositivos externos como banco de dados, arquivos de texto e etc...

// JSON - Javascript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados
// Informações adicionais

// HTTP Status Code

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const buffers = []
  for await (const chunk of req) {
    buffers.push(chunk)
  }
  
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body
    users.push({
      id: 1,
      name,
      email,
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('Not Found ❌')
})

server.listen(3333)