const {
    getAllContracts,
    getSingleContract,
    singlePost,
    postUpdated,
    deletePost
} = require('./contractController');
const router = require('express').Router();

router.get('/',getAllContracts);
router.get('/:id',getSingleContract);
router.post('/',singlePost);
router.put('/:id', postUpdated);
router.delete('/:id',deletePost);

module.exports = router;