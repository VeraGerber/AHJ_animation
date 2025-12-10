const btn = document.querySelector('.btn');
const content = document.querySelector('.content-container');

btn.addEventListener('click', () => {
  btn.classList.add('btn_border');

  content.classList.remove('hidden');
  content.classList.toggle('close');
  content.classList.toggle('open');
});