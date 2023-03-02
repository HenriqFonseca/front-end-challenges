const inputUsers = document.querySelectorAll('.input-user')

inputUsers.forEach((input) => {
    input.setAttribute('value', "")
    input.addEventListener('input', (e) => {
        console.log(e.target.setAttribute('value', e.target.value))
    })
})