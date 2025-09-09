// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, last_name, email })
    })
    .then(res => res.json());
}
addUser("Carlos", "Ortiz", "carlos72ortiz14@gmail.com");