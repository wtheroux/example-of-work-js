 // Калькулятор 
    
function calc() {

    const res = document.querySelector('.calculating__result span');

    let sex, weight, height, age, diet;
    
    if (localStorage.getItem('sex'))
        sex = localStorage.getItem('sex');
    else {
        sex = 'woman';
        localStorage.setItem('sex', sex);
    }

    if (localStorage.getItem('diet'))
        diet = localStorage.getItem('diet');
    else {
        diet = 1.375;
        localStorage.setItem('diet', diet);
    }

    function calcRes() {
        if (!sex || !diet || !age || !weight || !height) {
            res.textContent = '....';
            return;
        }

        if (sex === 'woman')
            res.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * diet);
        else
            res.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * diet);
    }

    calcRes();

    function localSettings(selector, activeClass) {
        const elems = document.querySelectorAll(selector);

        elems.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex'))
                elem.classList.add(activeClass);
            
            if (elem.getAttribute('data-diet') === localStorage.getItem('diet'))
                elem.classList.add(activeClass);
        });
    }

    localSettings('#gender div', 'calculating__choose-item_active');
    localSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function getButtonInformation(selector, activeClass) {
        const elems = document.querySelectorAll(selector);

        elems.forEach(elem => {
            elem.addEventListener('click', e => {
                if (e.target.getAttribute('data-diet')) {
                    diet = +e.target.getAttribute('data-diet');
                    localStorage.setItem('diet', diet);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                elems.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcRes();
            });
        });
    }

    getButtonInformation('#gender div', 'calculating__choose-item_active');
    getButtonInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getInputInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g))
                input.style.border = '1px solid red';
            else
                input.style.border = 'none';
            
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcRes();
        });
    }

    getInputInformation('#height');
    getInputInformation('#weight');
    getInputInformation('#age');
}

    export default calc;