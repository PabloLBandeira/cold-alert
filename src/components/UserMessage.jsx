import getUserMessages from "../helpers/weatherMessage";

export default function UserMessage({ userTemp, curitibaTemp }) {
  const { comparison, interpretation } = getUserMessages(userTemp, curitibaTemp);

  return (
    <div className="w-full text-center mt-4 px-4 md:w-6/12 md:mt-0 md:text-left lg:text-left">
      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
        {comparison}
      </p>
      <p className="text-base md:text-lg lg:text-xl text-white drop-shadow-sm mt-2">
        {interpretation}
      </p>
    </div>
  );
}

