const fetch = require('node-fetch');

const body = { name: "John Doe", numberOfPeople: 3 }

fetch('https://reservation100-sandbox.mxapps.io/api/reservations',{
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
})
.then(res => console.log(res));