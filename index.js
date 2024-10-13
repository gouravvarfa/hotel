
const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5');

function checkScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show'); 
        } else {
            box.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); 
