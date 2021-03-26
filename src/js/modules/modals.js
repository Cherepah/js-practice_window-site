const modals = () => {
    function bindModal(modalTriggerSelector, modalWindowSelector, modalCloseBtnSelector, closeClickOverlay = true) {
        const modalTrigger = document.querySelectorAll(modalTriggerSelector),
          modalWindow = document.querySelector(modalWindowSelector),
          modalCloseBtn = document.querySelector(modalCloseBtnSelector),
          windows = document.querySelectorAll('[data-modal]');

        modalTrigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modalWindow.style.display = 'block';
                modalWindow.classList.add('animation-modal');
                document.body.style.overflow = 'hidden';
            }); 
        });
                   

        modalWindow.addEventListener('click', (e) => {
            if(e.target === modalWindow && closeClickOverlay) {

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modalWindow.style.display = 'none';
                modalWindow.classList.remove('animation-modal') ;
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        });

        modalCloseBtn.addEventListener('click', () => {

            windows.forEach(item => {
                item.style.display = 'none';
            });

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
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 6000);
};

export default modals;