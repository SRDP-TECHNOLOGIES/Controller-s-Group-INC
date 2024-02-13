// function headerBurger() {
//     let headerBburger = document.querySelector(".header__burger");
//     let blockSocial = document.querySelector(".block-social");
//     let blockMenuNavigation = document.querySelector('.blockMenu-navigation');
  
//     headerBburger.addEventListener("click", function() {
//       let computedStyle = window.getComputedStyle(blockMenuNavigation);
  
//       // Додаю та видаляю на burger при кліці клас
//       this.classList.toggle("cross");
  
//       if (computedStyle.display === "none") {
//         blockMenuNavigation.style.display = "block";
//         blockSocial.style.display = "block";
//       } else if (computedStyle.display === "block") {
//         blockMenuNavigation.style.display = "none";
//         blockSocial.style.display = "none";
//       }
//     });
//   }
  
//   headerBurger();