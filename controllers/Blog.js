const { getBlog } = require('../utils/api');

let blogs;
let BlogContainer;
class Blog {
    static async GetBlog(req, res) {
      try{
        blogs = await getBlog();
        console.log(blogs);
        if (blogs === 'No blog found') return res.status(400).send(blogs);
        console.log(blogs);
        BlogContainer = await blogs.map(blog => JSON.parse(blog));
        console.log(BlogContainer);
        return res.status(200).render('blog', { title: 'Blogs', blogs: BlogContainer } );
      }catch(e){
       return  res.status(500).send(e);
      }
      
    }

    static async ReadFullBlog(req, res) {
        try{
          const id = req.id;
          const blog = await BlogContainer.find(blog_ =>  blog_.id === id);
          console.log(blog);
          return res.status(200).render('fullbog', { title: 'Full blog', blog })
        } catch(e){
           console.log(e);
           return res.status(500).send(e);
        }
    };
}

module.exports = { Blog };
