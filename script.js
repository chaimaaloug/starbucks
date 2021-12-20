const btn = document.getElementById("menuBtn")


function navToggle() {
    btn.classList.toggle('open')
    console.log('dgs');
}

btn.addEventListener('click', navToggle); 