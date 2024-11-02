import express from 'express';
import testPostController from './../contollers/testController.js';
// router object 
const router = express.Router();

// Routes
router.post('/test-post',testPostController);




// Export 
export default router;