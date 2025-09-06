import express from "express";
import { body, query } from "express-validator";
import { Router } from "express";
import * as mapController from "../controllers/map.controller.js";

const router = Router();

router.get('/coordinates', mapController.getCoordinates);
router.get('/distance-time', mapController.getDistanceTime);
router.get('/autocomplete', mapController.getAutoCompleteSuggestions);

export default router;