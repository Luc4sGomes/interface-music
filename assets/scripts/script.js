import artistImage from "./artistasImagens.js";
import {lis} from "./artistasImagens.js";

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
    .then((response) => {
      //se for ok vai retornar a resposta em json
      return response.json();
    })
    .then((jsonBody) => {
      //meu valor final
      verificaUser(jsonBody); //chama a funcao pra ver se o user é igual ao valor dos inputs
    });

  function verificaUser(json) {
    //recebe meu jsonBody
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    const inputEmailValue = inputEmail.value;
    const inputPasswordValue = inputPassword.value;

    //CAN DO BETTER!

    /*for(user of json){
      if(user.email === inputEmailValue.toLowerCase() && user.cpf === inputPasswordValue){
        console.log('agora foi');
        return;
      }
      console.log('agora nao foi');
      return;
    }*/

    /*json.forEach((user) => {
      //varrendo meu array json que vem do fetch

      //verfica se o email do input e a senha são diferentes(validacao inversa) ao email e cpf do meu user no json
      if (inputEmailValue.toLowerCase() !== user.email) {
        console.log("essa email nao existe");
        return;
      }
      else if(inputPasswordValue.replace(/[^0-9]/g, "") !== user.cpf){
        console.log('essa senha nao existe');
      }
      console.log("existe");
    });*/
  }
});




//logica para colocar as imagens dos artistas de fundo na minha ul

const keepList = [...lis]; //desestruturação nos meus li tranformandos em um array

keepList.forEach((li) => { //varrendo cada li
  li.addEventListener("mouseover", (event) => { //adicionando um evento para cada li
    artistImage(event.target); //funcao para verificar se os artistas sao validos esssa função esta sendo chamada no meu import do file artistasImagens.js
    
  });
});


