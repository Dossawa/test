const form = document.querySelector(".se-faire-rappeler");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    form.classList.toggle("active")
}

