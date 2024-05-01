window.addEventListener("load", function (event) {
  console.log("All resources finished loading!");
});

window.addEventListener("load", function (event) {
  const modal = document.querySelector('.js-modal');
  const modalOpen = document.querySelector('.js-modal-btn');
  const modalClose = document.querySelector('.js-close-modal');

  modalOpen.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('is-show');
  });


  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-show');
  });


  document.body.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
      modal.classList.remove('is-show');
    }
  });
});
