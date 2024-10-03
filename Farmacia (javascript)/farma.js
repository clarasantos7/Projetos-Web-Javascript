function mostrar(){
 let medicamento = window.document.getElementById('Medicamento');
 let preco = window.document.getElementById('precoo');
 let cama = window.document.getElementById('resultado');
 let valor = window.document.getElementById('valor');
 let soma = (Math.trunc(preco.value)) + (Math.trunc(preco.value)) ;
 cama.innerHTML = (`Promoção de: ${medicamento.value}`);
 valor.innerHTML = (`Leve dois por ${soma}`);

}