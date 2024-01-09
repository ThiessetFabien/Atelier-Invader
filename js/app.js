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
input1.id = 'grid-number';
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
label2.appendChild(input2);

//bouton valider

const label3 = document.createElement('label');
const input3 = document.createElement('input');

label3.classList.add('setting-submit')

input3.type = 'submit'; 
input3.value = 'Valider';


createGrid.appendChild(label3);
label3.appendChild(input3);

// récupération des valeurs 
document.getElementsByTagName('form')[0].addEventListener('submit', function (event) 
{
    event.preventDefault();
    
    let input1Value = document.getElementById('grid-number').value;

    if (!isNaN(input1Value)) 
    {
        input1Value = parseInt(input1Value);
        const container = document.getElementById('invader');
        container.innerHTML = '';
        const invaderDiv = createInvader(input1Value);
        container.appendChild(invaderDiv);
    }
    else
    {
        console.error('Veuillez entrer un nombre valide.')
    }
})

const createInvader = (input1Value = 8) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv');

    for (let i = 0; i < input1Value; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('colDiv');
        mainDiv.appendChild(colDiv);

        for (let j = 0; j < input1Value; j++) {
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
const container = document.getElementById('invader');
container.innerHTML = '';
const invaderDiv = createInvader();
container.appendChild(invaderDiv);