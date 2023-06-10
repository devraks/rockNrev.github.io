var typed=new Typed(".typing",{
  strings:["Web Developer", "Free Lancer", "System Associate"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwF24iC34GgscTaqWsjWHM-xgrpYdSN8smKo4oUjGQIweukvSoUTnitvwwYSwd5IbCG_A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML.style.color= document.getElementsByClassName("btn").style.color
      msg.innerHTML = "Submitted Successfully."
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})