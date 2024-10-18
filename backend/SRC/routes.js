const express = require('express');
const router = express.Router();

const tarefa = require('./controller/tarefa');


router.post('/tarefa', tarefa.create);
router.get('/tarefa', tarefa.read);
router.delete('/tarefa/:id', tarefa.deletar);

module.exports = router;