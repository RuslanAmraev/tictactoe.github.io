let turn = 0
let status = {
    row_1:[0,0,0],
    row_2:[0,0,0],
    row_3:[0,0,0]
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let crossScore = getCookie('cross-score') || 0
let zeroScore = getCookie('zero-score') || 0

document.getElementsByName('cross-score')[0].innerHTML = crossScore
document.getElementsByName('zero-score')[0].innerHTML = zeroScore

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
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_2[0] == status.row_2[1] &&  status.row_2[1] == status.row_2[2] && status.row_2[0] != 0){
        if(status.row_2[0] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_3[0] == status.row_3[1] &&  status.row_3[1] == status.row_3[2] && status.row_3[0] != 0){
        if(status.row_3[0] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_1[0] == status.row_2[1] && status.row_2[1] == status.row_3[2] && status.row_3[2] != 0){
        if(status.row_1[0] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_1[2] == status.row_2[1] && status.row_2[1] == status.row_3[0] && status.row_3[0] != 0){
        if(status.row_1[2] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_1[0] == status.row_2[0] &&  status.row_2[0] == status.row_3[0] && status.row_1[0] != 0){
        if(status.row_1[0] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_1[1] == status.row_2[1] &&  status.row_2[1] == status.row_3[1] && status.row_1[1] != 0){
        if(status.row_1[1] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if(status.row_1[2] == status.row_2[2] &&  status.row_2[2] == status.row_3[2] && status.row_1[2] != 0){
        if(status.row_1[2] == 1){
            crossWin()
        }else{
            zeroWin()
        }
        restart()
    }
    if((document.getElementsByClassName('cross').length - 0) + (document.getElementsByClassName('zero').length - 0) == 9){
        alert('НИЧЬЯ')
        restart()
    }
}

function restart(){
    let crosses = document.getElementsByClassName('cross')
    let zeros = document.getElementsByClassName('zero')
    let a = 0
    turn = 0
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

function crossWin(){
    alert("Победили крестики!")
    crossScore++
    document.getElementsByName('cross-score')[0].innerHTML = crossScore
    document.cookie = "crossScore=" + crossScore
}

function zeroWin(){
    alert("Победили нолики!")
    zeroScore++
    document.getElementsByName('zero-score')[0].innerHTML = zeroScore
    document.cookie = "zeroScore=" + zeroScore
}

function resetScore(){
    crossScore = 0
    zeroScore = 0
    document.getElementsByName('cross-score')[0].innerHTML = crossScore
    document.getElementsByName('zero-score')[0].innerHTML = zeroScore
    document.cookie = "zeroScore="
    document.cookie = "crossScore="
}