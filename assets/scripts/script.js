const form = document.querySelector("#form");
const bolhas = document.querySelector("ul.bolhas");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${delay}s`;
  li.style.borderRadius = "36px";

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

  bolhas.appendChild(li);
}

const btnRequest = document.querySelector("#button-request"); //can do better!
form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("pessoas.json")
    .then((response) => {
      return response.json();
    })
    .then((jsonBody) => {
      verificaUser(jsonBody);
    });

  function verificaUser(json) {
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");

    for (let pessoa of json) {
      if (inputEmail.value !== pessoa.email && Number(inputPassword.value) !== pessoa.idade) {
        console.log('a');
      }

      console.log('cadastrou');
     
    }
  }
});
