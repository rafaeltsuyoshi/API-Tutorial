const express = require("express")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
}

// seta origin para http://localhost:8081
app.use(cors(corsOptions))

// utilizado para transformar dados em json
app.use(express.json())

// utilizado para transformar dados em string ou arrays
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

const db = require("./app/models")

db.sequelize.sync()

// Deletar e sincronizar com o banco de dados
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// rota simples
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the application."})
})

require("./app/routes/tutorial.routes")(app)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})