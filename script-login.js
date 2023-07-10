

var email= document.querySelector('#email')
var senha = document.querySelector('#senha')
var btnLogin = document.querySelector('#login')



btnLogin.addEventListener('click', ()=>{
    let emailRecuperado = localStorage.getItem('email')
    let senhaRecuperada = localStorage.getItem('senha')

    if(email.value == emailRecuperado && senha.value == senhaRecuperada){
        alert("Login efetuado com sucesso!")
        location.href = 'index.html'
    } else{
        alert("Login ou senha invalidos. Caso não possua cadastro realize um no campo abaixo (Cadastrar-se)!")
        email.style.border = "1px solid red"
        senha.style.border = "1px solid red"
       
        
    }
})


// _____________+++__________



