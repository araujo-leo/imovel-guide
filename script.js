const inputCPF = document.querySelector('#cpf');

inputCPF.addEventListener('input', () => {
    let value = inputCPF.value.replace(/\D/g, ''); 
    let formattedValue = '';

    if (value.length > 3) {
        formattedValue += value.slice(0, 3) + '.';
        value = value.slice(3);
    }
    if (value.length > 3) {
        formattedValue += value.slice(0, 3) + '.';
        value = value.slice(3);
    }
    if (value.length > 2) {
        formattedValue += value.slice(0, 2) + '-';
        value = value.slice(2);
    }

    inputCPF.value = formattedValue + value;
});

const inputTelefone = document.querySelector('#telefone');

inputTelefone.addEventListener('input', () => {
    let value = inputTelefone.value.replace(/\D/g, ''); 
    let formattedValue = '';

    if (value.length > 2) {
        formattedValue += '(' + value.slice(0, 2) + ') ';
        value = value.slice(2);
    }
    if (value.length > 5) {
        formattedValue += value.slice(0, 5) + '-';
        value = value.slice(5);
    }

    inputTelefone.value = formattedValue + value;
});


function calcularRegraDeTres() {
    const inputs = document.querySelectorAll('#forms-regra-de-tres input');
    const [input1, input2, input3, input4] = inputs;
    
    const valor1 = parseFloat(input1.value) || null;
    const valor2 = parseFloat(input2.value) || null;
    const valor3 = parseFloat(input3.value) || null;
    const valor4 = parseFloat(input4.value) || null;

    if(valor1 == null){
        resultado = (valor2 * valor3) / valor4;
        input1.value = resultado.toFixed(2);
    }else if(valor2 == null){
        resultado = (valor4 * valor1) / valor3;
        input2.value = resultado.toFixed(2);
    }else if(valor3 == null){
        resultado = (valor4 * valor1) / valor2;
        input3.value = resultado.toFixed(2);
    }else if(valor4 == null){
        resultado = (valor2 * valor3) / valor1; 
        input4.value = resultado.toFixed(2);
    }else{
        alert('Necessário o preenchimento de 3 campos');
    }

}

document.querySelector('#regra-de-tres button').addEventListener('click', calcularRegraDeTres);