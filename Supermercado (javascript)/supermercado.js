function Promoção(){
    var preço = document.getElementById("preid");
    var nome = document.getElementById("prodid");
    let h4 = document.getElementById('h2id');
    let h44 = document.getElementById('ph2id');
    //calculo
     var resultado = parseInt(preço.value);
     var por = (50 / 100) * (preço.value);
     var soma = resultado + resultado + por;

     h4.innerHTML = (`${nome.value} - Promoção: Leve 3 por R$:${soma}`);
     h44.innerHTML = (`o 3° produto sairá apenas R$: ${por}`);
}