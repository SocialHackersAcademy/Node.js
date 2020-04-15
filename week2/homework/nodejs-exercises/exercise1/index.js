const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 4896;

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {
  console.log('Get method is called');
  res.json({
    "message": "Get method called"
  })
})

// Create new blog post
app.post('/blogs', (req,res) => {
  const { title, content } = req.body;
  fs.writeFileSync(title,content);
  res.status(201).send('Post Created Succesfully');
})

//Update blog post
app.put('/blogs', (req,res) => {
  const { title, content } = req.body;
  if (fs.existsSync(title)){
    fs.writeFileSync(title,content);
    res.status(200).send('Post Updated Succesfully');
  }else{
    res.status(404).send('Post not found');
  }
})

//Delete blog post
app.delete('/blogs/:title', (req, res) => {
  const {title} = req.params;
  fs.unlinkSync(title);
  res.end('Post Deleted Succesfully');
})

//Read blog post
app.get('/blogs/:title',(req,res)=> {
  const { title } = req.params;
  res.sendFile(title, {root:__dirname});
})


app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
})