function getWeatherImage (userTemp) {

  console.log(userTemp)

  let image; 
  let alt;

  if (userTemp <= 0) {
    image = "/images/capybara-frozen.svg", alt = "capivara congelada";
  } else if (userTemp <= 10) {
    image = "/images/capybara-cold.svg", alt = "capivara com frio";
  } else if (userTemp <= 15) {
    image = "/images/capybara-relax.svg", alt = "capivara relax";
  } else if (userTemp <= 20) {
    image = "/images/capybara-surf.svg", alt = "capivara indo surfar em Matinhos";
  } else if (userTemp <= 27) {
    image = "/images/capybara-heat.svg", alt = "capivara com muito calor";
  } else {
    image = "/images/capybara-on-fire.svg", alt = "capivara pegadno fogo de tanto calor";
  }

  return {image, alt};
}

export default getWeatherImage;