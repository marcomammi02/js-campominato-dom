const eleBtnPlay = document.querySelector('.btn-play');
const eleLevelSelector = document.querySelector('#level-selector');
const eleTable = document.querySelector('.table');
const eleStartTitle = document.querySelector('.start-title');
const eleLevelNotice = document.querySelector('.level-notice');
let arrBombs;
let eleCell;
let score = 0;

eleBtnPlay.addEventListener('click', function() {
    eleStartTitle.classList.add('hidden');
    
    if (eleLevelSelector.value == '') {
        eleLevelNotice.classList.remove('hidden');
        eleTable.classList.add('hidden');
    } else {
        eleLevelNotice.classList.add('hidden');
        eleTable.innerHTML = '';
        eleTable.classList.remove('hidden');
        let nCell = parseInt(eleLevelSelector.value);
        let cellSideDimension = Math.sqrt(nCell);

        arrBombs = [];
        while (arrBombs.length < 16) {
            let bobmNumber = getRandomInteger(1,nCell);
            if (!arrBombs.includes(bobmNumber)) {
                arrBombs.push(bobmNumber);
            }
        }

        for (let i = 1; i <= nCell; i++) {
            
            eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleCell.style.width = `calc(100% / ${cellSideDimension})`
            eleCell.style.height = `calc(100% / ${cellSideDimension})`
            eleCell.innerHTML += i;
            eleTable.append(eleCell);

            eleCell.addEventListener('click', toggleCell);
            
        }
    }
})

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function toggleCell() {
    if (arrBombs.includes(parseInt(this.innerHTML))) {
        this.classList.add('bomb');
        const allCells = eleTable.querySelectorAll('.cell');
        for (let i = 0; i < allCells.length; i++) {
            allCells[i].removeEventListener('click', toggleCell);
            if (arrBombs.includes(parseInt(allCells[i].innerHTML))) {
                allCells[i].classList.add('bomb');
            }
        }
        const eleEndGamePanel = document.querySelector('.end-game-panel');
        eleEndGamePanel.classList.remove('hidden');
    } else {
        this.classList.toggle('active');
        score += 1;
        console.log(score)
        const eleScoreEndGame = document.querySelector('.score');
        eleScoreEndGame.innerHTML = score;
    }
}