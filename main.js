console.log('hi');
// lwam Teikie
// Britney spears
// tori Amos
// john doe

// const firstName = "lwam";
// const  lastName = "Tei";
// console.log(firstName + ' ' + lastName);
// console.log (`${firstName} ${lastName}`);
// const firstName1 = 'Britney';
// const lastName2 = 'spears';
// console. log(`${firstName1} ${lastName2}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
namePrinter('lwam', 'tekie');
namePrinter('john', 'doe');

const nuggetizer = (animal) => {
    return `processed ${animal}`;
};
console.log(nuggetizer('pig'));


const dogBreed = (dogName) => {
    return `my favorite dog is breed ${dogName}`;
};
console.log(dogBreed)
console.log(`my foavorite dog is bull dog`);

console.log(dogBreed('lab'));
console.log(dogBreed('a cat'));


// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('lab');

// const naggetizerDiv = document.getElementById('nuggetizer');
// naggetizerDiv.innerHTML += nuggetizer('kitten');
// naggetizerDiv.innerHTML += nuggetizer('bear');

const printToDoM = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

printToDoM('dog-breed', dogBreed('lab'));
printToDoM('nuggetizer', nuggetizer('bear'))

let bandNumber = 1;
const addBand = (textToprint) => {
    // do stuff
    // get band
    // text to send
    const bandText = `<h5>${bandNumber}. ${textToprint}</h5>`
    bandNumber +=1
    printToDoM('band-list', bandText);
}

addBand('Metalica') // 1. Metalica
addBand('slayer') // 2. slayer 