const form = document.querySelector('#form');
const inputEmail = document.querySelector('')

form.addEventListener('submit',function(event){
    event.preventDefault();
    verifyUser();
});