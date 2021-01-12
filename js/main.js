
<<<<<<< Updated upstream
 const text = document.getElementById("text")
 const darkness = document.getElementById('dark')
=======

const text = document.getElementById("text")
 const main = document.querySelector('.main')
>>>>>>> Stashed changes

const darkMode = () =>{
  main.classList.toggle('dark') 
  
}



 text.addEventListener('click', darkMode)