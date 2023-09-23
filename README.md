# ServerOnNodeJs

- Um projeto simples, mas bem feito! Este projeto consiste em levantar um servidor com NodeJS e manipular as rotas com o HTTP
<hr></hr>
<div>
<p>- Para entender melhor listei 2 exemplos, um usando o módulo do nodejs e outro um framework, siga o primeiro exemplo logo abaixo: <br></p>
</div>

```Javascript
//Usando o Node importando o módulo "CreateServer".
import { createServer } from "node:http"

const server = createServer((request, response) => {
    response.write("Oi")

    return response.end() 
})

server.listen(3333)
```
<div>
<p>- Segundo exemplo logo abaixo: <br></p>
</div>

```JavaScript
//Usando o framework fastify 
import { fastify } from "fastify";

const server = fastify();

server.get("/", () => {
  console.log("Hello World");
})

server.listen({
  port: 3333,
  //Voce pode mudar para a porta que voce tem preferência, por exemplo:  port: 8080
})
```

# Agradecimentos

@rocketseat


