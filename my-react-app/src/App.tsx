import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useDebounceValue } from "./useDebounce";

interface City {
  id: number;
  name: string;
}

function App() {
  const [cities, setCities] = useState<City[] | []>([]);
  const [searchInput, setSearchInput] = useState("");

  const debounceValue = useDebounceValue(searchInput, 2000);

  const filtered = useMemo(() => {
    console.log(cities);
    return cities.filter((city) =>
      city.name.toLocaleLowerCase().includes(debounceValue.toLocaleLowerCase())
    );
  }, [debounceValue, cities]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/cities");
      const data = await response.json();
      setCities(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search for a city"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {filtered.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
