const input = document.querySelector('.search-1') as HTMLFormElement;
const btn = document.querySelector('.btn-1');

btn!.addEventListener('click', () => {
    input.classList.toggle('active');
})

