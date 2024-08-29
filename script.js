document.addEventListener('DOMContentLoaded', () => {
    const inputCPF = document.querySelector('#cpf');
    const inputTelefone = document.querySelector('#telefone');

    inputCPF.addEventListener('keypress', ()=>{
        let inputLenght = inputCPF.value.length;
    
        console.log(inputLenght);
    
        if(inputLenght === 3 || inputLenght === 7){
            inputCPF.value += '.';
        }else if(inputLenght === 11){
            inputCPF.value += '-';
        }
        
    })
    
    inputTelefone.addEventListener('keypress', () => {
        let inputLength = inputTelefone.value.length;
    
        if (inputLength === 1) {
            inputTelefone.value = '(' + inputTelefone.value;
        }
    
        if (inputLength === 3) {
            inputTelefone.value += ') ';
        }
    
        if (inputLength === 9) {
            inputTelefone.value += '-';
        }
    
    
    });	

    function calcularRegraDeTres() {
        const inputs = document.querySelectorAll('#forms-regra-de-tres input');
        const [input1, input2, input3, input4] = inputs;

        const valor1 = parseFloat(input1.value) || null;
        const valor2 = parseFloat(input2.value) || null;
        const valor3 = parseFloat(input3.value) || null;
        const valor4 = parseFloat(input4.value) || null;

        if (valor1 == null) {
            resultado = (valor2 * valor3) / valor4;
            input1.value = resultado.toFixed(2);
        } else if (valor2 == null) {
            resultado = (valor4 * valor1) / valor3;
            input2.value = resultado.toFixed(2);
        } else if (valor3 == null) {
            resultado = (valor4 * valor1) / valor2;
            input3.value = resultado.toFixed(2);
        } else if (valor4 == null) {
            resultado = (valor2 * valor3) / valor1;
            input4.value = resultado.toFixed(2);
        } else {
            alert('Necessário o preenchimento de 3 campos');
        }
    }

    const regraDeTresButton = document.querySelector('#regra-de-tres button');
    if (regraDeTresButton) {
        regraDeTresButton.addEventListener('click', calcularRegraDeTres);
    }

    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbarMobile = document.querySelector('.navbar-mobile');

    if (menuIcon && navbarMobile) {
        menuIcon.addEventListener('click', () => {
            navbarMobile.classList.add('active');
            closeIcon.style.display = "block"; 
            menuIcon.style.display = "none"; 
        });

        closeIcon.addEventListener('click', () => {
            navbarMobile.classList.remove('active');
            closeIcon.style.display = "none"; 
            menuIcon.style.display = "block";
        });
    }
});



