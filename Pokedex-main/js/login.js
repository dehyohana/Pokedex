function loginUsuario(){
    event.preventDefault()
    let url = "https://api-pokemon-login.herokuapp.com/api/login"
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    body = {
        "email": email,
        "senha": senha
    }

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        if(this.response == "true"){
            let token = Math.random().toString(16).substring(2)
            sessionStorage.setItem('token',token)
            window.location.href = '/pokedex.html'
        }else{
            alert("Usuário ou senha incorreto!")
        }
        
    }
}