let router = require('express').Router();
let noteController = require('../../controllers/noteMethods')

router.get('/:id', noteController.find);
router.post('/', noteController.create);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.removeOneNoteDB);
router.delete('/', noteController.removeAllNotesDB);

module.exports = router;