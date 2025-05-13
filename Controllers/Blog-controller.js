import Blog from "../Models/BlogModel";

async function seedBlog(req,res) {
    try{
        await Blog.deleteMany({}); //deletes any existing blogs
        await Blog.create( 
            {
                title: "First Blog",
                body: "Body 1",
                content:"the Full content for the blog post",

              },  
              {
                title: "Second Blog",
                body: "Body 2",
                content:"the Full content for the blog post",

              },  
              {
                title: "Third Blog",
                body: "Body 3",
                content:"the Full content for the blog post",

              }
        );
        res.status(201).json({ success: "Database Seeded." });// Must send something back in order for local host to show something on screen, otherwise it will continue infinitely loading as it's always waiting for something to show
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// All blogs
async function getBlogs( req, res) {
    try {
      const blogs = await Blog.find({});
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Find a blog by its ID
  async function getBlog(req,res) {
    try {
    const blog= await Blog.findById(req.params.id);
    res.status(200).json(blog);
    } catch (error) {
        res.status(400).json ({error: error.message});
    }
}

   // Creating New Blog Posts
   async function createBlog(req,res) {
    try {
   const createdBlog = await Blog.create(req.body);
    res.status(201).json(createdBlog)
    } catch (error) {
       res.status(400).json ({ error: error.message});
    }
   }

  // Updating a Blog by ID
  async function updateBlog(req, res) {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ); // This third argument, the object and key {new: true} demonstrates the updated document, not the original.
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Deleteing a blog
  async function deleteBlog(req, res) {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedBlog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  export {
    seedBlog,
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
  };