function getWeatherImage (userTemp) {

  let image; 
  let alt;

  if (userTemp <= 0) {
    image = "/cold-alert/images/capybara-frozen.svg", alt = "capivara congelada";
  } else if (userTemp <= 10) {
    image = "/cold-alert/images/capybara-cold.svg", alt = "capivara com frio";
  } else if (userTemp <= 15) {
    image = "/cold-alert/images/capybara-relax.svg", alt = "capivara relax";
  } else if (userTemp <= 20) {
    image = "/cold-alert/images/capybara-surf.svg", alt = "capivara indo surfar em Matinhos";
  } else if (userTemp <= 27) {
    image = "/cold-alert/images/capybara-heat.svg", alt = "capivara com muito calor";
  } else {
    image = "/cold-alert/images/capybara-on-fire.svg", alt = "capivara pegadno fogo de tanto calor";
  }

  return {image, alt};
}

export default getWeatherImage;