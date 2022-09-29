// const openModal= document.querySelector('.openbutton');
// const closeModal= document.querySelector('.closebutton');
// const modal=document.querySelector('#modal');

// openModal.addEventListener('click', () => {
//     modal.showModal();
// })

// closeModal.addEventListener('click', () => {
//     modal.close();
// })

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay= document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal=document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal= button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active2");
    navMenu.classList.toggle("active2");

})