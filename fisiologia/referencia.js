"use strict"
const referencia = {
    retornarLinha(inputTarget) {
        let indicador = inputTarget.parentElement.querySelector(".ficha__container-de-indicador").textContent;
        const indicadorOutput = document.querySelector(".reference__output--indicador");
        indicadorOutput.value = indicador;
        
    },
    retornarColuna(inputTarget) {
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        const colunaOutput = document.querySelector(".reference__output--idade");
        let titulosColunares = ["<5 anos", "5-9", "10-14, M", "10-14, F", "15-19, M", "15-19, F", "20+, M", "20+, F",];
        if(inputTarget.parentElement.matches(".ficha__body__row--seccao-3")) {
            titulosColunares = ["Novos inícios de TARV, <15 anos", "Novos inícios de TARV, 15+ anos", "Reinícios de TARV, <15 anos", "Reinícios de TARV, 15+ anos", "Activos em TARV, <15 anos", "Activos em TARV, 15+ anos", "Mulheres grávidas HIV+"];
        }
        let inputTargetIndex;
        for(let i in inputTargetAndSiblings){
            if(inputTargetAndSiblings[i] === inputTarget) inputTargetIndex = i;
        }
        if(inputTarget.parentElement.matches(".ficha__body__row--seccao-2")) {
            inputTargetIndex-=3;
            inputTargetIndex > 7 && (inputTargetIndex-=11);
        } else {
            inputTargetIndex-=2;
        }
        colunaOutput.value = `${titulosColunares[inputTargetIndex]}`;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll("[data-total], .input-celular--focus");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarLinha(inputCelular);
            referencia.retornarColuna(inputCelular);
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;