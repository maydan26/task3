import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useDebounce, useDebounceValue } from "./useDebounce";

interface City {
  id: number;
  name: string;
}

function App() {
  const [cities, setCities] = useState<City[] | []>([]);
  const [cityRestaurants, setCityRestaurants] = useState([]);
  const [cityBars, setCityBars] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const debounceValue = useDebounceValue(searchInput, 2000);

  const filtered = useMemo(() => {
    console.log(cities);
    return cities.filter((city) =>
      city.name.toLocaleLowerCase().includes(debounceValue.toLocaleLowerCase())
    );
  }, [debounceValue, cities]);

  const fetchCityRestaurants = async (str, signal) => {
    const response = await fetch(
      `http://localhost:3000/api/cities/${str.toLocaleLowerCase()}/restaurants`,
      { signal }
    );
    const newCityRestaurants = await response.json();
    setCityRestaurants(newCityRestaurants);
  };

  const fetchCityBars = async (str, signal) => {
    const response = await fetch(
      `http://localhost:3000/api/cities/${str.toLocaleLowerCase()}/bars`,
      { signal }
    );
    const newCityBars = await response.json();
    setCityBars(newCityBars);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/api/cities");
  //     const data = await response.json();
  //     setCities(data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (searchInput.length === 0) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    Promise.all([
      fetchCityRestaurants(debounceValue, signal),
      fetchCityBars(debounceValue, signal),
    ]);

    return () => controller.abort();
  }, [debounceValue]);

  return (
    <>
      <input
        type="text"
        placeholder="Search for a city"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div>Restaurants:</div>
      <ul>
        {cityRestaurants.length > 0 &&
          cityRestaurants.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
      </ul>
      <div>Bars:</div>
      <ul>
        {cityBars.length > 0 &&
          cityBars.map((bar) => <li key={bar.id}>{bar.name}</li>)}
      </ul>
    </>
  );
}

export default App;
