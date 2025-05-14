//reference: https://medium.com/@obinnayouyou/building-a-blog-api-with-node-js-express-and-mongodb-862d11ac4b28

import express from 'express'; // you need this to create a router using express
import { getComments, getComment, createComment, updateComment, deleteComment,} from '../Controllers/Comments-controller.js';
const router = express.Router();

//  //Seed. This route is going to be used to populate the database
// router.get('/seed', seedComments);

//index (all comments)
router.get('/', getComments);

//Create a comment
router.post('/:id', createComment );

//Show. id route parameter to find the specific comment they are looking for.
router.get('/:id', getComment ); // blogId reference commentscontroller

//Update. Needs an id to determine what needs to be updated. 
router.put('/:id', updateComment );

//Delete a comment with its ID
router.delete('/:id', deleteComment);

export default router;