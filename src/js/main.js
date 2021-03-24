import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content');
    tabs('.glazing_slider', '.decoration_item', '.tabs-2', 'after_click');
});