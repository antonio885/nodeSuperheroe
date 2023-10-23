import Express from "express";
import {create, findById, findAll, update, deletes} from "../controllers/superheroes.controller.js";

const router = Express.Router();

// Rutas
router.post("/", create);
router.get("/:id",findById);
router.get("/", findAll);
router.put("/:id", update);
router.delete("/:id", deletes);


export default router;