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

// const promis = new Promise((resolve, reject) => {
//     const fullFill = Math.random() > 0.5;
//     setTimeout(() => {
//         if (fullFill) {
//             resolve('Все кулл');
//         }
//         reject('Ошибка');
//     }, 1000);
// })
// promis.then(onResult)
//     .then(
//         () => {
//             console.log('Вызвали вторую функцию');
//         })
//     .then(()=>{console.log('Все гуд')})
//     .catch(OnError);

// function onResult(result) {
//     console.log(result);
// }

// function OnError(error) {
//     console.log(error);
// }