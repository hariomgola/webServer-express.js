// importing express from node.js
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const hbs = require('hbs');
const copyright = 'Copyright @ 2021 Hariom Gola. All Right Reserved Not to be Used for Making profit';

// express has only one function in it and provide various method to use
const app = express()

// printing 2 special variable nodejs provide
// Both these value are provided wrapper function and printing their value
console.log(__dirname);
console.log(__filename);

// Creating directory path
const publicDirectoryPath = path.join(__dirname, '../public');
const viewDirectoryPath = path.join(__dirname, '../template/views');
const partialDirectoryPath = path.join(__dirname, '../template/partial');


// telling express about hbs engine
app.set('view engine', 'hbs')
app.set('views', viewDirectoryPath);
hbs.registerPartials(partialDirectoryPath)




const expressStaticCall = () => {
    // express.static() is a function and its take a absolute path to work on
    app.use(express.static(publicDirectoryPath))
}

const callingDynamicHBS = () => {
    app.get('', (req, res) => {
        console.log(chalk.yellow('     -> Calling default handler'))
        res.render('index', {
            ApplicationName: 'Express.js Application',
            name: 'Hari',
            frontend: 'Angular',
            backend: 'node.js',
            copyright
        })
    })

    app.get('/about', (req, res) => {
        console.log(chalk.yellow('     -> Calling about handler'))
        res.render('about', {
            ApplicationName: 'About Me',
            title: 'About Me',
            About: 'Hi Hariom this Side,I am a full-stack web developer.',
            name: 'Hari',
            copyright,
            favLine: 'I see it.I code it promise it will break.'
        })
    })

    // use below url to get data 
    // http://localhost:3000/data?dumyData=Hari
    // http://localhost:3000/data?dumyData=codeme
    app.get('/data', (req, res) => {
        console.log(chalk.yellow('     -> Calling data handler'))
        res.send({
            data: req.query.dumyData
        })
    })

    // error which check for 404 about page sing same wild cart character
    app.get('/about/*', (req, res) => {
        res.send('404 about page Different from global error page')
    })
    // route for 404 error and to matchanything express provide wild cart character *
    app.get('*', (req, res) => {
        console.log(chalk.yellow('     -> Calling error handler'))
        res.render('error', {
            error: `Either you aren't cool enough to visit this page or it doesn't exist.....`
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
