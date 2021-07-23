import "reflect-metadata";
import express from 'express';

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json()) // Habilitates express to work with json

app.use(router); // Inserts the routes into express - like a middleware

app.use((err, request, response, next) => {})

app.listen(3000, () => console.log("Server is running"));