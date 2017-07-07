'use strict';
(() => {
    let flag = false;
    const secondDayButton = document.querySelector('.button'),
        lineOne = document.querySelector('.button__lineOne'),
        lineTwo = document.querySelector('.button__lineTwo'),
        lineThree = document.querySelector('.button__lineThree');

    secondDayButton.addEventListener( 'click' ,() => {
        if (flag) {
            lineOne.classList.toggle('button__lineOne-rev');
            lineTwo.classList.toggle('button__lineTwo-rev');
            lineThree.classList.toggle('button__lineThree-rev');
        }

        lineOne.classList.toggle('button__lineOne-active');
        lineTwo.classList.toggle('button__lineTwo-active');
        lineThree.classList.toggle('button__lineThree-active');

        flag = true;
    });
})();

