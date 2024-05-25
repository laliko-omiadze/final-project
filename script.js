'use strict'

//accordion


let accordion = document.querySelectorAll('.container');


accordion.forEach(function(item) {
   item.addEventListener('click', function() {
       this.classList.toggle("active");
   });
});

//scroller

import {scrollTo} from '../JS/scroll.js';

scrollTo();


//validation

import {form} from '../JS/validation.js';

form ();


import { passwordvalidation } from '../JS/validation.js';


passwordvalidation();


import {emailvalidation} from '../JS/validation.js';


emailvalidation();


import { showpassword } from '../JS/validation.js';


showpassword ();

//cookies

import { loginfo } from '../JS/cookies.js';

loginfo();

//get method and filter

axios.get('https://date.nager.at/api/v2/publicholidays/2020/US')
 .then(function (response) {
   console.log(response.data);


   let div = document.getElementById('advice');
   let ulEl = document.createElement('ul');
   let allHolidays = response.data;


   function filterHolidays(input) {
     return allHolidays.filter(function(holiday) {
       return holiday.localName.toLowerCase().includes(input.toLowerCase()); 
     });
   }


   function updateAdviceList(filteredHolidays) {
     ulEl.innerHTML = '';


     if (filteredHolidays.length === 0) {
       let li = document.createElement('li');
       li.innerText = "Not found.";
       li.style.color = 'red';
       ulEl.appendChild(li);
     } else {
       filteredHolidays.forEach(holiday => {
         let li = document.createElement('li');
         li.innerText = holiday.localName;
         li.style.fontSize = '18px';
         li.style.margin = '10px';
         ulEl.appendChild(li);
       });
     }
   }


   updateAdviceList(allHolidays);


   div.appendChild(ulEl);


   let inputAdvice = document.getElementById('search');


   inputAdvice.addEventListener('keyup', function() {
     let userInput = this.value.trim();
     let filteredHolidays = filterHolidays(userInput);


     updateAdviceList(filteredHolidays);
   });
 })
 .catch(function (error) {
   console.log(error);
 });


 //slider

 new Splide( '.splide' ).mount();

 document.addEventListener( 'DOMContentLoaded', function () {
 new Splide( '#image-carousel', {
 heightRatio: 0.5,
} ).mount();
} );


//burgerbar

let mainMenu = document.querySelector('.mainMenu');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');
let menu_items = document.querySelectorAll('nav .mainMenu li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
   item.addEventListener('click',function(){
       close();
   })
})


function show(){
   mainMenu.style.display = 'flex';
   mainMenu.style.top = '0';
}
function close(){
   mainMenu.style.top = '-100%';
}




