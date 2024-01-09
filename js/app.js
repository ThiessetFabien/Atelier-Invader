

//  const createInvader = () => {
//     const mainDiv = document.createElement('div');
//     mainDiv.classList.add('mainDiv')
//     for (let i = 0; i < 8; i++) {
//         const colDiv = document.createElement('div');
//         colDiv.classList.add('colDiv')
//         mainDiv.appendChild(colDiv);

//         for (let j = 0; j<8; j++) {
//         const rowDiv = document.createElement('div')
//         rowDiv.classList.add('rowDiv')
//         colDiv.appendChild(rowDiv);
//         }
//     }
//     return mainDiv;
//  };

// document.getElementById('invader').appendChild(createInvader());



const createInvader = () => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv');

    for (let i = 0; i < 8; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('colDiv');
        mainDiv.appendChild(colDiv);

        for (let j = 0; j < 8; j++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('rowDiv');
           
            rowDiv.addEventListener('click', function() {
                if (this.style.backgroundColor === 'black') {
                   this.style.backgroundColor = '#d2dae2';
                }else {
                    this.style.backgroundColor = 'black';
                }
               });
            colDiv.appendChild(rowDiv); 
        }
    }
    return mainDiv;
};

document.getElementById('invader').appendChild(createInvader()); 
