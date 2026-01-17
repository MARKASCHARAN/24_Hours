import { Router } from "express";
import { getUsers, createUsers} from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/", createUsers);

export default router;