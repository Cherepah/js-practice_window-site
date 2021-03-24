const modals = () => {
    function bindModal(modalTriggerSelector, modalWindowSelector, modalCloseBtnSelector) {
        const modalTrigger = document.querySelectorAll(modalTriggerSelector),
          modalWindow = document.querySelector(modalWindowSelector),
          modalCloseBtn = document.querySelector(modalCloseBtnSelector);

        modalTrigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
                modalWindow.style.display = 'block';
                modalWindow.classList.add('animation-modal');
                document.body.style.overflow = 'hidden';
            }); 
        });
                   

        modalWindow.addEventListener('click', (e) => {
            if(e.target === modalWindow) {
                modalWindow.style.display = 'none';
                modalWindow.classList.remove('animation-modal') ;
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        });

        modalCloseBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
            modalWindow.classList.remove('animation-modal');
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });
    }

    function showModalByTime(modalSelector, time) {
        const modalWindow = document.querySelector(modalSelector);
        
        setTimeout( () => {
            modalWindow.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 6000);
};

export default modals;