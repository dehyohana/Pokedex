function cadastrarUsuario(){
    event.preventDefault()
    let url = "https://api-pokemon-login.herokuapp.com/api/cadastrar"
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    body = {
        "id": "",
        "username" : username,
        "email": email,
        "senha": senha
    }

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        if(this.response == "true"){
            window.location.href = '/login.html'
        }else{
            alert("Usuário já cadastrado!")
        }
        
    }
}