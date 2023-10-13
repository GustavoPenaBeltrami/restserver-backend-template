const {response} = require('express')

const usuariosGet = (req, res = response) => {
    const queryParams = req.query;
    

    res.json({
        ok:true,
        msg: '1',
        queryParams
    })
}
const usuariosPost = (req, res = response) => {

    const {nombre,edad} = req.body;

    res.status(201).json({
        ok:true,
        msg: '2',
        nombre,edad
    })
}
const usuariosPut = (req, res = response) => {
    
    const id = req.params.id;

    res.json({
        ok:true,
        msg: '3',
        id
    })
}
const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg: '4'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}