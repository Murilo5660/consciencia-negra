const htmlElement = document.documentElement;
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let tamanhoAtual = 16; 
const tamanhoMaximo = 24;
const tamanhoMinimo = 12;


btnAumentar.addEventListener('click', () => {
    if (tamanhoAtual < tamanhoMaximo) {
        tamanhoAtual += 2;
        htmlElement.style.fontSize = tamanhoAtual + 'px';
    }
});


btnDiminuir.addEventListener('click', () => {
    if (tamanhoAtual > tamanhoMinimo) {
        tamanhoAtual -= 2;
        htmlElement.style.fontSize = tamanhoAtual + 'px';
    }
});