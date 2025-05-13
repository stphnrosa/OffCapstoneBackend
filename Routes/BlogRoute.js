import express from 'express'; // you need this to create a router using express
import * as BlogController from '../Controllers/Blog-controller.js'
// * represents "all"
const router = express.Router();

 //Seed. This route is going to be used to populate the database
router.get('/seed', BlogController.seedBlog);

//index (main page). 
router.get('/');

//Delete
router.delete('/:id', BlogController.deleteBlog );

//Update. Needs an id to determine what needs to be updated. 
router.put('/:id', BlogController.updateBlog );

//Create
router.post('/', BlogController.createBlog );

//Show. id route parameter to find the specific assessment they are looking for. Maybe test result 1.
router.get('/:id', BlogController.getBlogs );

export default router;