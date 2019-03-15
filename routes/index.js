import express from 'express';
import TodoController from '../todosControllers/todos';

const router = express.Router();

// get all todos
router.get('/api/v1/todos', TodoController.getallTodos);

//get one todo
router.get('/api/v1/todos/:id', TodoController.getTodo);

// post todo
router.post('/api/v1/todos', TodoController.createTodo);

//update a specific todo
router.put('/api/v1/todos/:id', TodoController.updateTodo);

//delete a specific todo
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

export default router;
