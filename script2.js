// Lista de URLs das imagens
var imagens = [
    { src: 'imagem1.jpg', alt: 'Imagem 1' },
    { src: 'imagem2.jpg', alt: 'Imagem 2' },
    { src: 'imagem3.jpg', alt: 'Imagem 3' },
    { src: 'imagem4.jpg', alt: 'Imagem 4' },
    { src: 'imagem5.jpg', alt: 'Imagem 5' }
  ];
  
  // Container da galeria
  var galeria = document.getElementById('galeria');
  
  // Criação dos elementos img e sua adição ao container
  imagens.forEach(function(imagem) {
    var img = document.createElement('img');
    img.src = imagem.src;
    img.alt = imagem.alt;
    galeria.appendChild(img);
  });
  
  // Contador de envios
  var numTentativas = 0;
  
  // Verificação antes do envio
  galeria.addEventListener('click', function() {
    if (numTentativas < 6) {
      alert('Imagem clicada!');
      numTentativas++;
    } else {
      alert('Você atingiu o limite máximo de tentativas de visualização.');
      galeria.removeEventListener('click');
    }
  });
  