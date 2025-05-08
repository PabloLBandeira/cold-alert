export async function getCurrentTemperature (latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`

  try {
    const response = await fetch(url)
    const data = await response.json()
    
    const temperature = data.current.temperature_2m
    const unit = data.current_units.temperature_2m

    return{temperature, unit}
  } catch (error) {
    console.error ('Erro ao buscar a temperatura:', error)
    return null
  }
}