let router = require('express').Router();
let noteController = require('express').Router();

router.get('/:id', noteController.find);
router.post('/', noteController.create);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.delete);