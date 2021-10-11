import './sass/main.scss';


const refs = {
    formRef: document.querySelector('.js-form'),
    inputRef: document.querySelectorAll('.js-input'),
    textAreaRef: document.querySelector('.js-textarea'),
    sendBtnRef: document.querySelector('.js-sendBtn'),
};
getLS();

function saveLS(evt) { 
    let commit = evt.target.value;
    localStorage.setItem('text', commit);
}

refs.textAreaRef.addEventListener('input', saveLS);

function getLS() {
    refs.textAreaRef.textContent = localStorage.getItem('text');
}

function sendForm(evt) {
    evt.preventDefault();
    localStorage.clear('text');
    refs.formRef.reset();
}

refs.sendBtnRef.addEventListener('click', sendForm);