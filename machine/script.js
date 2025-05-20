var menuButton = document.getElementById('hamburger');
var cancelButton = document.getElementById('hamburger');
var navBar = document.getElementsByClassName('nav-bar');
console.log(navBar)


menuButton.addEventListener('click', function (e) {
    navBar[0].style.display = 'block';
    cancelButton.addEventListener('click', function (e) {
        navBar[0].style.display = 'none';
    });
});


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';


    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');


        const current = +counter.innerText;

        const increment = target / 100;


        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 3);
        } else {

            counter.innerText = target;
        }
    }
    updateCounter();
});



const counters2 = document.querySelectorAll('.counter2');

counters2.forEach(counter2 => {

    counter2.innerText = '0';


    const updateCounter = () => {

        const target = +counter2.getAttribute('data-target');


        const current = +counter2.innerText;

        const increment = target / 100;


        if (current < target) {

            counter2.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 3);
        } else {

            counter2.innerText = target;
        }
    }
    updateCounter();
});



