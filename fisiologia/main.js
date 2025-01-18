"use strict"
const backup = {
    saveGridInputs() {
        const inputsCelulares = document.querySelectorAll("[data-totalgeraleixox], .grid-extra__input");
        for (let i = 0; i < inputsCelulares.length; i++) {
            
            inputsCelulares[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, inputsCelulares[i].value);
            });
            inputsCelulares[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
        }
    },
    saveExtraInputs() {
        const inputsNaoCelulares = document.querySelectorAll(".input-nao-celular");
        const campoDeObs = document.querySelector(".obs__input");
        inputsNaoCelulares.forEach( inputTarget => {
            inputTarget.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${inputTarget.id}`, inputTarget.value));
            inputTarget.value = localStorage.getItem(`${keyPrefix}-${inputTarget.id}`);
        });
        campoDeObs.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-input-obs`, campoDeObs.textContent));
        campoDeObs.textContent = localStorage.getItem(`${keyPrefix}-input-obs`);
    }
}
const totalizador = {
    filtrarEtotalizarCelulas(inputTarget) {
        // Subtotal eixo x
        let classNameDosOperandos = inputTarget.dataset.subtotaleixox;
        inputTarget.classList.add(`${classNameDosOperandos}`);
        let operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
        let celulaDeSaida = document.querySelector(`.${inputTarget.dataset.subtotaleixoxoutput}`);
        celulaDeSaida.value = this.somar(operandos);        
        // Total geral
        classNameDosOperandos = inputTarget.dataset.totalgeraleixox;
        inputTarget.classList.add(`${classNameDosOperandos}`);
        operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
        celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totalgeraleixoxoutput}`);
        celulaDeSaida.value = this.somar(operandos);
        if(inputTarget.dataset.subtotaleixoy) {
            classNameDosOperandos = inputTarget.dataset.subtotaleixoy;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.subtotaleixoyoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
        if(inputTarget.dataset.totaleixoy) {
            classNameDosOperandos = inputTarget.dataset.totaleixoy;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaleixoyoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
        if(inputTarget.dataset.totalteenseixox) {
            classNameDosOperandos = inputTarget.dataset.totalteenseixox;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totalteenseixoxoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }    
        if(inputTarget.dataset.totalteenseixoy) {
            classNameDosOperandos = inputTarget.dataset.totalteenseixoy;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totalteenseixoyoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }    
        if(inputTarget.dataset.totalgeraleixoy) {
            const classNameDosOperandos = inputTarget.dataset.totalgeraleixoy;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            const operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            const celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totalgeraleixoyoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
    
        if(inputTarget.dataset.b11) {
            classNameDosOperandos = inputTarget.dataset.b11;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b11output}`);
            celulaDeSaida.value = this.somar(operandos);
        }

        if(inputTarget.dataset.b11subtotal) {
            classNameDosOperandos = inputTarget.dataset.b11subtotal;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b11subtotaloutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }

        if(inputTarget.dataset.b11totalgeral) {
            classNameDosOperandos = inputTarget.dataset.b11totalgeral;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b11totalgeraloutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
        if(inputTarget.dataset.b11totalteens) {
            classNameDosOperandos = inputTarget.dataset.b11totalteens;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b11totalteensoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
        if(inputTarget.dataset.b13) {
            classNameDosOperandos = inputTarget.dataset.b13;
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b13output}`);
            celulaDeSaida.value = this.calcularLinhaB13(classNameDosOperandos);
            // Calcular Subtotal B13
            classNameDosOperandos = inputTarget.dataset.b13subtotal;
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b13subtotaloutput}`);
            celulaDeSaida.value = this.calcularLinhaB13(classNameDosOperandos);
            // Calcular Total Geral B13
            classNameDosOperandos = inputTarget.dataset.b13totalgeral;
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b13totalgeraloutput}`);
            celulaDeSaida.value = this.calcularLinhaB13(classNameDosOperandos);
        }
        if(inputTarget.dataset.b13totalteens) {
            // Calcular Total Teen B13
            classNameDosOperandos = inputTarget.dataset.b13totalteens;
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.b13totalteensoutput}`);
            celulaDeSaida.value = this.calcularLinhaB13(classNameDosOperandos);
        }
    },
    somar(celulasPorTotalizar) {
        let soma = 0;
        for(const c of celulasPorTotalizar) {
            soma += Number(c.value);
        }
        return soma;
    },
    calcularLinhaB13(classNameDosOperandos) {
        let classNameDeOperandoB4menosB9 = classNameDosOperandos.split("+")[1];
        let classNameDeOperandoB4 = classNameDeOperandoB4menosB9.split("-menos-")[0];
        let classNameDeOperandoB9 = classNameDeOperandoB4menosB9.split("-menos-")[1];
        let classNameDeOperandoB12 = classNameDosOperandos.split("+")[0];
        let operandoB4 = document.querySelector(`.${classNameDeOperandoB4}`);
        let operandoB9 = document.querySelector(`.${classNameDeOperandoB9}`);
        let operandoB12 = document.querySelector(`.${classNameDeOperandoB12}`);
        let b13 = Number(operandoB4.value) + Number(operandoB12.value) - Number(operandoB9.value);
        return b13;
    }
}
function escutarEventos() {
    const inputsCelulares = document.querySelectorAll("[data-totalgeraleixox]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("input", () => totalizador.filtrarEtotalizarCelulas(inputCelular));
        inputCelular.value !== "" && totalizador.filtrarEtotalizarCelulas(inputCelular);
    });
}
window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});




