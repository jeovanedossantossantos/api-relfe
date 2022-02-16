const controllerMatriculados = {
    listaMatriculados (req,res){
        const lista = res.json({"messagem":"Rota ok"})
    },
    buscarUm(req, res){
        
        const apenasUm = res.json({"messagem":"Roda de buscar um"})
    },
    cadastra(req, res){
        const {nome, preco, quantidade, fabricante_id, 
            categoria_id} = req.body;
        console.log(nome)
        const matricular = res.json()
    },
    atulizar(req, res){
        const {id} = req.params
        const {nome} = req.body
        console.log(id)
        res.json({ "messagem":nome, "id":id})
    }

}

module.exports = controllerMatriculados