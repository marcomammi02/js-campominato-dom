const eleBtnPlay = document.querySelector('.btn-play');
const eleLevelSelector = document.querySelector('#level-selector');
const eleTable = document.querySelector('.table');
const eleStartTitle = document.querySelector('.start-title');
const eleLevelNotice = document.querySelector('.level-notice');

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

        for (let i = 1; i <= nCell; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleCell.style.width = `calc(100% / ${cellSideDimension})`
            eleCell.style.height = `calc(100% / ${cellSideDimension})`
            eleCell.innerHTML += i;
            eleTable.append(eleCell);

            eleCell.addEventListener('click', function() {
                eleCell.classList.toggle('active');
                console.log('Hai selezionato la casella: ' + i)
            })
        }
    }
    
})