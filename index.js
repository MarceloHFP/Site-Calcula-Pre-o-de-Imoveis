function calcularPreco(metragem, quantidade, preco) {
  // Convertendo os valores para números
  metragem = parseFloat(metragem);
  quantidade = parseInt(quantidade);
  preco = parseFloat(preco);

  let a;

  switch (quantidade) {
      case 1:
          a = metragem * preco;
          break;
      case 2:
          a = metragem * preco * quantidade;
          break;
      case 3:
          a = metragem * preco * quantidade;
          break;
      default:
          break;
  }
  return a;
}



function apertou() {
  let metragem = document.getElementById("metragem").value;
  let quartos = document.getElementById("quartos").value;
  let preco = document.getElementById("preco").value;
 
  // Verificando se os valores são válidos (numéricos)
  if (isNaN(metragem) || isNaN(quartos) || isNaN(preco)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
  }

  let precoFinal = calcularPreco(metragem, quartos, preco);
    let h1 = document.getElementById("p");
  h1.style.display = 'block';
  h1.innerHTML = "O valor do seu imovel é R$" + precoFinal;
  
  console.log(precoFinal);
}
