console.log('Client side javaScript is Coming from back-end');

// fetch('http://localhost:3000/weather?address=india').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// }) 

const weatherform = document.querySelector('form');
const searchButton = document.querySelector('input');

// printing input
const MessageOutput = document.querySelector('#jsonMessage');
MessageOutput.textContent = '';

weatherform.addEventListener('submit', (e) => {
    console.log('      -> Add Event Listener call back is calling')
    // preventing page load
    e.preventDefault()

    const location = searchButton.value;
    console.log('      -> ', location)

    let fetchUrl = `http://localhost:3000/weather?address=${location}`
    console.log('fetch Url -> ', fetchUrl)

    fetch(fetchUrl).then((response) => {
        response.json().then((data) => {
            console.log(data)
            MessageOutput.textContent = JSON.stringify(data);
        })
    })
})
