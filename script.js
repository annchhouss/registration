function togglePasswordVision() {
    let psswInput = document.querySelector('.form-password')

    if (psswInput.type == "password")
        psswInput.type = "text"
    else
        psswInput.type = "password"
}

let form = document.querySelector("form");
function handleForm(event) {
    event.preventDefault();
}

form.addEventListener('submit', handleForm);


function successSign(){
    alert('Seccessfully')

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

    let title = document.querySelector('.title')
    let name = document.querySelector('.form-name')
    title.textContent = name.value("Welcome" + name)

    let form = document.querySelector('main-right')
    form.style.display = 'none'

    let main = document.querySelector(".main")
    main.style.display = 'block'
}
