/**
 -> Creating node js Server using express js (node.js package)
  
 -> Creating and run node.js server
    - firstly create or initialize using `npm init command`
    - Install chalk and nodemon npm library using command `npm i chalk` and `npm i nodemon`
    - create a start point in package.json using ` "start": "nodemon src/app.js" `
    - Import the express library in app.js
    - Install express if not installed globally using `npm install express`

    ---------------------------- Code section ---------------------------------

    // importing express from node.js
    const express = require('express');
    const chalk = require('chalk');


    // express has only one function in it and provide various method to use
    const app = express()

    // app.get is used to get the route and also accept second function which accept 2 parameter req(request) and res(response)
    app.get('',(req,res)=>{
        // function to call when the blank or default handler is called
        
        // thid res.send allow to send the response to the browser
        res.send(' - Hello Express! - ')
    })

    // creating anther request using another handler
    app.get('/help',(req,res)=>{
        res.send(' - Hello Help page - ')
    })

    app.get('/info',(req,res)=>{
        res.send(' - Hello info page - ')
    })


    // start the server up and running using below method only use in single time in application
    // passing default port address as 3000
    app.listen(3000,()=>{
        // call back function called when app will run
        console.log(chalk.blueBright(' -> Server is up on port 3000 '));
    })

    ---------------------------- Code section ---------------------------------


 -> Using Ststic Asserts (html,css,client javascript,audio,video)
    - firstly create a ststic file.
    - we need absolute path for that file here relative path doesn't works.
    - for getting the absolute path node provide the 2 very important method
            - __dirname
            - __filename
    - We are going to use node.js path library you can check on node.js documentation


 -> We are going to Use template engine to dynamically rendered Html
 -> Template engine we are going to use here is handlebars
 -> Install handle bars using command 'npm i handlebars'
 -> or use hbs librarys its uses handlebar library behind the scene 'npm i hbs'

 -> Now we are going to use partials with handle bars
    - Partial as its name suggest allow you to create a little template which is part of a bigger web page
    - firstly require or load hbs into the application

 -> Creating Api
    - npm i request
    - start project node src/app.js -e js,hbs

















 */