async function getData() {
    const data = await  fetch('http://localhost:3000/auth/registration', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": "locaala@mail.ru", "password": "123" })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

async function createRole() {
    const role = await  fetch('http://localhost:3000/role', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "value": "admin" })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

//createRole();
getData();