let turn = 0

let status = {
    row_1:[0,0,0],
    row_2:[0,0,0],
    row_3:[0,0,0]
}

function cry(){
    if(event.target.className == 'cell'){
        let who = 0
        if(turn == 0){
            event.target.className = 'cross'
            turn++
            who = 1
        }else{
            event.target.className = 'zero'
            turn--
            who = 2
        }
        statusChanger(event.target, who)
    }   
}

function statusChanger(el, who){
    let cellNumber = el.id.slice(-1) - 0
    let rowNumber = el.parentElement.id.slice(-1) - 0
    if(rowNumber == 1){
        status.row_1[cellNumber - 1] = who
    }
    if(rowNumber == 2){
        status.row_2[cellNumber - 1] = who
    }
    if(rowNumber == 3){
        status.row_3[cellNumber - 1] = who
    }
    setTimeout(winChecker, 1000) 
}

function winChecker(){
    if(status.row_1[0] == status.row_1[1] &&  status.row_1[1] == status.row_1[2] && status.row_1[0] != 0){
        if(status.row_1[0] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_2[0] == status.row_2[1] &&  status.row_2[1] == status.row_2[2] && status.row_2[0] != 0){
        if(status.row_2[0] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_3[0] == status.row_3[1] &&  status.row_3[1] == status.row_3[2] && status.row_3[0] != 0){
        if(status.row_3[0] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_1[0] == status.row_2[1] && status.row_2[1] == status.row_3[2] && status.row_3[2] != 0){
        if(status.row_1[0] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_1[2] == status.row_2[1] && status.row_2[1] == status.row_3[0] && status.row_3[0] != 0){
        if(status.row_1[2] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_1[0] == status.row_2[0] &&  status.row_2[0] == status.row_3[0] && status.row_1[0] != 0){
        if(status.row_1[0] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_1[1] == status.row_2[1] &&  status.row_2[1] == status.row_3[1] && status.row_1[1] != 0){
        if(status.row_1[1] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
    if(status.row_1[2] == status.row_2[2] &&  status.row_2[2] == status.row_3[2] && status.row_1[2] != 0){
        if(status.row_1[2] == 1){
            alert('КРЕСТИКИ ПОБЕДИЛИ!')
        }else{
            alert('ПОБЕДИЛИ НОЛИКИ')
        }
        restart()
    }
}

function restart(){
    let crosses = document.getElementsByClassName('cross')
    let zeros = document.getElementsByClassName('zero')
    let a = 0
    while( a < 3){
        for (let i = 0; i < crosses.length; i++) {
            crosses[i].className = 'cell'
        }
        a++
    }
    a = 0
    while( a < 3){
        for (let i = 0; i < zeros.length; i++) {
            zeros[i].className = 'cell'
        }
        a++
    }
    for (key in status){
        status[key] = [0,0,0]
    }
}