export async function json(req, res) {
// tranforma em json tanto os dados de entrada
  const buffers = []
  for await (const chunk of req) {
    buffers.push(chunk)
  }
  
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

// quanto os dados de saída
  res.setHeader('Content-type', 'application/json')
}