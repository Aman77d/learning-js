const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// sometime we can use outside the event 
//if you select the value outside the event 
// it takes empty value so we always take input inside the event

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    // now we can check some conditions 

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height  ${height} `
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight  ${weight} `
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show result
        result.innerHTML = `<span>${bmi}</span>`  

    }

})