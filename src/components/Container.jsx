import { useState } from "react"
import CityInput from "./CityInput"
import TemperatureBox from "./TemperatureBox"
import { getCurrentTemperature } from "../api/getWeather"
import UserMessage from "./UserMessage"
import WeatherIllustration from "./WeatherIllustration"

export default function Container() {
  const [temperatureData, setTemperatureData] = useState(null)

  async function handleCitySelect(city) {
    const { latitude, longitude } = city
    const result = await getCurrentTemperature(latitude, longitude)

    if (result) {
      setTemperatureData({
        label: `${city.name}`,
        value: `${result.temperature} ${result.unit}`
      })
    }
  }

  return (
    <>
      <CityInput onSelectCity={handleCitySelect} />

      {temperatureData && (
        <div className="flex flex-row justify-center mt-4">
          <div className="w-9/12 max-w-lg flex flex-row gap-4 justify-evenly">
            <TemperatureBox label={temperatureData.label} value={temperatureData.value} />
          </div>
        </div>
      )}

      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between w-full">
        <UserMessage />
        <WeatherIllustration />
      </div>
    </>
  )
}
