module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js")

    var router = require("express").Router()

    // Criar tutorial
    router.post("/", tutorials.create)

    // Recuperar todos os tutoriais
    router.get("/", tutorials.findAll)

    // Recuperar todos os tutoriaispublicados
    router.get("/", tutorials.findAllPublished)

    // Recuperar um tutorial pelo id
    router.get("/:id", tutorials.findOne)

    // Atualizar tutorial pelo id
    router.put("/:id", tutorials.update)

    // Deletar tutorial pelo id
    router.delete("/:id", tutorials.delete)

    // Deletar todos os tutoriais
    router.delete("/", tutorials.deleteAll)
    
    app.use('/api/tutorials', router)
}