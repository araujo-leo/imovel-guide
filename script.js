const inputCPF = document.querySelector('#cpf');

inputCPF.addEventListener('keypress', ()=>{
    let inputLenght = inputCPF.value.length;

    console.log(inputLenght);

    if(inputLenght === 3 || inputLenght === 7){
        inputCPF.value += '.';
    }else if(inputLenght === 11){
        inputCPF.value += '-';
    }
    
})

const inputTelefone = document.querySelector('#telefone');
inputTelefone.addEventListener('keypress', () => {
    let inputLength = inputTelefone.value.length;

    // Se o comprimento for 1, adiciona '('
    if (inputLength === 1) {
        inputTelefone.value = '(' + inputTelefone.value;
    }

    // Se o comprimento for 3, adiciona ') '
    if (inputLength === 3) {
        inputTelefone.value += ') ';
    }

    // Se o comprimento for 10, adiciona '-'
    if (inputLength === 9) {
        inputTelefone.value += '-';
    }


});