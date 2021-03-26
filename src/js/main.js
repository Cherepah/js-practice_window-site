import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content');
    tabs('.glazing_slider', '.decoration_item', '.tabs-2', 'after_click');
    tabs('.glazing_slider', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
    timer('#timer', '2022-03-31');
});