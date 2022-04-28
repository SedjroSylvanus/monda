

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY >100)
}) 

//affiher et cacher les commentaires

const commentaires = document.querySelectorAll('.commentaire');
commentaires.forEach(commentaire => {
    commentaire.addEventListener('click', () => {
        commentaire.classList.toggle('open');

        const icon = document.querySelectorAll('.commentaire__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"
        }

    })
})

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");




const openNav = () => {

    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
    menu.style.display = "flex";

}
menuBtn.addEventListener('click', openNav)

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
menuBtn.addEventListener('click', closeNav)