const express= require('express');
const UserController= require('../controllers/userController');

const router= express.Router();



router.get('/',UserController.getAllUsers );
router.get('/user/:id',UserController.getUserById);
router.get('/create',UserController.createForm);
router.post('/create',UserController.createNewUser);
router.get('/user/:id/edit',UserController.showEditForm);
router.post('/:id/delete',UserController.deleteUser);
router.post('/user/:id/edit',UserController.editUser);



module.exports=router;

