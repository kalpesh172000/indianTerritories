import express from "express";

import alive from "../controller/township.controller.js";


const router = express.Router()

router.get('/alive',alive);


export default router;

