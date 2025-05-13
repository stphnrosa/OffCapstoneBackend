import Blog from "../Models/BlogModel";

async function seedBlog(req,res) {
    try{
        await Blog.deleteMany({});
        await Blog.create(
            {
                title: "Baseline",
                body: "Body 1",
              },  
              {
                title: "Baseline",
                body: "Body 1",
              },  
              {
                title: "Baseline",
                body: "Body 1",
              }
        );
        res.status(201).json({ success:"Database Seeded."});// Must send something back in order for local host to show something on screen, otherwise it will continue infinitely loading as it's always waiting for something to show
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getBlog(req, res) {
    try {
      const Blog = await Blog.find({});
      res.status(200).json(Blog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async function deleteBlog(req, res) {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedBlog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
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

  async function createBlog(req,res) {
    try {
   const createdBlog = await Blog.create(req.body);
    res.status(201).json(createdBlog)
    } catch (error) {
       res.status(400).json ({ error: error.message});
    }
   }

   async function getBlogs(req,res) {
    try {
    const Blog= await Blog.findById(req.params.id);
    res.status(200).json(Blog);
    } catch (error) {
        res.status(400).json ({error: error.message});
    }
}



  export {
    seedBlog,
    getBlog,
    deleteBlog,
    updateBlog,
    createBlog,
    getBlogs
  };