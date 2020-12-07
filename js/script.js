const form = document.getElementById('form');
let inputGroup = document.querySelectorAll('.input-group');
const email = document.getElementById('email');


inputGroup.forEach(function(el){
  // Create error icon
  const div = document.createElement('div');
  const img = document.createElement('img');
  div.className = 'error-icon';
  img.setAttribute('src', '/images/icon-error.svg');
  img.setAttribute('alt', 'Error Icon');
  div.appendChild(img);
  
  el.appendChild(div);
  
  // Create error message
  const inputName = el.firstElementChild.nextElementSibling.getAttribute('placeholder');
  const div2 = document.createElement('div');
  const p = document.createElement('p');
  p.innerText = `${inputName} cannot be empty`;
  div2.className = 'error-msg';
  div2.appendChild(p);

  el.appendChild(div2);
  
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  inputGroup.forEach(function(input, index){
    const formInput = input.firstElementChild.nextElementSibling;

    if(formInput.value === ""){
      input.lastChild.previousSibling.style.display = 'block';
      input.lastChild.style.display = 'block';

      formInput.style.marginBottom = '3rem';
      formInput.style.borderColor = 'var(--Red)';
  
      
      formInput.classList.add('placeholder-color');
      formInput.style.borderWidth = '2px';
    }else{
      input.lastChild.previousSibling.style.display = 'none';
      input.lastChild.style.display = 'none';

      formInput.style.marginBottom = '1rem';
      formInput.style.borderColor = 'var(--GrayishBlue)';

      formInput.style.borderWidth = '1px';
      formInput.classList.remove('placeholder-color');  
    } 
  });
  
  if(email.value !=='' && !validateEmail(email.value)){
    email.style.borderColor = 'var(--Red)';
    email.style.borderWidth = '2px';
    email.style.marginBottom = '3rem';
    email.style.color = 'var(--Red)';

    const errIcon = email.nextElementSibling;
    errIcon.style.display = 'block';

    const errMsg = email.nextElementSibling.nextElementSibling;
    errMsg.style.display = 'block';
    errMsg.innerHTML ='<p>Looks like this is not an email</p>'; 
  }else {
    email.style.color = 'initial';
  }
});


  
    
    
    