
 const text = document.getElementById("text")
 const darkness = document.getElementById('dark')

const toogleMode = () => {
  if(darkness.classList.contains('on')){
    text.innerHTML="Dark times"
  } else{
    text.innerHTML="Turn on  light"
  }
  
  darkness.classList.toggle('on')
  text.classList.toggle('light')
}

 text.addEventListener('click', toogleMode)