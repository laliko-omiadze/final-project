'use strict'

export function scrollTo() {
    let scroller = document.getElementById('up');
 
 
    scroller.addEventListener('click', function() {
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    });
 }
 