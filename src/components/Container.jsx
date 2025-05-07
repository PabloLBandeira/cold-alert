import { useEffect, useState } from "react"
import CityInput from "./CityInput"
import TemperatureBox from "./TemperatureBox"
import { getCurrentTemperature } from "../api/getWeather"
import UserMessage from "./UserMessage"
import WeatherIllustration from "./WeatherIllustration"

export default function Container() {
  const [temperatureData, setTemperatureData] = useState(null)
  const [curitibaData, setCuritibaData] = useState(null)

  async function handleCitySelect(city) {
    const { latitude, longitude } = city
    const result = await getCurrentTemperature(latitude, longitude)

    if (result) {
      setTemperatureData({
        label: `${city.name}`,
        value: `${result.temperature} ${result.unit}`,
        temp: result.temperature
      })
    }
  }

  useEffect(() => {
    async function fetchCuritibaTemperature() {
      const latitude = -25.4284
      const longitude = -49.2733
      const result = await getCurrentTemperature(latitude, longitude)

      if (result) {
        setCuritibaData({
          label: "Curitiba",
          value: `${result.temperature} ${result.unit}`,
          temp: result.temperature 
        })
      }      
    }

    fetchCuritibaTemperature()
  }, []
  )

  const showBoxes = temperatureData && curitibaData

  return (
    <>
      <CityInput onSelectCity={handleCitySelect} />

      {showBoxes && (
        <div className="flex flex-row justify-center mt-4">
          <div className="w-9/12 max-w-lg flex flex-row gap-4 justify-evenly">
            <TemperatureBox label={temperatureData.label} value={temperatureData.value} />
            <TemperatureBox label={curitibaData.label} value={curitibaData.value} />
          </div>
        </div>
      )}

<div className="flex flex-col-reverse items-center md:flex-row md:justify-between w-full">
        {showBoxes ? (
          <>
            <UserMessage
              userTemp={temperatureData.temp}
              curitibaTemp={curitibaData.temp}
            />
            <WeatherIllustration 
            userTemp={temperatureData.temp}
            />
          </>
        ) : (
          <div className="w-full text-center mt-4 px-4 md:w-6/12 md:mt-0 md:text-left lg:text-left">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
              Será que precisa ponhar uma japona?
            </p>
          </div>
        )}

      </div>
    </>
  )
}
