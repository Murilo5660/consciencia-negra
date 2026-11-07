const body = document.body;
const btnFundo = document.getElementById("btn-fundo");
const btnTitulo = document.getElementById("btn-titulo");
const tituloImportancia = document.getElementById("titulo-importancia");
const imagem1 = document.getElementById("imagem-1");
const imagem2 = document.getElementById("imagem-2");
const imagem5 = document.getElementById("imagem-5");
const btnAumentar1 = document.getElementById("btn-aumentar");
const btnDiminuir1 = document.getElementById("btn-diminuir");
const btnAumentar2 = document.getElementById("btn-aumentar-2");
const btnDiminuir2 = document.getElementById("btn-diminuir-2");
const btnEsconder5 = document.getElementById("btn-esconder-5");

btnFundo.addEventListener("click", () => {
    if (body.style.backgroundColor === "rgb(48, 48, 48)") {
        body.style.backgroundColor = "#171717";
        btnFundo.textContent = "Alterar cor de fundo";
    } else {
        body.style.backgroundColor = "#303030";
        btnFundo.textContent = "Alterar cor original";
    }
});

btnTitulo.addEventListener("click", () => {
    if (tituloImportancia.style.color === "red") {
        tituloImportancia.style.color = "#d6a84b";
        btnTitulo.textContent = "Alterar cor para vermelho";
    } else {
        tituloImportancia.style.color = "red";
        btnTitulo.textContent = "Voltar cor original";
    }
});

btnAumentar1.addEventListener("click", () => {
    const larguraAtual = imagem1.clientWidth;

    if (larguraAtual + 20 <= 400) {
        imagem1.style.width = `${larguraAtual + 20}px`;
    }
});
btnDiminuir1.addEventListener("click", () => {
    const larguraAtual = imagem1.clientWidth;
    if (larguraAtual - 20 >= 100) {
        imagem1.style.width = `${larguraAtual - 20}px`;
    }
});

btnAumentar2.addEventListener("click", () => {
    const larguraAtual = imagem2.clientWidth;
    if (larguraAtual + 20 <= 400) {
        imagem2.style.width = `${larguraAtual + 20}px`;
    }
});
btnDiminuir2.addEventListener("click", () => {
    const larguraAtual = imagem2.clientWidth;
    if (larguraAtual - 20 >= 100) {
        imagem2.style.width = `${larguraAtual - 20}px`;
    }
});

btnEsconder5.addEventListener("click", () => {
    if (imagem5.style.display === "none") {
        imagem5.style.display = "block";
        btnEsconder5.textContent = "Esconder Imagem";
    } else {
        imagem5.style.display = "none";
        btnEsconder5.textContent = "Mostrar Imagem";
    }
});