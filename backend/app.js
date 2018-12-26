const express = require('express');
const {Post} = require('./models/post');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean', { useNewUrlParser: true })
    .then(()=>{
        console.log('connected to DB');
    })
    .catch(()=>{
        console.log('Err connecting to DB');
    });

const bodyParser = require('body-parser');

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
     );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, PATCH, POST, DELETE, OPTIONS'
    )       
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/posts', (req, res, next)=>{
    const post = new Post({
        title:req.body.title,
        content:req.body.content
    });
    post.save().then(post=>{
        res.status(201).json({
            message:'new Post was Added',
            post:post
        });
    });
});

app.get('/api/posts',(req, res, next)=>{
  Post.find().then(documents=>{
    res.status(200).json({
        message:'post saved successfully',
        posts:documents
    });
  })
});

app.delete('/api/post/:id',(req,res,next)=>{
    console.log(req.params.id);
    res.status(200).json({message:'post deleted'});
});

module.exports = app;