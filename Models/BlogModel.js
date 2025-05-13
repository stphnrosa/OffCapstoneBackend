import mongoose from 'mongoose'; // need monogoose to createschema

const blogSchema = new mongoose.Schema ({
    title: {type: String, required: true, trim: true }, // Blog must have a title
    body: {type: String}, // Blog can optionally have a summary.
    content: { type: String, required: true}, // Without text, blog will not be saved. This is a Full post content.
    tags: { type: String } // Has key terms or words.

}, {
    timestamps: true // this automatically creates a created app field and an updated app field
});

//Below is the creation of the model
const Blog = mongoose.model('Blog', blogSchema); 

export default Blog