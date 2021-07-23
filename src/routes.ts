import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController(); // Already has the request and the response

router.post("/users", createUserController.handle) // createUserController.handle == (request, response) =>{}

export { router }