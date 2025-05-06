import { useState, useEffect } from 'react'

export default function CityInput({ onSelectCity }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.length < 3) {
        setResults([])
        return
      }

      setIsLoading(true)

      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=pt&format=json`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results || [])
          setIsLoading(false)
        })
        .catch(() => {
          setResults([])
          setIsLoading(false)
        })
    }, 500)

    return () => clearTimeout(delayDebounce)
  }, [searchTerm])

  async function handleSelect(city) {
    setSearchTerm(`${city.name}, ${city.admin1}, ${city.country}`)
    setResults([])
    if (onSelectCity) {
      onSelectCity({
        name: city.name,
        latitude: city.latitude,
        longitude: city.longitude
      })
    }
  }

  return (
    <div className="flex flex-col items-center mt-7 relative w-10/12 max-w-lg mx-auto">
      <label className="text-white text-base font-medium mb-1">
      </label>
      <input
        type="text"
        placeholder="Ex: Tangamandapio"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 text-base rounded-lg outline-none bg-white bg-opacity-80"
      />

      {isLoading && (
        <div className="absolute top-full mt-1 w-full bg-white bg-opacity-90 rounded shadow p-2 text-sm text-gray-700">
          Buscando...
        </div>
      )}

      {!isLoading && results.length > 0 && (
        <ul className="absolute top-full mt-1 w-full bg-white bg-opacity-90 rounded shadow z-10">
          {results.map((city) => (
            <li
              key={`${city.id}-${city.latitude}-${city.longitude}`}
              onClick={() => handleSelect(city)}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
            >
              {city.name}, {city.admin1}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}