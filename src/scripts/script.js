function openModal() {
    const modalOpenButtons = document.querySelectorAll(".openModal")
    const modalContainer = document.querySelector("#modalContainer")
    
    modalOpenButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault()
            modalContainer.showModal()

            closeModal()
        })
    })
}

function closeModal() {
    const modalCloseButton = document.querySelector(".closeModal")
    const modalContainer = document.querySelector("#modalContainer")

    modalCloseButton.addEventListener("click", (event) => {
        event.preventDefault()
        modalContainer.close()
    })
}

openModal()