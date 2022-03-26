export default function initMenuMobile(){
    const menuClicked = document.querySelector('[data-anime="menu-mobile"]');
    const menu = document.querySelector('[data-menu]');
    
    function handleClick(){
        menu.classList.toggle('ativo');
    }

    menuClicked.addEventListener('click', handleClick);
}