const shapes = [
    {
        'id': 0,
        'name': "Circle",
        'class': 'circle',
        'input': '2. Enter Radius',
        'side': ['RADIUS', 'r', 'cm'],
        'area': ['AREA', '&pi;r&#178;', 'sq cm'],
        'perimeter': ['PERIMETER', '2&pi;r', 'cm'],
        calculation: (value) => {
            localStorage.setItem('side', (value) + " " + shapes[0].side[2]);
            localStorage.setItem('area', (3.141 * value * value).toFixed(2) + " " + shapes[0].area[2]);
            localStorage.setItem('perimeter', (2 * 3.141 * value).toFixed(2) + " " + shapes[0].perimeter[2]);
        }
    },
    {
        'id': 1,
        'name': 'Equilateral Triangle',
        'class': 'triangle',
        'input': '2. Enter Side (Base & Height)',
        'side': ['SIDE', 's', 'cm'],
        'area': ['AREA', '0.433 * s * s', 'sq cm'],
        'perimeter': ['PERIMETER', '3 * s', 'cm'],
        calculation: (value) => {
            localStorage.setItem('side', (value) + " " + shapes[1].side[2]);
            localStorage.setItem('area', (0.433 * value * value).toFixed(2) + " " + shapes[1].area[2]);
            localStorage.setItem('perimeter', (3 * value) + " " + shapes[1].perimeter[2]);
        }
    },
    {
        'id': 2,
        'name': 'Square',
        'class': 'square',
        'input': '2. Enter Side',
        'side': ['SIDE', 's', 'cm'],
        'area': ['AREA', 's * s', 'sq cm'],
        'perimeter': ['PERIMETER', '4 * s', 'cm'],
        calculation: (value) => {
            localStorage.setItem('side', (value) + " " + shapes[2].side[2])
            localStorage.setItem('area', (value * value) + " " + shapes[2].area[2]);
            localStorage.setItem('perimeter', 4 * value + " " + shapes[2].perimeter[2]);
        }
    },
]

let selectedShape = ''
let selectedElement = ''
let shapeIndex;
const startSection = document.querySelector('.shape-section');
const midSection = document.querySelector(".compute-section");
const lastSection = document.querySelector('.result-section');
const shapeContainer = document.querySelector('#shapes');
const nextBtn = document.querySelector('.next');
const tick = document.querySelectorAll('.fa-tick');

shapeContainer.addEventListener('click', (event) => {
    selectedShape = event.target.className
    
    //selected shape index
    for (let shape of shapes) {
        if (shape.class == selectedShape) 
        shapeIndex = shape.id
    }
    selectedElement = document.querySelector('.' + shapes[shapeIndex].class)

    //toggle tick
    tick.forEach(element => element.style.display = 'none');
    tick[shapeIndex].style.display='block'
    nextBtn.style.display = 'block'
})
 
//event for next button
nextBtn.addEventListener('click', () => {
    document.querySelector('.shape-section').style.display = 'none'

    //section 2 
    //text box
    let textDiv = document.createElement('div')
    textDiv.setAttribute('class', 'page2-top txt')
    textDiv.append(shapes[shapeIndex].input)
    midSection.append(textDiv)
    //input box
    let inputBox = document.createElement('input')
    inputBox.setAttribute('class', 'page2-mid')
    inputBox.setAttribute('type', 'number')
    midSection.append(inputBox)
    //calculate button
    let calculateButton = document.createElement('button')
    calculateButton.setAttribute('class', 'button')
    calculateButton.append('CALCULATE')
    calculateButton.style.display = 'block';
    midSection.append(calculateButton)

    // Event for calculation button
    calculateButton.addEventListener('click', () => {
        let inputValue = inputBox.value;
        if (!inputValue) {
            alert('Enter a value!')
        }
        else {
            //performing calculation
            shapes[shapeIndex].calculation(inputValue)
            //section 3
            midSection.innerHTML = '';
            //shape box
            let shapeShow = document.createElement('div')
            shapeShow.setAttribute('class', shapes[shapeIndex].class)
            lastSection.append(shapeShow)
            //txt box
            let shapeName = document.createElement("div");
            shapeName.setAttribute('class', 'txt')
            shapeName.append(shapes[shapeIndex].name);
            lastSection.append(shapeName)
            //calculation table
            let calculationTable = document.createElement('div');
            calculationTable.setAttribute('class', 'calculation-table')
            for (let key of ['side', 'area', 'perimeter']) {
                for (let i = 0; i < 3; i++) {
                    let cell = document.createElement('div')
                    if (i == 2) cell.innerHTML = localStorage.getItem(key)
                    else cell.innerHTML = shapes[shapeIndex][key][i];
                    calculationTable.append(cell);
                }
            }
            
            lastSection.append(calculationTable)

            //start again button
            let startAgain = document.createElement('button');
            startAgain.setAttribute('class', 'button');
            startAgain.append('START AGAIN');
            startAgain.style.display = 'block';
            lastSection.append(startAgain)

            //start again event
            startAgain.addEventListener('click', () => {
                lastSection.innerHTML = '';
                localStorage.clear();
                //Reverting to first section
                document.querySelector('.shape-section').style.display = 'flex';
                tick[shapeIndex].style.display='none' 
                nextBtn.style.display = 'none'
            })
        }
    })
})

