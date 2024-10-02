const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');


Object.keys(tabs).forEach(k => tabs[k].addEventListener('click', e => {
    tabs[k].classList.toggle('tab_active');
    console.log(k);

    for (let index = 0; index < 3; index++) {
        tabs[index].classList.remove('tab_active');
        tabContents[index].classList.remove('tab__content_active');
    }
    
    tabs[k].classList.toggle('tab_active');
    tabContents[k].classList.toggle('tab__content_active');

}))






/*Object.keys(stars).forEach(k => stars[k].addEventListener('click', e => {
    stars[k].classList.toggle('star_active')
    console.log(k)
for (let index = 0; index < 4; index++) {
    stars[index].classList.remove('star_active') 
}

for (let index = 0; index <= k; index++) {
    stars[index].classList.toggle('star_active') 
}                                                           
}))
*/