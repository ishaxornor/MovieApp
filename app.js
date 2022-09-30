const express = require('express');

const middleware = require('./middleware');

const routes = require('./routes')

const app =express();

middleware(app);

//----------------------------
// //middlewares
// app.use((req,res,next)=>{
//     console.log(req.ip);
//     next();
// });
//-------------------------------

routes(app);


// //------------------------------------------------------
// //routes
// app.get('/',(req,res,next)=>{
//     // res.send('Welcome to the homepage');
//     //---------------------------------------
//     // res.json({
//     //     message: "Welcome to the homepage"
//     // })
//     //-----------------------------------------------


//     // res.redirect('/user')
//     //---------------------------------------------

//     res.send('Welcome to homepage');

// });

// app.get('/user/:id/:postId',(req,res,next)=>{

//     //-----------------------------------
//     // console.log(req.query);
//     // // console.log(req.params);
//     //--------------------------------------------

//     const host = req.get('Host');
//     console.log(host);
//     res.send('Welcome to the user page after nodemon');
// });

//-----------------------------------------------------------

module.exports = app;