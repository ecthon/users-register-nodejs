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

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Ecthon Almeida',
      email: 'ecthon@gmail.com'
    })

    return res.end('Criação de usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)