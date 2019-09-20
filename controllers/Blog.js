const { getblogs } = require('../utils/api');

let blogs;
let BlogContainer;
class Blog {
    static async GetBlog(req, res) {
      try{
        blogs = await getblogs();
        if (blogs === 'No blog found') return res.status(400).send(blogs);
        BlogContainer = Array.from(JSON.parse(blogs));
        return res.status(200).render('blog', { title: 'Blogs', blogs: BlogContainer } );
      }catch(e){
       console.log(e);
       return  res.status(500).send(e);
      }
      
    }

    static async ReadFullBlog(req, res) {
        try{
          const { id } = req.query;
          const blog = await BlogContainer.find((blogd) => { return blogd.id == id});
          console.log( typeof blog);
          return res.status(200).render('fullblog', { title: 'Full blog', blog })
        } catch(e){
           console.log(e);
           return res.status(500).send(e);
        }
    };
}

module.exports = { Blog };
