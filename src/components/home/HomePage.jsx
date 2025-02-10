import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate(); 

    const handleBreakfast = (e) => {
      e.preventDefault(); // Fixed typo from preventDeafult to preventDefault
      navigate('/breakfast'); // Correctly using navigate function
    };

    const handleLunch = (e) => {
        e.preventDefault(); // Fixed typo from preventDeafult to preventDefault
        navigate('/lunch'); // Correctly using navigate function
      };
      const handleDinner = (e) => {
        e.preventDefault(); // Fixed typo from preventDeafult to preventDefault
        navigate('/dinner'); // Correctly using navigate function
      };
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="grid grid-cols-3 gap-0 h-screen">
        {/* Item 1 */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/29915364/pexels-photo-29915364/free-photo-of-artistic-coffee-presentation-on-wooden-coaster.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button className="text-white text-2xl font-bold" onClick={handleBreakfast}>Breakfast</button>
          </div>
        </div>

        {/* Item 2 */}
        <div
          className="relative bg-cover bg-center" 
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/12392833/pexels-photo-12392833.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <button className="text-white text-2xl font-bold" onClick={handleLunch}>Lunch</button>
          </div>
        </div>

        {/* Item 3 */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/18698227/pexels-photo-18698227/free-photo-of-food-photography.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <button className="text-white text-2xl font-bold" onClick={handleDinner}>Dinner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
