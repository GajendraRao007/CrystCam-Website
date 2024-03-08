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

let displayElement = document.getElementById('display');
let displayElement2 = document.getElementById('display2');

let cartQuantity = document.getElementById('display')
let cartQuantity2 = document.getElementById('display2')

function mybtn1() {
    let showDisplay = parseInt(displayElement.innerText || 0);
    showDisplay += 1;
    let showDisplay2 = parseInt(displayElement2.innerText || 0);
    showDisplay2 += 1;

    displayElement.innerText = showDisplay;
    displayElement2.innerText = showDisplay2;

    console.log(showDisplay);

    if (showDisplay === 1) {
        cartQuantity.style.display = 'block';
    }
    if (showDisplay2 === 1) {
        cartQuantity2.style.display = 'block';
    }
    
}