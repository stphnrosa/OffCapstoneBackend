import mongoose from 'mongoose'; // need monogoose to createschema

const blogSchema = new mongoose.Schema ({
    title: {type: String, require: true },
    body: {type: String}
}, {
    timestamps: true // this automatically creates a created app field and an updated app field
});

//Below is the creation of the model
const Blog= mongoose.model('Blog', blogSchema); 

export default Blog