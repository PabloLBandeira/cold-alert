import './App.css'
import CityInput from './components/CityInput'
import TemperatureBox from './components/TemperatureBox'
import WeatherIllustration from './components/WeatherIllustration'
import UserMessage from './components/UserMessage'


export default function App() {
  return (
    <div className="fixed inset-0 bg-cover bg-center overflow-y-auto" style={{ backgroundImage: 'url(/images/bg-cold-alert.jpg)' }}>
      <CityInput />

      <div className="flex flex-row justify-center">
        <div className="w-9/12 max-w-lg flex flex-row gap-4 justify-evenly mt-4">
          <TemperatureBox label="Cabrobró" value="22°C" />
          <TemperatureBox label="Curitiba" value="18°C" />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between w-full">
      <UserMessage />
      <WeatherIllustration />
    </div>

    </div>
  )
}
