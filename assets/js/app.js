window.addEventListener('DOMContentLoaded', () => {

    /////////// Menu
    const burger = document.querySelector('.burger__icon'),
          burgerClose = document.querySelector('.burger__icon__close'),
          menu = document.querySelector('.menu'),
          navCenter = document.querySelector('.header__nav__center'),
          navRight = document.querySelector('.header__nav__rigth');

    function openMenu() {
        burger.addEventListener('click', () => {
            if (burger.style.display = "block") {
                //menu
                menu.style.right = "0";

                //burger btn
                burger.style.display = "none";
                burgerClose.style.display = "block";

                //body settings
                document.body.style.position = 'fixed';
                document.body.style.overflowY = 'scroll';

                //nav settings
                navCenter.style.opacity = "0";
                navRight.style.opacity = "0";
            }
        })
    }


    function closeMenu() {
        burgerClose.addEventListener('click', () => {
            if (burgerClose.style.display = "block") {
                //menu
                menu.style.right = "-100%";

                //burger btn
                burger.style.display = "block";
                burgerClose.style.display = "none";

                //body settings
                document.body.style.position = '';

                //nav settings
                navCenter.style.opacity = "1";
                navRight.style.opacity = "1";
            }
        })
    }

    openMenu();
    closeMenu();



    
    /////////// Pass Visible
    const eyesOn = document.querySelector('.pass__eyes__on'),
          eyesOff = document.querySelector('.pass__eyes__off'),
          input = document.querySelector('.main__input__pass'),

          eyesOn2 = document.querySelector('.pass__eyes__on__2'),
          eyesOff2 = document.querySelector('.pass__eyes__off__2'),
          input2 = document.querySelector('.main__input__pass__2');


    function showPass(on, off, inp) {
        on.addEventListener('click', () => {
            on.style.display = 'none';
            off.style.display = 'block';


            if (inp.getAttribute('type') === 'password') {
                inp.setAttribute('type', 'text')
            } else {
                inp.setAttribute('type', 'password')
            }
        })
    }
    
    function hidePass(on, off, inp) {
        off.addEventListener('click', () => {
            on.style.display = 'block';
            off.style.display = 'none';

            if (inp.getAttribute('type') === 'text') {
                inp.setAttribute('type', 'password')
            } else {
                inp.setAttribute('type', 'text')
            }
        })
    }

    showPass(eyesOn, eyesOff, input);
    showPass(eyesOn2, eyesOff2, input2);

    hidePass(eyesOn, eyesOff, input);
    hidePass(eyesOn2, eyesOff2, input2);
})