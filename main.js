// binding for shorthand use
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get all tab-item in the document
const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

console.log(tabs);
console.log(panes);

// show line for the active tab
let currentActiveTab =  $('.tab-item.active');
let line = $('.tabs .line');
line.style.left = currentActiveTab.offsetLeft + 'px';
line.style.width = currentActiveTab.offsetWidth + 'px';

tabs.forEach(function (tab, index) {
    tab.onclick = function () {
        // remove other active tab
        let activeTab = $('.tab-item.active');
        activeTab.classList?.remove('active');

        // add active class
        console.log(this);
        this.classList?.add('active');

        // show line
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        // remove other active pane
        let activePane = $('.tab-pane.active');
        activePane.classList?.remove('active');

        // add active class for the pane
        panes[index].classList?.add('active');
    } 
});
