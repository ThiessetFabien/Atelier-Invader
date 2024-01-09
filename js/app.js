// création de div + form
const configuration = document.querySelector('.configuration');
const createGrid = document.createElement('div');
createGrid.classList.add('setting');
configuration.appendChild(createGrid);

// taille des grilles

const label1 = document.createElement('label');
const input1 = document.createElement('input');

label1.classList.add('setting-gridNumber')

input1.type = 'text';
input1.name = 'setting-gridNumber';
input1.id = 'gridNumber';
input1.placeholder = "Taille de la grille";

createGrid.appendChild(label1);
label1.appendChild(input1);


//taille des pixels

const label2 = document.createElement('label');
const input2 = document.createElement('input');

label2.classList.add('setting-pixel')

input2.type = 'text'; 
input2.name = 'pixelNumber';
input2.id = "pixelNumber"
input2.placeholder = 'Taille des pixels'; 

createGrid.appendChild(label2);
label2.appendChild(input2)

//bouton valider

const label3 = document.createElement('label');
const input3 = document.createElement('input');

label3.classList.add('setting-submit')

input3.type = 'submit'; 
input3.value = 'Valider';


createGrid.appendChild(label3);
label2.appendChild(input3)


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

