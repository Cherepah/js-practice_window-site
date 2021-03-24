const tabs = (tabHeaderSelector, tabSelector, tabContentSelector, tabActiveClass) => {

    const tabHeader = document.querySelector(tabHeaderSelector),
          tabs = document.querySelectorAll(tabSelector),
          tabContents = document.querySelectorAll(tabContentSelector);

    function hideTab() {
        tabContents.forEach( (item) => {
            item.classList.remove('tab-show');
            item.classList.add('tab-hide');
        });
    }
    function showTab(number = 0) {
        tabContents[number].classList.remove('tab-hide');
        tabContents[number].classList.add('tab-show');
    }
    //target.parentNode - родитель элемента
    //tabContentSelector > div > div 
    tabs.forEach( (tab, count) => {
        tab.addEventListener('click', () => {
            hideTab();
            showTab(count);
            if(tabActiveClass) {
                tab.classList.remove(tabActiveClass);
                tab[count].classList.add(tabActiveClass);
            }
        });
    });

    hideTab();
    showTab();
}

export default tabs;