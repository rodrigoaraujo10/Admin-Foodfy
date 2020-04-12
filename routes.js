const express = require ('express')
const routes = express.Router()
const admin = require('./controllers/admin')
const clients = require('./controllers/clients')

const recipes = require('./data.js')

// ============  ROTAS CLIENTES ============

routes.get('/', clients.index)

routes.get('/recipes', clients.list)

routes.get('/recipes/:index', clients.show)






// ============  ROTAS ADMIN ============

routes.get("/admin", admin.index) // Mostrar a lista de receitas

routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:index", admin.show) // Exibir detalhes de uma receita
routes.get("/admin/recipes/:index/edit", admin.edit) // Mostrar formulário de edição de receita

routes.post("/admin", admin.post) // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes