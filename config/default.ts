let user = process.env.DB_USER
let password = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${user}:${password}@cluster0.dqcfam1.mongodb.net/MoviesApi?retryWrites=true&w=majority`
}