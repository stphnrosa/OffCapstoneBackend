import express from 'express'; // you need this to create a router using express
import { getComments, getComment, createComment, updateComment, deleteComment,} from '../Controllers/Comments-controller.js';
const router = express.Router();

//  //Seed. This route is going to be used to populate the database
// router.get('/seed', seedComments);

//index (all comments)
router.get('/', getComments);

//Show. id route parameter to find the specific comment they are looking for.
router.get('/:id', getComment );

//Create a comment
router.post('/', createComment );

//Update. Needs an id to determine what needs to be updated. 
router.put('/:id', updateComment );

//Delete a comment with its ID
router.delete('/:id', deleteComment);

export default router;