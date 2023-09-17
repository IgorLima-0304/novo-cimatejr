document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".image-gallery");
    const prevButton = document.getElementById("botao-preview");
    const nextButton = document.getElementById("botao-next");

    let currentIndex = 0;

    function showImage(index) {
        const items = gallery.querySelectorAll(".gallery-item");
        if (index < 0) {
            currentIndex = items.length - 1;
        } else if (index >= items.length) {
            currentIndex = 0;
        }

        items.forEach((item, i) => {
            if (i === currentIndex) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex--;
        showImage(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex++;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});

var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var closeModal = document.getElementById("closeModal");

var buttons = document.querySelectorAll(".product a");

var carInfo = [
    { nome: "WRX", velocidadeMaxima: "240 km/h", valor: "A partir de R$180.000,00" },
    { nome: "XV", velocidadeMaxima: "220 km/h", valor: "A partir de R$150.000,00" },
    { nome: "FORESTER", velocidadeMaxima: "230 km/h", valor: "A partir de R$170.000,00" },
    { nome: "Outback", velocidadeMaxima: "250 km/h", valor: "A partir de R$200.000,00" }
];

function mostrarInfoCarro(indice) {
    var carro = carInfo[indice];
    modalTitle.textContent = carro.nome;
    modalDescription.textContent = "Velocidade Máxima: " + carro.velocidadeMaxima + "\n" +
                                 "Valor: " + carro.valor;
    modal.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
}

buttons.forEach(function(botao, indice) {
    botao.addEventListener("click", function() {
        mostrarInfoCarro(indice);
    });
});

closeModal.addEventListener("click", fecharModal);
window.addEventListener("click", function(evento) {
    if (evento.target == modal) {
        fecharModal();
    }
});