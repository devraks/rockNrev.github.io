var typed=new Typed(".typing",{
  strings:["Full Stack Developer", "Free Lancer", "Senior System Associate"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwb6AjQ_GNqYhbAmA9TEreqpE1Ghmhb67sbinMW8AmRgc4Zs5iJrvJLP7LAf8ZeF3uVbQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Submitted Successfully."
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
