function moveSlides(slides, direction) {

   let lastFilm = slides.lastElementChild;
  // let firstFilm = slides.firstElementChild;
  if (direction == "left") {
    let firstOrderFilm = myFilms.pop();
    myFilms.unshift(firstOrderFilm);
    lastFilm.remove();
    let nextFilm = createFilm(myFilms[0]);
    slides.append(nextFilm);
  }
  if (direction == "right") {
    let firstOrderFilm = myFilms.shift();
    myFilms.push(firstOrderFilm);
    lastFilm.remove();
    let nextFilm = createFilm(myFilms[3]);
    slides.append(nextFilm);
  //  $(".list").append("<li class='item'>Тест</li>");
  }
}


function createFilm(currentFilm) {


 const newfilm = document.createElement('div');
 // const newfilm = document.getElementById('camp');
   newfilm.innerHTML = `
    <img class="block_images" src = "${currentFilm.pathToImg}" alt = "${currentFilm.name}">
`;
  return newfilm;
}


function run() {
  const slides = document.getElementById('camp');
  prevBtn = document.getElementById("button_left");
  prevBtn.addEventListener("click", () => moveSlides(slides, "left"));
  nextBtn = document.getElementById("button_right");
  nextBtn.addEventListener("click", () => moveSlides(slides, "right"));

}

window.onload = run;