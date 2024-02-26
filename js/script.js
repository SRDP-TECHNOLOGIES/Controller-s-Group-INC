/* burger start */
function headerBurger() {
  let headerBburger = document.querySelector(".header__burger");
  let blockSocial = document.querySelector(".block-social");
  let blockMenuNavigation = document.querySelector('.blockMenu-navigation');
  let overlay = document.querySelector('.overlay');

  headerBburger.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(blockMenuNavigation);

    // Додаю та видаляю на burger при кліці клас
    this.classList.toggle("cross");

    if (computedStyle.display === "none") {
      blockMenuNavigation.style.display = "block";
      blockSocial.style.display = "block";
    } else if (computedStyle.display === "block") {
      blockMenuNavigation.style.display = "none";
      blockSocial.style.display = "none";
    }
  });
}

headerBurger();
/* burger end */

//====================================================

/* header sticky start */
// function headerSticky() {
//     let header = document.querySelector('.header');

//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         header.style.position = 'sticky';
//         header.style.zIndex = '10';
//         header.style.top = '0';
//     } else {
//         header.style.position = 'static';
//     }
// }

// window.addEventListener('scroll', headerSticky);
/* header sticky end */