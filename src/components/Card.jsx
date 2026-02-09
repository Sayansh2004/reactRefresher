export default function Card({ image, name, stars, cuisines,costForTwo }) {
  return (
    <div className="border h-80 w-80 rounded-lg shadow-md hover:scale-105 transition duration-200 cursor-pointer bg-white">
      
      <img
        src={image}
        alt={name}
        className="h-44 w-full object-cover rounded-t-lg"
      />

      <div className="p-3">
        <h3 className="font-semibold text-lg">{name}</h3>

        <div className="flex justify-between items-center mt-2 text-gray-600 text-sm">
          <p>⭐ {stars}</p>
          <p>{cuisines?.join(", ")}</p>
        </div>
        <div>
            <p>{costForTwo}</p>
        </div>
      </div>

    </div>
  );
}
