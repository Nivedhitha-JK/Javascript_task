/*
switch(expression){
    case 1:
        statement 1
        -----
        -----
        break;
           case 2:
        statement 2
        -----
        -----
        break;
            case 3:
        statement 3
        -----
        -----
        break;
            case 4:
        statement 4
        -----
        -----
        break;
       .
       .
       .
        case n:
        statement n
        -----
        -----
        break;

        default:
            statement default
            -----
            -----
            break;
}
*/
/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/ 


const button = document.querySelector('button');

let resultDiv = document.createElement('div');
resultDiv.id = 'result';
// resultDiv.style.background = 'aquamaraine';
document.getElementById('wrapper').appendChild(resultDiv);
// element event listener (without using click function)

button.addEventListener('click',displayStats);

function displayStats(){
let input = document.getElementById('input')
let city = input.options[input.selectedIndex].value;
console.log(city);
let population = 0, literacyRate = 0, language ='';


switch(city){
    case 'Bengaluru':
        population = 8443675
        literacyRate = 88.71
        language = 'Kannada'
        break;
    case 'Chennai':
        population = 4646732
        literacyRate = 90.20
        language = 'Tamil'
        break;
    case 'Delhi':
        population = 16787941
        literacyRate = 86.20
        language = 'Hindi'
        break;
    case 'Mumbai':
        population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
        break;
}

let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`
console.log(text);

document.getElementById('result').innerHTML = text;

}
