window.addEventListener("load", function (event) {

  const modal = document.querySelector('.js-modal');
  const modalOpen = document.querySelectorAll('.js-modal-btn');
  const modalClose = document.querySelector('.js-close-modal');

  modalOpen.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('is-show');
    });
  });


  modalClose.addEventListener('click', (e) => {
    modal.classList.remove('is-show');
  });

  document.body.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
      modal.classList.remove('is-show');
    }
  });
});
