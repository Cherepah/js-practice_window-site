const modals = () => {
    function bindModal() {
        const modalTrigger = document.querySelector('.popup_engineer_btn'),
              modalWindow = document.querySelector('.popup_engineer'),
              modalCloseBtn = document.querySelector('.popup_close');

            modalTrigger.addEventListener('click', () => {

                if (modalWindow) {
                    modalWindow.style.display = 'block';


                }
            });
            modalCloseBtn.addEventListener('click', (e) => {
                console.log('close click');
                modalWindow.style.display = 'none';
            });
        
    }
    bindModal();
};

export default modals;