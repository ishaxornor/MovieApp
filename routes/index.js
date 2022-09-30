const authRouter = require('./auth');


module.exports =(app)=>{
    app.use('/auth', authRouter);


    // //routes
    // app.get('/',(req,res,next)=>{
    //     res.send('Welcome to homepage');
    // });

    // app.get('/user/:id/:postId',(req,res,next)=>{
    //     const host = req.get('Host');
    //     console.log(host);
    //     res.send('Welcome to the user page after nodemon');
    // });
}