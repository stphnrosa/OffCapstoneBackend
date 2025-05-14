// reference:https://laracasts.com/discuss/channels/general-discussion/how-to-create-a-comment-with-a-blog
// reference: https://www.geeksforgeeks.org/implement-comments-section-in-mern-blogs-and-news-website/ 
import Comment from "../Models/CommentModel.js";
import Blog from "../Models/BlogModel.js";

// All comments
async function getComments(req, res) {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Find a comment by its ID
async function getComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Creating New Comments
async function createComment(req, res) {
  try {
    const {content, tags, blogId} =req.body;
    if (!blogId) {
      return res.status(400).json({ error:"Blog ID required"})
    }

    const createdComment = await Comment.create({
      content,
      tags,
      blog:blogId
    });
    res.status(201).json(createdComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Updating a comment by ID
async function updateComment(req, res) {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id, // id of the doc that is to be updated
      req.body, // req.body contains the content/updates
      { new: true }
    ); // This third argument, the object and key {new: true} demonstrates the updated document, not the original.
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Deleting a comment
async function deleteComment(req, res) {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
     getComments,
     getComment,
     createComment,
     updateComment,
     deleteComment 
    };
