import React from "react";

const Lunch = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/t5-RlA2qZS0?si=l9innicZWMh-Mqv3", // Poha Recipe
    "https://www.youtube.com/embed/sx7jTUxag7M?si=z85kIFWyJEPMWuwI", // Aloo Paratha Recipe
    "https://www.youtube.com/embed/shFaiNs0hwA?si=2GTAZ_QCzEG2KbYJ", // Masala Dosa Recipe
    "https://www.youtube.com/embed/5zW8ytRt5ic?si=A_MHF8pTMiv6GEjw", // Methi Thepla Recipe
    "https://www.youtube.com/embed/X9-aK2ZIliE?si=cq4JjgJrnSF3i9Vl",
    "https://www.youtube.com/embed/wXYhqx81j5w?si=bLT1pZUMXaJbSEO0", // Poached Eggs on Toast
    "https://www.youtube.com/embed/9dn1TT9-xXs?si=aMzuntSnrTUcxhnk", // Chole Bhature Recipe
    "https://www.youtube.com/embed/JkOmB4HzMNI?si=VpjGBNquKtL-NSOy", // Dhokla Recipe
    "https://www.youtube.com/embed/EPYw30GnGT0?si=wVz559svI6zqexJn", // Pesarattu Recipe
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 p-6">
        {videoLinks.map((video, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <iframe
              src={video}
              title={`Breakfast Video ${index + 1}`}
              className="w-full h-40 object-cover"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
