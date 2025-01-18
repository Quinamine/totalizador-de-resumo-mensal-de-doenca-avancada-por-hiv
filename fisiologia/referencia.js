"use strict"
const referencia = {
    retornarIndicador(inputTarget) {
        const classColIndicadores = inputTarget.parentElement.dataset.indicadores;
        const indicadores = document.querySelectorAll(`.${classColIndicadores} span`);
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        let inputTargetIndex;
        for (let i = 0; i < inputTargetAndSiblings.length; i++) {
            if(inputTarget === inputTargetAndSiblings[i]) {
                inputTargetIndex = i;
            }
        }
        const indicadorOutput = document.querySelector(".reference__output--indicador");
        indicadorOutput.value = indicadores[inputTargetIndex].textContent;
        
    },
    retornarFaixaEtariaEsexo(inputTarget) {
        const faixaEtariaOutput = document.querySelector(".reference__output--idade");
        const sexoOutput = document.querySelector(".reference__output--sexo");
        let faixaEtaria = inputTarget.parentElement.dataset.faixaetaria;
        let sexo = inputTarget.parentElement.dataset.sexo;
        faixaEtariaOutput.value = faixaEtaria;
        sexoOutput.value = sexo;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll("[data-totalgeraleixox], .grid-extra__input");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarIndicador(inputCelular);
            referencia.retornarFaixaEtariaEsexo(inputCelular);
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;