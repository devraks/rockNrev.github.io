var typed=new Typed(".typing",{
  strings:["Web Developer", "Free Lancer", "System Associate"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzCU4ER8ubcmjYooMuxjVG1uFx0gis5HYkWPIa1A1k1/dev'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML.style.color= document.getElementsByClassName("fa-home").style.color
      msg.innerHTML = "Submitted Successfully."
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
