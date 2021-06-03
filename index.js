const submitData = (name, email) => {
    const userData = {
        name: `${name}`,
        email: `${email}`
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }
    const fetchChain = fetch("http://localhost:3000/users", configurationObject)
    .then(response => {
        return response.json()
    })
    .then(object =>{
        console.log(object)
        const userId = object.id
        console.log(userId)
        const p = document.createElement('p')
        p.innerHTML = userId
        document.body.append(p)
    })
    .catch(error => {
        const errorP = document.createElement('p')
        console.log(error.message)
        errorP.innerHTML = error.message
        document.body.append(errorP)
    });
    return fetchChain 
}
