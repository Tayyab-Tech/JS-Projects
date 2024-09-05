// script.js

const draggables = document.querySelectorAll('.draggable');
const dropzone = document.querySelector('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);
});

dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('dragenter', dragEnter);
dropzone.addEventListener('dragleave', dragLeave);
dropzone.addEventListener('drop', dragDrop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('hide');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    dropzone.classList.add('hovered');
}

function dragLeave() {
    dropzone.classList.remove('hovered');
}

function dragDrop(e) {
    const id = e.dataTransfer.getData('text');
    const draggable = document.getElementById(id);
    dropzone.appendChild(draggable);
    dropzone.classList.remove('hovered');
}
