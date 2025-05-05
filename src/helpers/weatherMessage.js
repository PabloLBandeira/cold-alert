function getUserMessages(userTemp, curitibaTemp) {
  let comparison;
  let interpretation;

  if (userTemp < curitibaTemp) {
    comparison = "Rapaz, tá mais frio que Curitiba!";
  } else if (userTemp === curitibaTemp) {
    comparison = "Mesma coisa que Curitiba... pelo menos não piorou!";
  } else {
    comparison = "Que calor do djanho!";
  }

  if (userTemp <= 0) {
    interpretation = "Congelou. Já era.";
  } else if (userTemp <= 10) {
    interpretation = "Ponha uma japona, fi!";
  } else if (userTemp <= 15) {
    interpretation = "Um clima até que agradável.";
  } else if (userTemp <= 20) {
    interpretation = "Dá até pra surfar em Matinhos!";
  } else if (userTemp <= 27) {
    interpretation = "Tá quente.";
  } else {
    interpretation = "Já derretemo!";
  }

  return { comparison, interpretation };
}

export default getUserMessages;
