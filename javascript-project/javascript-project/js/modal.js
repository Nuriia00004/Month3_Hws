// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) closeModal()
}

// Homework3_part2 //
const scrollModal = () => {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        document.body.style.overflow = 'hidden'
    }
}
window.addEventListener('scroll', scrollModal)
// Homework3_part3 //
// setTimeout(openModal, 10000)
///////////////////////////////////////////////////
