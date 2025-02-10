import React, { useState } from "react";

function Blog() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission

    if (value) {
      const searchMeal = async () => {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
          );
          const result = await response.json();
          if (result.meals) {
            setData(result.meals[0]); // Set the first meal from the result
            console.log(result.meals[0]);
          } else {
            setData("No recipe available"); // Handle case when no meal is found
          }
        } catch (error) {
          console.error(error);
          setData("Error fetching data"); // Handle fetch error
        }
      };
      searchMeal();
    } else {
      setData("Please enter a meal name"); // Handle case when value is empty
    }
  };

  const handleClick = (url) => {
    window.open(url, "_blank"); // Open the YouTube video link in a new tab
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-10">
      {/* Search Form */}
      <form className="flex items-center max-w-2xl w-full p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a meal..."
            onChange={(e) => setValue(e.target.value)} // Update value state
            value={value}
            required
          />
        </div>
        <button
          type="submit"
          className="p-3 ms-2 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSearch} // Trigger search on button click
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      {/* Render the fetched data */}
      <div className="mt-4 ">
        {data && typeof data === "string" ? (
          <p>{data}</p> // Display the error or no recipe message
        ) : (
          data &&
          data.strMeal && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg  max-w-3xl h-auto mx-auto mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {data.strMeal}
              </h3>
              <img
                onClick={() => handleClick(data.strYoutube)} // Open YouTube video in new tab
                src={data.strMealThumb}
                alt={data.strMeal}
                className="w-full h-auto rounded-lg mb-4 cursor-pointer"
              />
              <p className="text-lg text-gray-700 dark:text-gray-300">{data.strInstructions}</p>

              {/* YouTube Video Section */}
              {data.strYoutube && (
                <div className="mt-6">
                  <button
                    className="p-3 ml-16 text-lg font-medium text-white bg-blue-700 rounded-lg"
                    onClick={() => handleClick(data.strYoutube)} // Open YouTube video on button click
                  >
                    Play Recipe Video
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Blog;
