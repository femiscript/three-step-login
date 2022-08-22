let btn = document.querySelectorAll("button");
let box = document.querySelectorAll('.box');
let userInput = document.querySelectorAll('input');
let boxIndex = 0;

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        completeForm(e);
    });
});

function completeForm(e) {
    if (e.currentTarget.classList.contains('finish')) {
        box[boxIndex].classList.add('hidden');
        boxIndex = 0;
        box[boxIndex].classList.remove('hidden');

        // Clear all user input on subitting the form
        userInput.forEach(input => {
            console.log(input.value)
            input.value = '';
        });
    }
    else if (e.currentTarget.classList.contains('next')) {
        //check empty input
        if (userInput[boxIndex].value !== "") {
            box[boxIndex].classList.add('hidden');
            boxIndex++;
            box[boxIndex].classList.remove('hidden');
        } else {
            alert("Fill all compulsory fields to proceed");
        }

    }
    else if (e.currentTarget.classList.contains('back')) {
        box[boxIndex].classList.add('hidden');
        boxIndex--;
        box[boxIndex].classList.remove('hidden');
    }
}