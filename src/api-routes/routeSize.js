const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/size.js');

//lay tat ca
router.get('/', productsCtrl.getAll)
//lay theo Id
router.get('/:sizeId', productsCtrl.getbyID)

// create
router.post('/', productsCtrl.add)

// update
router.put('/:id', productsCtrl.update)

// delete
router.delete('/:id', productsCtrl.delete)

module.exports = router;