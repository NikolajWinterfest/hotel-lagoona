document.addEventListener('DOMContentLoaded', () => {
    // __________ Smooth Scroll for "Items of Menu List" __________ //
    const navMenu = document.querySelectorAll('.list-menu__item-link')

    navMenu.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const linkHref = link.getAttribute('href')
            if (linkHref && !linkHref.includes('mailto:')) {
                document.querySelector(linkHref).scrollIntoView({
                    behavior: 'smooth',
                })
            } else {
                window.location.href = linkHref
            }
        })
    })

    // Smooth Scroll and Call for Buttons "Find" and "Callback"
    const reservationBtn = document.getElementById('want-tour')
    const callbackBtn = document.getElementById('callback')

    reservationBtn.addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('#reservation').scrollIntoView({
            behavior: 'smooth',
        })
    })

    callbackBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = 'tel:+74995356434'
    })

    // Blocking empty Links
    function eventFn(e) {
        e.preventDefault()
    }
    
    document.querySelector('.primary__item-logo').addEventListener('click', eventFn)
    document.querySelector('.copyright__descr-link').addEventListener('click', eventFn)
    document.querySelectorAll('.socialnetworks-link').forEach((link) => link.addEventListener('click', eventFn))
})
