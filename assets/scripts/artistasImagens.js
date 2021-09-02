export const lis = document.querySelectorAll("ul .li"); //peguei todos meus li
const aside = document.querySelector("aside"); //peguei minha ul

export default function artistImage(event) {
  if (event.innerText === "Anita") {
    //se o artista for igual ao texto interno ele adiciona a img pelo css

    aside.classList.add("image-artist-anita");
    aside.classList.remove("image-artist-mckevin");
    aside.classList.remove("image-artist-ludmilla");
    aside.classList.remove("image-artist-traviscott");

  } else if (event.innerText === "Mc Kevin") {

    aside.classList.add("image-artist-mckevin");
    aside.classList.remove("image-artist-anita");
    aside.classList.remove("image-artist-ludmilla");
    aside.classList.remove("image-artist-traviscott");

  } else if (event.innerText === "Ludmilla") {
    aside.classList.add("image-artist-ludmilla");
    aside.classList.remove("image-artist-anita");
    aside.classList.remove("image-artist-mckevin");
    aside.classList.remove("image-artist-traviscott");

  } else if (event.innerText === "Traviscott") {

    aside.classList.add("image-artist-traviscott");
    aside.classList.remove("image-artist-anita");
    aside.classList.remove("image-artist-mckevin");
    aside.classList.remove("image-artist-ludmilla");
    
  }
}
