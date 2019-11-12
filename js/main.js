'use strict';
const burguerMenu = document.querySelector('.nav-trigger');
const navList = document.querySelector('.nav');
const navListClose = document.querySelector(".nav-close");

var body = document.body;
body.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false);

function handleClickMenu () {
  navList.classList.remove('hidden');
  burguerMenu.classList.add('hidden');

}

function handleClickClose () {
  navList.classList.add('hidden');
  burguerMenu.classList.remove('hidden');
}

burguerMenu.addEventListener('click', handleClickMenu);
navListClose.addEventListener('click', handleClickClose);