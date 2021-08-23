const form = document.querySelector("#form");
const bolhas = document.querySelector("ul.bolhas");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${delay}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

  bolhas.appendChild(li);
}

const btnRequest = document.querySelector("#button-request");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("pessoas.json") //fazendo uma requisicao no meu arquivo json
    .then((response) => { //se for ok vai retornar a resposta em json
      return response.json();
    })
    .then((jsonBody) => { //meu valor final
      verificaUser(jsonBody); //chama a funcao pra ver se o user é igual ao valor dos inputs
     
    });

  function verificaUser(json) { //recebe meu jsonBody 
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    const inputEmailValue = inputEmail.value;
    const inputPasswordValue = inputPassword.value;

    json.forEach((user) => { //varrendo meu array json que vem do fetch
      
      
      //verfica se o email do input e a senha são iguais ao email e cpf do meu user no json
      if(inputEmailValue.toLowerCase() === user.email && inputPasswordValue.replace(/[^0-9]/g, '')){ 
        console.log('essa email existe');
      }
      else{
        return;
      }
    });



    
  }
});
