const express= require('express');
const UserController= require('../controllers/userController');

const router= express.Router();



router.get('/',UserController.getAllUsers );
router.get('/user/:id',UserController.getUserById);
router.post('/user/create',UserController.createNewUser);
router.get('/user/:id/edit',UserController.showEditForm);
router.delete('/user/:id/delete',UserController.deleteUser);
router.put('/user/:id',UserController.editUser);



module.exports=router;

