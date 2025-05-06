export default function TemperatureBox({ label, value}) {
  return (
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 w-36">
      <span className="text-sm text-gray-700">{label}</span>
      <strong className="text-2xl text-gray-900">{value}</strong>
    </div>
  )
}
