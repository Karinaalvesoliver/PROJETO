//Autora Karina

console.log("Projeto Detetive\nResponda as perguntas a seguir com 0 para não e 1 para sim.\nQualquer opção diferente de 0 ou 1, encerrará o programa ");

let tratativa = 0;

let pergunta1 = +prompt("Telefonou para a vítima?");

if (pergunta1 !==0 && pergunta1 !==1) {
    console.log("Você não digitou uma opção válida. Retorne ao início e responda apenas 0 ou 1");
}else {
    if (pergunta1 == 1){
   tratativa = ++tratativa;
 } else{}
   let pergunta2 = +prompt("Esteve no local do crime?");
   if (pergunta2 !==0 && pergunta2 !==1){
    console.log("Você não digitou uma opção válida. Retorne ao início e responda apenas 0 ou 1");
  } else {
     if (pergunta2 == 1){
      tratativa = ++tratativa
 } else {}
   let pergunta3 = +prompt("Mora perto da vítima?");
  if (pergunta3 !==0 && pergunta3 !==1){
    console.log ("Você não digitou uma opção válida. Retorne ao início e responda apenas 0 ou 1");
  }else {
    if (pergunta3 === 1){
    tratativa = ++tratativa;
    }else {}
  } 
    let pergunta4 = +prompt("Devia para a vítima?");
    if (pergunta4 !==0 && pergunta4 !==1){
     console.log ("Você não digitou uma opção válida. Retorne ao início e responda apenas 0 ou 1");
    } else {
        if (pergunta4 === 1) {
        tratativa = ++tratativa;
        } else {}
      let pergunta5 = +prompt("Já trabalhou com a vítima?");
      if (pergunta5 !==0 && pergunta5 !==1) {
       console.log ("Você não digitou uma opção válida. Retorne ao iníciio e responda apenas 0 ou 1");
      }
      else {
        if (pergunta5 === 1){
        tratativa = ++tratativa;
          }else {}
          if (tratativa == 2){
          console.log("\nVocê se classifica suspeito(a)");
          }else if (tratativa == 3 || tratativa == 4){
          console.log("\nVocê se classifica cúmplice");
          } else if (tratativa == 5) {
          console.log("\nVocê se classifica assasino(a)");
          } else {
          console.log("\nVocê é inocente");
          }
  }
  }
  }
  }