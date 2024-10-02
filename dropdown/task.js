function onClick() {
    const lists = document.getElementsByClassName('dropdown__list');
    for (let list of lists) {
        list.classList.toggle('dropdown__list_active');
        const items = document.getElementsByClassName('dropdown__link');
            for (let item of items) {
            item.addEventListener('click', () => {   
            document.getElementsByClassName('dropdown__value')[0].textContent = item.textContent;
            list.classList.remove('dropdown__list_active');
            });
        }
    }
    
    
}

const btns = document.getElementsByClassName('dropdown__value');
for (let btn of btns) {
    btn.addEventListener('click', onClick);
}


