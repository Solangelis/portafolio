const carouselItem = document.querySelector('.carousel-items');
const allItems = document.querySelectorAll('.carousel-item');


const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');

let visiblelItemI = 0;
const totalItems = allItems.length;



function updateCarousel() {
for (let i = 0; i < allItems.length; i++){
    allItems[i].classList.remove('active');
}
allItems[visiblelItemI].classList.add('active');

}




buttonPrev.addEventListener('click', () => {
    if(visiblelItemI > 0) {
        visiblelItemI--;
    } else{
        visiblelItemI = totalItems - 1;
    }
    updateCarousel()
})

buttonNext.addEventListener('click', () =>{
    if(visiblelItemI < totalItems -1){
        visiblelItemI++;
    }else{
        visiblelItemI = 0
    }
    updateCarousel()
})



// Validação do formulario.

const contactForm = document.getElementById('contactForm');


contactForm.addEventListener("submit", function(event){
    event.preventDefault();



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function validateName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name)
}

function checklength(input, min, max) {
    if(input.length < min){
        return false;
    }else if (input.length > max) {
        return false;
    }else{
        return true;
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const span = formControl.querySelector('.error-message');
    span.textContent = message;
    span.style.color = 'red';
  }



  function clearMessages() {
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(function(formControl) {
      formControl.classList.remove('error', 'success');
      const span = formControl.querySelector('.error-message');
      span.textContent = '';
    });
  }

  clearMessages();



const nameInput = document.getElementById('name').value.trim();
const emailInput = document.getElementById('email').value.trim();
const messageInput = document.getElementById('message').value.trim();


let isValid = true;

if (nameInput === '') {
    showError('O nome é obrigatorio');
    isValid = false;
} else if(! validateName(nameInput)) {
    showError(document.getElementById('name'), 'O nome só pode conter letras  e espaços.');
    isValid = false;
}else if (!checklength(nameInput, 3, 30)){
   showError(document.getElementById('name'),'O nome deve ter entre 3 e 30 caracteres.');
   isValid = false; 
}else if (!checklength(nameInput, 3, 30)) {
    showError(document.getElementById('name'), 'O nome deve ter entre 3 e 30 caracteres.');
    isValid = false;
}


if (emailInput === '') {
    showError(document.getElementById('email'), 'O e-mail é obrigatório.');
    isValid = false;
  } else if (!validateEmail(emailInput)) {
    showError(document.getElementById('email'), 'Por favor, insira um e-mail válido.');
    isValid = false;
  }


  if (messageInput === '') {
    showError(document.getElementById('message'), 'A mensagem é obrigatória.');
    isValid = false;
  } else if (!checkLength(messageInput, 10, 300)) {
    showError(document.getElementById('message'), 'A mensagem deve ter entre 10 e 300 caracteres.');
    isValid = false;
  }


if (isValid) {
    alert('Formulario enviado com sucesso')

contactForm.onsubmit();
}

});

