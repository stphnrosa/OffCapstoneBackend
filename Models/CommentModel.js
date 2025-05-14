import mongoose from 'mongoose'; // need monogoose to createschema

const CommentSchema = new mongoose.Schema ({
    content: { type: String, required: true, trim: true }, // Without text, blog will not be saved. This is a Full post content.
    tags: { type: String }, // Has key terms or words.
    blog: {type: mongoose.Schema.Types.ObjectId, ref:"Blog", required: true},
    likes: { type: Number, default:0 }

}, {
    timestamps: true // this automatically creates a created app field and an updated app field
});

//Below is the creation of the model
const Comment = mongoose.model('Comment', CommentSchema); 

export default Comment