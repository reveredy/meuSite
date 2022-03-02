/* Função para esconder e aparecer o menu mobile */
function toggleMenu() {
    document.getElementById('cab-nav').classList.toggle('show');
}

/*-------------------------------------------------------------------------------Slide de imagens---------------------------------------------------------------------------------------------*/
/*Array com as imagens do slide salvas*/
arrayImg = new Array("img/img1-slide.jpg", "img/img2-slide.jpg", "img/img3-slide.jpg",
    "img/img4-slide.jpg", "img/img5-slide.jpg");

const intervalo = 4000;

let pos = 0;

/*Função para voltar uma imagem no slide*/
function voltarSlide() {
    if (pos <= 0 || pos >= arrayImg.length) {
        pos = arrayImg.length - 1;
        document.getElementById('slide-img').src = arrayImg[pos];
        imgselecionada();
    } else {
        document.getElementById('slide-img').src = arrayImg[(pos - 1)];
        pos--;
        imgselecionada();
    }
}

/*Função para avançar uma imagem no slide*/
function avancarSlide() {
    if (pos >= arrayImg.length - 1) {
        pos = 0;
        document.getElementById('slide-img').src = arrayImg[pos];
        imgselecionada();
    } else {
        document.getElementById("slide-img").src = arrayImg[(pos + 1)];
        pos++;
        imgselecionada();
    }
}

/*Função para deixar apenas a imagem atual como selecionada*/
function imgselecionada() {
    switch (pos) {
        case 0:
            document.getElementById('sel2').src = 'img/desmarcada.png';
            document.getElementById("sel1").src = "img/imgSelecionada.png";
            document.getElementById("sel5").src = "img/desmarcada.png";
            break;
        case 1:
            document.getElementById('sel3').src = 'img/desmarcada.png';
            document.getElementById('sel2').src = "img/imgSelecionada.png";
            document.getElementById('sel1').src = "img/desmarcada.png";
            break;
        case 2:
            document.getElementById('sel4').src = 'img/desmarcada.png';
            document.getElementById('sel3').src = 'img/imgSelecionada.png';
            document.getElementById('sel2').src = 'img/desmarcada.png';
            break;
        case 3:
            document.getElementById("sel5").src = "img/desmarcada.png";
            document.getElementById('sel4').src = 'img/imgSelecionada.png';
            document.getElementById('sel3').src = 'img/desmarcada.png';
            break;
        case 4:
            document.getElementById('sel1').src = "img/desmarcada.png";
            document.getElementById('sel5').src = 'img/imgSelecionada.png';
            document.getElementById('sel4').src = 'img/desmarcada.png';
            break;
    }
}