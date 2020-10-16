'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // вывод модального окна

    const btnOrder = document.querySelector('.btn-order'),
          blackoutModal = document.querySelector('.blackout-modal'),
          modal = document.querySelector('.modal'),
          btnCloseModal = document.querySelector('.close-modal'),
          btnSend = document.querySelector('.btn-modal'),
          smollModal = document.querySelector('.modal-smoll'),
          closeSmollModal = document.querySelector('.close-smoll-modal');

    btnOrder.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
        blackoutModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        blackoutModal.classList.remove('show');
        modal.classList.remove('show');
        smollModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    btnCloseModal.addEventListener('click', () => {
        closeModal();
    });

    btnSend.addEventListener('click', () => {
        modal.classList.remove('show');
        smollModal.classList.add('show');
    });

    closeSmollModal.addEventListener('click', () => {
        blackoutModal.classList.remove('show');
        smollModal.classList.remove('show');
        document.body.style.overflow = '';
    });

    blackoutModal.addEventListener('click', (e) => {
        if (e.target === blackoutModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && blackoutModal.classList.contains('show')) {
            closeModal();
        }
    });

    const celectedColor0 = document.querySelectorAll('.circle-color')[0],
          celectedColor1 = document.querySelectorAll('.circle-color')[1],
          celectedColor2 = document.querySelectorAll('.circle-color')[2];

    celectedColor0.addEventListener('click', function() {
        celectedColor0.classList.add('celected');

        if (celectedColor1.classList.contains('celected') || celectedColor2.classList.contains('celected')) {
            celectedColor1.classList.remove('celected');
            celectedColor2.classList.remove('celected');
        }
    });

    celectedColor1.addEventListener('click', function() {
        celectedColor1.classList.add('celected');

        if (celectedColor0.classList.contains('celected') || celectedColor2.classList.contains('celected')) {
            celectedColor0.classList.remove('celected');
            celectedColor2.classList.remove('celected');
        }
    });

    celectedColor2.addEventListener('click', function() {
        celectedColor2.classList.add('celected');

        if (celectedColor1.classList.contains('celected') || celectedColor0.classList.contains('celected')) {
            celectedColor1.classList.remove('celected');
            celectedColor0.classList.remove('celected');
        }
    });

});