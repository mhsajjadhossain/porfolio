$(function () {

    "use strict";


    /*================================
        MENU BAR SCRIPT
    ================================*/
    // query dom
    let triggerBtn = document.querySelector('.click_to_action');
    let mainNav = document.querySelector('.main-nav');
    let menuItm = document.querySelector('.nav_list');
    
    let listItems = menuItm.querySelectorAll('li');
    
    // trigger event function
    triggerBtn.addEventListener('click', (e) => {
        if (triggerBtn.matches('.active')) {
            deactiveMenu();
            navDynamicHeighDective()
        } else {
            activeMenu();
            navDynamicHeighActive()
        }
    });

    // requeued functions
    function deactiveMenu() {
        mainNav.classList.remove('active')
        menuItm.classList.remove('active')
        triggerBtn.classList.remove('active')
    }
    function activeMenu() {
        mainNav.classList.add('active')
        menuItm.classList.add('active')
        triggerBtn.classList.add('active')
    }
    function navDynamicHeighActive() {
        mainNav.style.height = listItems.length*40+60 +'px'  
        console.log(listItems.length*40+60 +'px');
    }

    function navDynamicHeighDective() {
        mainNav.style.height = '';  
    }



    





});