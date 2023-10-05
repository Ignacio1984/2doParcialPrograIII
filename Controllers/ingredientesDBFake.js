
const ingredientesFake = require('../data/ingredientes');

const getTodos = (req, res) => {
    res.json(ingredientesFake);
}

const getByID = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    const ingEncontrado = ingredientesFake.find( ing => ing._id === id );

    if (ingEncontrado) {
        res.json(ingEncontrado);
    } else {
        res.status(404).json({
            id,
            encontrado: false
        })
    }
}

const agregar = (req, res) => {
    const { nombre, foto, color } = req.body;

    //console.log(nombre, foto, color);

    const data = {
        _id: ingredientesFake.length+1,
        ...req.body // Operador spread
    }
    ingredientesFake.push(data);
    res.status(201).json(data);
}

const editar = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    const { nombre, foto, color } = req.body;

    //console.log(nombre, foto, color);
    const ingredienteIdx = ingredientesFake.findIndex(ing => ing._id === id);
    let ingredienteActualizado = {};
    if (ingredienteIdx > -1) {
        ingredienteActualizado = {
            _id: parseInt(id),
            ...req.body
        };
        ingredientesFake[ingredienteIdx] = ingredienteActualizado;
    }
    res.json( ingredienteActualizado );
}

const borrar = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    const ingredienteIdx = ingredientesFake.findIndex(ing => ing._id === id);
    let ingredienteBorrado = {};
    if (ingredienteIdx > -1) {
        ingredienteBorrado = ingredientesFake[ingredienteIdx];
        ingredientesFake.splice(ingredienteIdx, 1);
    }

    res.json( ingredienteBorrado );
}

module.exports = {
    getTodos,
    getByID,
    agregar,
    editar,
    borrar
}