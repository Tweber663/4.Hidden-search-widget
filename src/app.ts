// For search-1 functionality
const input1 = document.querySelector('.search-1') as HTMLInputElement;
const btn1 = document.querySelector('.btn-1');

btn1!.addEventListener('click', () => {
    input1.classList.toggle('active');
    input1.focus();
});

// For search-2 functionality
const input2Wrapper = document.querySelector('.search-2-wrapper');
const btn2 = document.querySelector('.btn-2');

btn2!.addEventListener('click', () => {
    input2Wrapper!.classList.toggle('active');
});

const input3Wrapper = document.querySelector('.search-3');
const btn3 = document.querySelector('.btn-3'); 

btn3?.addEventListener('click',() => {
    input3Wrapper?.classList.toggle('active');
})