const express = require('express');

const app = express();

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
     );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, DELETE, OPTIONS'
    )       
    next();
});

app.use('/api/posts',(req, res, next)=>{
    const posts = [
        {
            id:'r2d2',
            title:'First server side post',
            content:'This is coming from server'
        },
        {
            id:'xr',
            title:'Second server side post',
            content:'This is coming from server'
        }
    ]

    res.status(200).json({
        message:'success',
        posts:posts
    });
});

module.exports = app;