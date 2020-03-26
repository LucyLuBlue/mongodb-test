var express = require('express'),
router = express.Router();
itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');

router.get('/hello/:foo/:bar', itemCtrl.getWorld);
router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
Router.delete('/users/:id', userCtrl.deleteUser);
router.put('/users/:id', userCtrl.updateUser);


module.exports = router;


