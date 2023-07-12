const express = require("express");
const {
  loginController,
  registerController,
  authController,
  authApplyController,
  // applyDoctorController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);
//Register|| POST
router.post("/apply-form", authMiddleware, authApplyController);

// router.post("/apply-doctor", authMiddleware, applyDoctorController);

// router.post("/apply-doctor", authMiddleware, applyDoctorController);
module.exports = router;
