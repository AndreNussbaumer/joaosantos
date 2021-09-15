function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.height = "10vh";
  } else {
    document.getElementById("navbar").style.backgroundColor = "initial";
    document.getElementById("navbar").style.height = "12vh";
  }
}

function scrollClickContactos() {
  document.querySelector('.contactos').scrollIntoView({
  behavior: 'smooth'
  });
}

function scrollClickSamples() {
  document.querySelector('.name').scrollIntoView({
  behavior: 'smooth'
  });
}

function scrollClickBio() {
  document.querySelector('.content').scrollIntoView({
  behavior: 'smooth'
  });
}