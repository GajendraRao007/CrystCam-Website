let hamburger = document.getElementById('icon')
hamburger.addEventListener('click', mySidebar);

function mySidebar() {
    let sidebar = document.getElementById('sidebar')

    if (sidebar.style.right === '0px' || window.innerWidth > 768) {
        sidebar.style.right = '-300px';
    } else {
        sidebar.style.right = '0px';
    }
}
