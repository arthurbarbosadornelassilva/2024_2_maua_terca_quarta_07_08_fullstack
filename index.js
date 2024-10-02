const express = require ('express')
const app = express()

app.use (express.json())

//get http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('oi')
})

let filmes = [
    {
        titulo: "Divertidamente",
        sinopse: "Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente."
    },
    {
        titulo: "Oppenheimer",
        sinopse: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica."
    }
] 
app.get("/filmes", (req, res) => {
    res.json(filmes)
})

app.post("/filmes", (req, res) => {
    //captura o que o usuário enviou
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //monta o objeto filme para incluir na base
    const filme = {titulo: titulo, sinopse: sinopse}
    //adiciona o o novo filme à lista de filmes
    filmes.push(filme)
    //mostra a base atualizada
    res.json(filmes)
})

app.listen(3000, () => console.log("up and running"))
