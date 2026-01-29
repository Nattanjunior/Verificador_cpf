import { createServer } from "node:http"

import { validateCPF } from './utils/cpfvalidator.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.end('Hello programmer!');
  }
  let body = ''
  if (url === '/validator' && method === 'POST') {
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      const { cpf } = JSON.parse(body);

      const result = await validateCPF(cpf);

      // result.then(result => {
      //   console.log('Sending response:', result);
      // });

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
    });
  }

});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});