import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms(formsSelector, modalTimerId) {
    const forms = document.querySelectorAll(formsSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    }); 

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');

            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;`;
            form.insertAdjacentElement('afterend', statusMessage);
            
            const formData = new FormData(form);

            const formJson = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', formJson)
              .then(data => {
                console.log(data);
                showThanksModal(message.success);
              }).catch(() => {
                showThanksModal(message.failure);
              }).finally(() => {
                form.reset();
                statusMessage.remove();
              });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.style.display = 'none';
        openModal('.modal', modalTimerId);
        
        const thanksModal = document.createElement('div');

        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>`;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.style.display = 'block';
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;