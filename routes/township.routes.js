import express from "express";

import { alive, states, districts, towns} from "../controller/township.controller.js";

const router = express.Router();

router.get("/alive", alive);
router.get("/states", states);
router.get("/districts", districts);
router.get("/towns", towns);

export default router;
