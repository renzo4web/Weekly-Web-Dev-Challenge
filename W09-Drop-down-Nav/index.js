const handleClick = () => {
  document.querySelector('.nav').classList.toggle('open');
  document.querySelector('.container').classList.toggle('blur');
};
document
  .querySelectorAll('span')
  .forEach((navBtn) => navBtn.addEventListener('click', handleClick));
