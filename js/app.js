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
        if (window.innerWidth >= 1000) {
            item.addEventListener('mouseenter', function(e) {
                item.classList.add('active')
                item.style.height = activeHeights[i] + 'px'
            })
            item.addEventListener('mouseleave', function(e) {
                item.classList.remove('active')
                item.style.height = baseHeights[i] + 'px'
            })
        } else {
            window.addEventListener('scroll', function() {
                if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
                    item.classList.add('active')
                    item.style.height = activeHeights[i] + 'px'
                }
            })
        }
    })
}

setTimeout(accordeon, 500)


function listAnimation() {
    const list = document.querySelector('.promo__list')

    const listItems = document.querySelectorAll('.promo__list-item');
    let index = 0;

    function animateNextItem() {
        if (index < listItems.length) {
            listItems[index].style.transform = 'translateX(0)';
            index++;
            setTimeout(animateNextItem, 700);
        }
    }

    function checkList() {
        if (list.getBoundingClientRect().top <= window.innerHeight) {
            window.removeEventListener('scroll', checkList)
            animateNextItem();
        }
    }

    window.addEventListener('scroll', checkList)
}

setTimeout(listAnimation, 500)

function moveAccordeonLink() {
    const contents = document.querySelectorAll('.accordeon__item__content')
    const arrows = document.querySelectorAll('.accordeon__item-link')

    arrows.forEach(function(item, i) {
        contents[i].append(item)
    })
}

function moveCasesItems() {
    const columns = document.querySelectorAll('.cases__column')
    const currentItems = columns[1].querySelectorAll('.cases__item')

    columns[0].append(currentItems[0])
    columns[2].append(currentItems[1])
    currentItems[1].style.order = -1

    columns[1].remove()
}

if (window.innerWidth <= 999) {
    moveAccordeonLink()
    moveCasesItems()
}