function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.height = "10vh";
  } else {
    document.getElementById("navbar").style.backgroundColor = "initial";
    document.getElementById("navbar").style.height = "12vh";
  }
}

function scrolled() {
  console.log(window.scrollY)
  if (window.scrollY) {
    document.getElementById("navbar").style.backgroundColor = "black";
  }
}

scrolled()

function scrollClickContactos() {
  document.querySelector('.contactos-text').scrollIntoView({
  behavior: 'smooth'
  });
}

function scrollClickSamples() {
  document.querySelector('.samples-text').scrollIntoView({
  behavior: 'smooth'
  });
}

function scrollClickBio() {
  document.querySelector('.bio-container').scrollIntoView({
  behavior: 'smooth'
  });
}

function scrollClickHome() {
  scrollTo({
  top: 0,
  behavior: 'smooth'
  });
}

const popupbutton = document.querySelector('.button')
const b = document.querySelector('.popup-container')
const content = document.getElementById('content')

popupbutton.addEventListener('click', () => {
    b.style.visibility = 'visible'
})

b.addEventListener('click', (e) => {
  if(e.target.id !== ('content') && e.target.id !== ('container')) {
    b.style.visibility = 'hidden'
  }
})



const closepopup = document.querySelector('.popup-close')

closepopup.addEventListener('click', () => {
  if (b.style.visibility === 'visible') {
    b.style.visibility = 'hidden'
  } else {
    b.style.visibility = 'visible'
  }
})
