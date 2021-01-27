$('.info-button, .modal-background, .modal-close-button').on('click', function (e) {
    $('.modal').toggleClass('hidden')
})

$('.hamburger-menu-icon').on('click', function (e) {
    $('.drop-down').toggleClass('active')
})