const rp = require('request-promise');

let blogs;
const getblogs = async () => {
    try{
      await rp('https://jsonplaceholder.typicode.com/posts', (err, res) => {
        if (err) { blogs = 'No blog found' };   
        if(res === undefined) { 
          blogs = 'An error occured please try again'
        }else{
          blogs = res.body
        }; 
      });
    }catch(e){
     console.log(err);
     blogs = 'No blog found';
    }
  return blogs;
}

module.exports = { getblogs };
