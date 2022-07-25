let body = document.querySelector('body')
let openCloseMenu = document.querySelector('.open-close-menu')
let inputSearch = document.querySelector('.search')
let buttonSearch = document.querySelector('.open-close-search')

function openMenu() {
  body.classList.toggle('menu-expanded')
  openCloseMenu.classList.toggle('open')
  buttonSearch.classList.toggle('hide')
}

function openSearchInput() {
  inputSearch.classList.toggle('show')
  buttonSearch.classList.toggle('clicked')
}
