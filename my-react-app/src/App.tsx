import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useDebounce, useDebounceValue } from "./useDebounce";

interface City {
  id: number;
  name: string;
}

function App() {
  // const [cities, setCities] = useState<City[] | []>([]);
  const [cityRestaurants, setCityRestaurants] = useState([]);
  const [cityBars, setCityBars] = useState([]);
  const [cityCoffeeShops, setCityCoffeeShops] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const debounceValue = useDebounceValue(searchInput, 2000);

  // const filtered = useMemo(() => {
  //   console.log(cities);
  //   return cities.filter((city) =>
  //     city.name.toLocaleLowerCase().includes(debounceValue.toLocaleLowerCase())
  //   );
  // }, [debounceValue, cities]);

  const fetchCityPlacesByType = async (str, signal, type, setter) => {
    const response = await fetch(
      `http://localhost:3000/api/cities/${str.toLocaleLowerCase()}/${type}`,
      { signal }
    );
    const cityPlaces = await response.json();
    setter(cityPlaces);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/api/cities");
  //     const data = await response.json();
  //     setCities(data);
  //   };
  //   fetchData();
  // }, []);

  //only for coffee shops fetch - different logic
  useEffect(() => {
    if (debounceValue.length === 0) {
      setCityCoffeeShops([]);
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    const timerId = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    const fetchCoffeeShops = async () => {
      try {
        const coffeeShops = await fetchCityPlacesByType(
          debounceValue,
          signal,
          "coffee-shops",
          setCityCoffeeShops
        );
        console.log({ coffeeShops });
      } catch (err) {
        console.log(err);
      } finally {
        clearTimeout(timerId);
        setIsLoading(false);
      }
    };

    fetchCoffeeShops();

    return () => {
      clearTimeout(timerId);
      controller.abort();
    };
  }, [debounceValue]);

  useEffect(() => {
    if (debounceValue.length === 0) {
      setCityRestaurants([]);
      setCityBars([]);
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    fetchCityPlacesByType(
      debounceValue,
      signal,
      "restaurants",
      setCityRestaurants
    ),
      fetchCityPlacesByType(debounceValue, signal, "bars", setCityBars);

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
      {cityRestaurants.length > 0 && (
        <div>
          <h3>Restaurants:</h3>
          <ul>
            {cityRestaurants.map((restaurant) => (
              <li key={restaurant.id}>{restaurant.name}</li>
            ))}
          </ul>
        </div>
      )}
      {cityBars.length > 0 && (
        <div>
          <h3>Bars:</h3>
          <ul>
            {cityBars.map((bar) => (
              <li key={bar.id}>{bar.name}</li>
            ))}
          </ul>
        </div>
      )}
      {cityCoffeeShops.length > 0 ? (
        <div>
          <h3>Coffee shops:</h3>
          <ul>
            {cityCoffeeShops.map((coffeeShop) => (
              <li key={coffeeShop.id}>{coffeeShop.name}</li>
            ))}
          </ul>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
