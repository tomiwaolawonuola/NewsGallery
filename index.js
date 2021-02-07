
let active = document.querySelector('.active')

const allDiv = document.querySelectorAll('.img')
let opacity = 0.4;


allDiv[0].style.opacity = opacity;

allDiv.forEach(function(element){
        element.addEventListener('click', changeActive)
       
});


function changeActive (e){
       allDiv.forEach(function(element){
           element.style.opacity = 1;

           active.innerHTML = e.currentTarget.innerHTML;

           active.classList.add('fadeIn')

           e.currentTarget.style.opacity = opacity;
       })
}

