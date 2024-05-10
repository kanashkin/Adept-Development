function listAnimation() {
    const listItems = document.querySelectorAll('.promo__list-item');
    let index = 0;

    function animateNextItem() {
        if (index < listItems.length) {
            listItems[index].style.transform = 'translateX(0)';
            index++;
            setTimeout(animateNextItem, 700);
        }
    }

    animateNextItem();
}

setTimeout(listAnimation, 500)
