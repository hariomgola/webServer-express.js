// importing express from node.js
const express = require('express');
const chalk = require('chalk');
const path = require('path');

// express has only one function in it and provide various method to use
const app = express()
// telling express about hbs engine
app.set('view engine', 'hbs')

// Both these value are provided wrapper function and printing their value
console.log(__dirname);
console.log(__filename);
console.log(chalk.yellow(path.join(__dirname, '../public')))

// Updating view location
// const viewDirectoryPath = path.join(__dirname,'../template');
// app.set('view',viewDirectoryPath);




const expressStaticCall = () => {
    // express.static() is a function and its take a absolute path to work on 
    let publicDirectoryPath = path.join(__dirname, '../public');
    app.use(express.static(publicDirectoryPath))
}

const callingDynamicHBS = () => {
    app.get('', (req, res) => {
        res.render('index', {
            name: 'Hari',
            frontend: 'Angular',
            backend: 'node.js'
        })
    })

    app.get('/about',(req,res)=>{
        res.render('about',{
            title:'About Me',
            name:'Hari',

        })
    })
}


// function for responding static text 
const expressCustomHandler = () => {
    // app.get is used to get the route and also accept second function which accept 2 parameter req(request) and res(response)
    app.get('', (req, res) => {
        // function to call when the blank or default handler is called
        console.log(chalk.magenta('     -> default route is called'));
        // thid res.send allow to send the response to the browser
        res.send('<h1> - Hello Express! - </h1>')
    })

    // creating another request using another handler
    app.get('/help', (req, res) => {
        console.log(chalk.magenta('     -> help hanlder is called'));
        res.send(' - Hello Help page - ')
    })

    // creating info handler
    app.get('/info', (req, res) => {
        console.log(chalk.magenta('     -> info hanlder is called'));
        res.send(' - Hello info page - ')
    })

    // sending json using json handler
    app.get('/json', (req, res) => {
        console.log(chalk.magenta('     -> json hanlder is called'));
        res.send({
            name: 'hari',
            role: 'developer'
        })
    })

    // sending another handler
    app.get('/json-1', (req, res) => {
        console.log(chalk.magenta('     -> json-1 hanlder is called'));
        res.send([{
            name: 'Hari'
        }, {
            name: 'Raj'
        }])
    })
}

const startExpress = () => {
    // start the server up and running using below method only use in single time in application
    // passing default port address as 3000
    app.listen(3000, () => {
        // call back function called when app will run
        console.log(chalk.blueBright(' -> Server is up on port 3000 '));
    })
}



expressStaticCall();
callingDynamicHBS();
startExpress();

