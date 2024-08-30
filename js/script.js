document.addEventListener('DOMContentLoaded', () => {
    const inputCPF = document.querySelector('#cpf');
    const inputTelefone = document.querySelector('#telefone');

    inputCPF.addEventListener('input', () => {
        let value = inputCPF.value.replace(/\D/g, '');
    
       
        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{1})/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{1})/, '$1.$2');
        }
    
        inputCPF.value = value;
    });

    inputTelefone.addEventListener('input', () => {

        let value = inputTelefone.value.replace(/\D/g, '');

        if (value.length > 10) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/(\d{2})(\d{5})/, '($1) $2');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})/, '($1');
        }
    
        inputTelefone.value = value;


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



    const modal = document.getElementById('modal');
    const btnAbrir = document.getElementById('abrirModal');
    const spanFechar = document.getElementsByClassName('fechar')[0];
    const modalImage = modal.querySelector('img'); 

    btnAbrir.onclick = function () {
        modal.style.display = 'block';
        modalImage.classList.add('animate-zoom'); 
    }

    spanFechar.onclick = function () {
        modal.style.display = 'none';
        modalImage.classList.remove('animate-zoom'); 
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalImage.classList.remove('animate-zoom'); 
        }
    }


    const telCorretora = document.querySelector('#telCorretora');
    const telCorretor = document.querySelector('#telCorretor');

    telCorretora.addEventListener('click', ()=>{
        event.preventDefault();
        telCorretora.textContent = "(11) 99999-9999";
    })

    telCorretor.addEventListener('click', ()=>{
        event.preventDefault();
        telCorretor.textContent = "(11) 99999-9999";
    })



   
});




function download_foto() {
    html2canvas(document.querySelector("#foto-casa-download")).then(canvas => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg");
        a.download = "image.jpeg";
        a.click();
    });
}




const formMensagem = document.querySelector('#form-mensagem');

formMensagem.addEventListener('submit', ()=>{
    event.preventDefault();

    const CPF = document.querySelector('#cpf').value;
    const telefone = document.querySelector('#telefone').value;
    const mensagem = document.querySelector('#mensagemArea').value;

    if(CPF.length < 14 || telefone.length < 14 || mensagem.length == 0){
        alert("Por favor, preencha os campos requisitados!");
    }else{
        alert("Mensagem enviada com sucesso!");
    }
   
})