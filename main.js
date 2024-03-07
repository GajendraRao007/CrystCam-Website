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


let product1 = document.getElementById('pro1')

product1.addEventListener('click', mybtn1)

function mybtn1() {

    let showDisplay = document.getElementById('display').value += 1;

    document.getElementById('display').value = showDisplay;

    console.log(showDisplay);

    
}