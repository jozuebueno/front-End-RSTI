// Criação do formulário
var formContainer = document.getElementById('formularioContainer');
var form = document.createElement('form');

// Campo de texto para o nome
var nomeLabel = document.createElement('label');
nomeLabel.textContent = 'Nome: ';
var nomeInput = document.createElement('input');
nomeInput.type = 'text';
nomeInput.name = 'nome';
form.appendChild(nomeLabel);
form.appendChild(nomeInput);
form.appendChild(document.createElement('br'));

// Campo de texto para o email
var emailLabel = document.createElement('label');
emailLabel.textContent = 'Email: ';
var emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement('br'));

// Campo de seleção para a categoria
var categoriaLabel = document.createElement('label');
categoriaLabel.textContent = 'Categoria: ';
var categoriaSelect = document.createElement('select');
categoriaSelect.name = 'categoria';
var categorias = ['Geral', 'Suporte', 'Vendas', 'Outro'];
categorias.forEach(function(categoria) {
  var option = document.createElement('option');
  option.textContent = categoria;
  categoriaSelect.appendChild(option);
});
form.appendChild(categoriaLabel);
form.appendChild(categoriaSelect);
form.appendChild(document.createElement('br'));

// Botão de envio
var submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';

// Adiciona evento de envio
var numTentativas = 0;
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão de enviar o formulário
  
  if (numTentativas < 6) {
    alert('Formulário enviado!');
    numTentativas++;
  } else {
    alert('Você atingiu o limite máximo de tentativas de envio.');
    submitButton.disabled = true; // Desativa o botão de envio após 6 tentativas
  }
});

form.appendChild(submitButton);

// Adiciona o formulário ao container
formContainer.appendChild(form);
