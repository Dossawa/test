const hamburgerIcon = document.querySelector(".nav-toggler")
const navigation = document.querySelector(".nav-list")

hamburgerIcon.addEventListener("click", togglerNav)

function togglerNav(){
    hamburgerIcon.classList.toggle("active")
    navigation.classList.toggle("active")

}