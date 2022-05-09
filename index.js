const searchContainer = document.querySelector(".container")
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  searchContainer.classList.toggle('active')
  input.focus()
})
