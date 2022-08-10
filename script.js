const panels = document.querySelectorAll('.panel');

let clickNumber = 1;

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        clickNumber++;
        removeActiveClasses();
        panel.classList.add('active');
        closePhoto();
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');

    })
}

// close Photo
function closePhoto() {
    if (clickNumber % 2 == 0) {
        removeActiveClasses();
    }
}