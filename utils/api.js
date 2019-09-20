const rp = require('request-promise');

let blogs;
const getblogs = async () => {
    try{
      await rp('https://jsonplaceholder.typicode.com/posts', (err, res) => {
        if (err) blogs = 'No blog found';    
        blogs = res.body
        console.log(blogs)
      });
    }catch(e){
     console.log(err);
     blogs = 'No blog found';
    }
  return blogs;
}

module.exports = { getBlog };
