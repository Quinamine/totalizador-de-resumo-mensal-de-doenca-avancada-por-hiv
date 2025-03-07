"use strict"
const backup = {
    saveGridInputs() {
        const inputsCelulares = document.querySelectorAll("[data-total], .input-celular--focus");
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
        let classNameDosOperandos = inputTarget.dataset.total;
        inputTarget.classList.add(`${classNameDosOperandos}`);  
        let operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
        let celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaloutput}`);
        celulaDeSaida.value = this.somar(operandos);
        if(inputTarget.dataset.totall5) {
            classNameDosOperandos = inputTarget.dataset.totall5;
            inputTarget.classList.add(`${classNameDosOperandos}`); 
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totall5output}`);
            celulaDeSaida.value = this.calcularTotalDaLinha5(classNameDosOperandos);
        }
        if(inputTarget.dataset.totalgerall5) {
            classNameDosOperandos = inputTarget.dataset.totalgerall5;
            inputTarget.classList.add(`${classNameDosOperandos}`); 
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totalgerall5output}`);
            celulaDeSaida.value = this.calcularTotalDaLinha5(classNameDosOperandos);
        }
    },
    somar(celulasPorTotalizar) {
        let soma = 0;
        for(const c of celulasPorTotalizar) {
            soma += Number(c.value);
        }
        return soma;
    },
    calcularTotalDaLinha5(classNameDosOperandos) {
        let classNameDoOperandoL4 = classNameDosOperandos.split("-menos-")[1];
        let l4 = document.querySelector(`.${classNameDoOperandoL4}`);
        let operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
        let somaL0aL3 = this.somar(operandos);
        let totalL5 = somaL0aL3 - l4.value * 2;
        return totalL5;
        
    }
}
function escutarEventos() {
    const inputsCelulares = document.querySelectorAll("[data-total]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("input", () => {
            totalizador.filtrarEtotalizarCelulas(inputCelular);
        });
        inputCelular.value !== "" && totalizador.filtrarEtotalizarCelulas(inputCelular);
    });
}
window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});




