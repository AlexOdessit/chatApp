const userRouter = require('express').Router();

const userController = require('../controllers/userController');

userRouter
  .route('/')
  .post(userController.createUser)
  .get(userController.findUsers);

userRouter
  .route('./:userId')
  .get(userController.findUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
