document.addEventListener("DOMContentLoaded",function() {

//pega formulario

const form = document.querySelector("form");

//pegar inputs

const userInput = form.querySelector('input[type="email"]');

const passwordInput = form.querySelector

('input[type="password"]');

//evento submit

form.addEventListener("submit", function(event) {

event.preventDefault();


//obtem os valores dos inputs

const userValue = userInput.value
const passwordValue = userInput.value;

// validação básic dos campos (melhorar isso)


if (userValue === '' || passwordValue === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de uma ação de login (como enviar para o backend)
        console.log(`Usuário: ${userValue}, Senha: ${passwordValue}`);
        
        //  usar fetch() para enviar os dados para uma API de autenticação
        
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userValue,
                password: passwordValue
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            // Lógica para redirecionar o usuário ou exibir uma mensagem de sucesso
        })
        .catch(error => {
            console.error('Erro:', error);
        });
        
    });
});










