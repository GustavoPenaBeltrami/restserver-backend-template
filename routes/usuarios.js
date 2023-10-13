const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet)
router.post('/',usuariosPost)
router.put('/:id',usuariosPut)
router.put('/', (req, res) => {
    res.status(400).json({
        msg: 'id params missing'
    })
})
router.delete('/',usuariosDelete)

module.exports = router