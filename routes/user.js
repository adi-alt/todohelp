import express from "express"
import { register,login,userdata,logout} from "../controllers/user.js";
import { isAuth } from "../middlewares/auth.js";
const router = express.Router();

// router.get("/all",alluser)
router.post("/login",register)
router.post("/login",login)
router.get("/me",isAuth,userdata)
router.get("/logout",isAuth,logout)
export default router