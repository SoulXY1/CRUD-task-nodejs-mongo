import { Router } from "express";
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);

//Añadir tarea req.body obtiene el modelo del esquema de Task y guarda los daros en un array de objetos
router.post("/tasks/add", createTask);
//Done
router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
