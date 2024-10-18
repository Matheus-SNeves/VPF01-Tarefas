const con = require('../connect/banco').con;

const create = (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let data_tarefa = req.body.data_tarefa;
    let nome = req.body.nome;

    let query = `INSERT INTO tarefa(titulo, descricao, data_tarefa, nome) VALUES`
    query += `('${titulo}', '${descricao}', '${data_tarefa}', '${nome}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM tarefa', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const deletar = (req, res) => {
    con.query('DELETE FROM tarefa WHERE id = ?', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    deletar
}