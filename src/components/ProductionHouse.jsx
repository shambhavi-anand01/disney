import React from "react";
import disney from "./../assets/Images/disney.jpg";
import marvel from "./../assets/Images/marvel.jpg";
import national from "./../assets/Images/national.png";
import pixar from "./../assets/Images/pixar.png";
import starwars from "./../assets/Images/starwars.png";

import disneyV from "./../assets/Videos/Disney.mp4";
import marvelV from "./../assets/Videos/Marvel.mp4";
import nationalV from "./../assets/Videos/National.mp4";
import pixarV from "./../assets/Videos/Pixar.mp4";
import starwarV from "./../assets/Videos/Starwar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: national,
      video: nationalV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwars,
      video: starwarV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((item) => (
        <div
          className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
