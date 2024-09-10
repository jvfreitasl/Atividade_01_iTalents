// Selecionando os elementos HTML
const inputText = document.getElementById('tarefa');
const addButton = document.getElementById('add');
const textList = document.getElementById('lista');

// Inicializando a lista de textos
let textArray = [];

// Função para adicionar um texto à lista e atualiza a exibição
function addTextToList() {
  const newText = inputText.value;
  if (newText !== '') {
    // Adiciona o novo texto ao array, se ele ainda não existir
    if (!textArray.includes(newText)) {
      textArray.push(newText);

      // Cria um novo elemento li para cada texto e adiciona à lista
      const listItem = document.createElement('li');
      listItem.textContent = newText;
      textList.appendChild(listItem);

      // Limpa o campo de input
      inputText.value = '';
    } else {
      alert('Texto já existe na lista!');
    }
  }
}

// Associando a função ao evento de clique do botão
addButton.addEventListener('click', addTextToList);