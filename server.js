//======Importação
//import { createServer } from "node:http"

//const server = createServer((request, response) => {
//    response.write("Oi")

//    return response.end() 
//})

//server.listen(3333)

//==> Servidor em NodeJS que usa uma api para gerenciar videos.

/*==> Anotações:

Methods: - GET, POST, PUT, DELETE, PATCH...

Method POST http://localhost:3333/videos
Method PUT http://localhost:3333/videos/id

Route Parameter

{"message":"Route GET:/ not found","error":"Not Found","statusCode":404}

*/
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js"

const server = fastify();
const database = new DatabaseMemory()

// REQUEST BODY

server.post("/videos", (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })

    console.log(database.list())

    return reply.status(201).send()
})

server.get("/videos", (request) => {
    const search = request.query.search
    console.log(search);
    
    const videos = database.list()

    console.log(videos);

    return videos
})

server.put("/videos/:id", (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body
    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete("/videos/:id", (request, reply) => {
    const videoId = request.params.id

    database.update(videoId)

    return reply.status(204).send()

})

server.listen({
    port: 3333
})