const arrows = document.querySelectorAll('.arrow');
const movielist = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    let Number = movielist[i].querySelectorAll('img').length;
    let countImg = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        countImg++;
        if (Number - (4 + countImg) + (4 - ratio) >= 0)  //(4 - ratio)--that means we have more
        // change to click the image if we expand our screen that means we have decrease the click on image
        {
            movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get
                ('transform')[0].x.value - 300}px)`;
        }
        else {
            movielist[i].style.transform = `translateX(0)`;
            countImg = 0;
        }

    })

    console.log();

})

const ball = document.querySelector('.toggle-ball');
const item = document.querySelectorAll('.container, .movie-list-title,.navbar,.sidebar,.left-menu-icon,.toggle,.navbar-container');

ball.addEventListener("click", () => {
    item.forEach(item => {
        item.classList.toggle('active');

    })
    ball.classList.toggle("active");
})