function getUserMessages(userTemp, curitibaTemp) {
  let comparison;
  let interpretation;

  if (userTemp <= 10) {
    comparison = "Ponha uma japona!";
  } else if (userTemp <= 15) {
    comparison = "Largue mão! Nem precisa de japona.";
  } else if (userTemp <= 27) {
    comparison = "Camiseta e berma já tá bão!";
  } else {
    comparison = "Fuja para as colinas!";
  }

  if (userTemp <= 0) {
    if (userTemp < curitibaTemp) {
      interpretation = "Aí vai congelar tudo.";
    } else if (userTemp === curitibaTemp) {
      interpretation = "Aí tá um frio do djanho igual a Curitiba.";
    } else {
      interpretation = "Mas em Curitiba tá mais frio.";
    }
  } else if (userTemp <= 10) {
    if (userTemp < curitibaTemp){
      interpretation = "Aí tá uma friaca.";
    } else if (userTemp === curitibaTemp) {
      interpretation = "Tá um vento gelado igual Curitiba";
    } else {
      interpretation = "Aqui em Curitiba, sim, tá frio.";
    }
  } else if (userTemp <= 15) {
    if (userTemp < curitibaTemp) {
      interpretation = "Não é pra tanto. Até que tá um clima agradável.";
    } else if (userTemp === curitibaTemp) {
      interpretation = "Tá igual Curitiba, um clima bom";
    } else {
      interpretation = "Pra mim nem tá frio.";
    }
  } else if (userTemp <= 20) {
    if (userTemp < curitibaTemp) {
      interpretation = "Ih! Nesse clima dá pra ir surfar em Matinhos";
    } else if (userTemp === curitibaTemp) {
      interpretation = "Que aí também tá esquentando.";
    } else {
      interpretation = "Ih! Nesse clima eu já tô morrendo de calor"
    }
  } else if (userTemp <= 27) {
    if (userTemp < curitibaTemp) {
      interpretation = "Aí tá menos pior, mas tá um calor do djanho."
    } else if (userTemp === curitibaTemp) {
      interpretation = "Aí também tá esse calorão do djanho!"
    } else {
      interpretation = "Deusolivre! Que calor do djanho!"
    }
  } else {
    interpretation = "Capaz mesmo! Calor do djanho! Desse jeito até as capivaras tão pegando fogo."
  }

  /*
  if (userTemp <= 0) {
    interpretation = "Congelou. Já era.";
  } else if (userTemp <= 10) {
    interpretation = "Ponha uma japona";
  } else if (userTemp <= 15) {
    interpretation = "Um clima até que agradável.";
  } else if (userTemp <= 20) {
    interpretation = "Dá até pra surfar em Matinhos!";
  } else if (userTemp <= 27) {
    interpretation = "Tá quente.";
  } else {
    interpretation = "Já derretemo!";
  }
*/

  return { comparison, interpretation };
}

export default getUserMessages;
