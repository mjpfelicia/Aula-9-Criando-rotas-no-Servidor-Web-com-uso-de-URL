const http = require("http");
const port = 443;
const url = require("url");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);

  const parametro = url.parse(req.url, true).query;

  res.write("<br>Nome: " + parametro.nome);
  res.write("<br>Sobrenome: " + parametro.sobrenome);
  res.write("<br>idade: " + parametro.idade);

  res.end();
});
servidor.listen(port, () => {
  console.log("servidor rodando");
});
