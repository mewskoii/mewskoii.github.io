// Чтобы открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

// Чтобы закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
})

// Чтобы закрыть модальное окно с помощью ESC
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
})

// // Чтобы закрыть модальное окно, нажав на фон
// document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
//     Event._isClickWithInModal = true;
// });
// document.getElementById("my-modal").addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
// })

