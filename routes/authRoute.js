import express from 'express';
import registerController from './../contollers/authController.js';
// Router object
const router=express.Router();

// Routes
router.post('/register',registerController)


// Export
export default router;