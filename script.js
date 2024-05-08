// Criando uma lista UL
var lista = document.createElement('ul');

// Adicionando itens à lista
var itens = ['Comprar tomate', 'Comprar cenora', 'Comprar alface', 'Comprar replho', 'Comprar banana'];

itens.forEach(function(item) {
  var li = document.createElement('li');
  li.textContent = item;
  lista.appendChild(li);
});

// Adicionando a lista ao corpo do documento
document.body.appendChild(lista);


// Seleciona a tabela
var tabela = document.getElementById('minhaTabela');

// Define o número de linhas e colunas
var numRows = 3;
var numCols = 4;

// Cria as linhas e colunas
for (var i = 0; i < numRows; i++) {
  var row = tabela.insertRow(i);
  for (var j = 0; j < numCols; j++) {
    var cell = row.insertCell(j);
    cell.textContent = 'Célula ' + (i + 1) + '-' + (j + 1); // Preenche a célula com dados dinâmicos
  }
}