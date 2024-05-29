const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const boxbottom = box.getBoundingClientRect().bottom
        const triggerTop = box.getBoundingClientRect().height/5*2

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
        if(boxbottom<triggerTop){
            box.classList.remove('show')
        }else if(boxbottom>triggerTop && boxbottom<triggerBottom) {
            box.classList.add('show')
        }
    })
}
