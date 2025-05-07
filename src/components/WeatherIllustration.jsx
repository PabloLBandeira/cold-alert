import getWeatherImage from "../helpers/weatherImage"

export default function WeatherIllustration({userTemp}) {
  const {image, alt} = getWeatherImage(userTemp)
  return (
      <div className="flex flex-row justify-center mt-4 md:justify-end">
        <img src={image} alt={alt}   className="ww-6/12 max-h-72 md:w-7/12 md:max-h-[35rem] lg:w-8/12 lg:max-h-[24rem] object-contain "></img>
      </div>
  )
}
 