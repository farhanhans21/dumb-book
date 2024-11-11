import { Router } from "express";
import authRouter from "./routers/auth";
import profileRouter from "./routers/profile";

const router = Router();

router.use('/auth',authRouter);
router.use('/profile',profileRouter);
export default router