function accordeon() {
    const items = document.querySelectorAll('.accordeon__item')
    const activeHeights = []
    const baseHeights = []

    items.forEach(function(item) {
        activeHeights.push(item.clientHeight)

        const itemCategoryEl = item.querySelector('.accordeon__item-category')
        const itemTitlteEl = item.querySelector('.accordeon__item-title')

        let titleMarginTop = getComputedStyle(itemTitlteEl).marginTop.slice(0, -2)

        let blockHeight = +itemCategoryEl.clientHeight + (+itemTitlteEl.clientHeight) + (+titleMarginTop) + 80

        baseHeights.push(blockHeight)

        item.style.height = blockHeight + 'px'
    })

    items.forEach(function(item, i) {
        item.addEventListener('mouseenter', function(e) {
            item.classList.add('active')
            item.style.height = activeHeights[i] + 'px'
        })
        item.addEventListener('mouseleave', function(e) {
            item.classList.remove('active')
            item.style.height = baseHeights[i] + 'px'
        })
    })
}

setTimeout(accordeon, 500)


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