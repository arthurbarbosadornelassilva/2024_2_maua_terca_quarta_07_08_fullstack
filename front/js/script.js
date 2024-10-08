const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmeEndpoint = '/filmes'

async function obterFilmes () {
    const URLcompleta = `${protocolo}${baseURL}${filmeEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data

    console.log (filmes)
}