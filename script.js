function comparePrices(productName, price) {
  // Obtenha o elemento de resultado
  var resultTextElement = document.getElementById("resultText");

  // Verifique se já há um resultado anterior
  if (resultTextElement.innerHTML !== "") {
      resultTextElement.innerHTML = "";
  }

  // Adicione o resultado da comparação
  resultTextElement.innerHTML = `O preço do ${productName} é $${price.toFixed(2)}.`;
}
