import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router()

const createUserController = new CreateUserController() // Already has the request and the response
const createTagController = new CreateTagController()

router.post("/users", createUserController.handle) // createUserController.handle == (request, response) =>{}
router.post("/tags", ensureAdmin, createTagController.handle)

export { router }