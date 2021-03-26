const tabs = (tabHeaderSelector, tabSelector, tabContentSelector, tabActiveClass, display) => {

    const tabHeader = document.querySelector(tabHeaderSelector),
          tabs = document.querySelectorAll(tabSelector),
          tabContents = document.querySelectorAll(tabContentSelector);

    function hideTab() {
        tabContents.forEach( (item) => {
            if(display) {
                item.style.display = 'none';
            } else {
                item.classList.remove('tab-show');
                item.classList.add('tab-hide');
            }
        });
    }
    function showTab(number = 0) {
        if(display) {
            tabContents[number].style.display = display;
        } else {    
            tabContents[number].classList.remove('tab-hide');
            tabContents[number].classList.add('tab-show');
        }
    }
    //target.parentNode - родитель элемента
    //tabContentSelector > div > div 
    tabs.forEach( (tab, count) => {
        tab.addEventListener('click', () => {
            hideTab();
            showTab(count);
            if(tabActiveClass) {
                tabs.forEach(item => {
                    item.classList.remove(tabActiveClass);
                });
                tab.classList.add(tabActiveClass);
            }
        });
    });

    hideTab();
    showTab();
}

export default tabs;