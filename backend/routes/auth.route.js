import express from "express";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", signup);
router.post("/logout", logout);

export default router;