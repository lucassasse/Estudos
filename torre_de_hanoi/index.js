let torre1 = {
    a: null,
    b: null,
    c: null,
}

let torre2 = {
    a: null,
    b: null,
    c: null,
}

let torre3 = {
    a: null,
    b: null,
    c: null,
}

document.querySelectorAll('.disco').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.linha1').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

document.querySelectorAll('.linha2').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

document.querySelectorAll('.linha3').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOuverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

//Functions Item

function dragStart(e){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}

//Functions Area

function dragOver(e){
    if(e.currentTarget.querySelector('.torre') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e){
    e.currentTarget.classList.remove('hover');
}

function drop(e){
    e.currentTarget.classList.remove('hover');

    if(e.currentTarget.querySelector('.disco') === null){
        let dragItem = document.querySelector('.disco.dragging');
        e.currentTarget.appendChild(dragItem);

        updateAreas();
    }
}

//Functions Neutral Area

function dragOuverNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover');
}

function dropNeutral(e){
    e.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.disco.dragging');
    e.currentTarget.appendChild(dragItem);

    updateAreas();
}

//Logic Functions

function updateAreas(){
    document.querySelectorAll('.torre').forEach(torre => {
        let name = torre.getAttribute('data-name');

        if(torre.querySelector('.disco') !== null){
            torre1[name] = torre.querySelector('.disco').innerHTML;
            console.log(torre1)
        } else {
            torre1[name] = null;
        }
    });

    if(torre1.a === '1' && torre1.b === '2' && torre1.c === '3'){
        document.querySelector('.torres').classList.add('correct');
    } else{
        document.querySelector('.torres').classList.remove('correct');
    }
}



/* function updateAreas(){
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    if(areas.a === '1' && areas.b === '2' && areas.c === '3'){
        document.querySelector('.areas').classList.add('correct');
    } else{
        document.querySelector('.areas').classList.remove('correct');
    }
} */