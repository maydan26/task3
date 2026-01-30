# Cities, Restaurants & Bars API

A Node.js REST API that returns cities, restaurants by city, and bars by city.

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

Server runs at `http://localhost:3000` (or set `PORT`).

## Endpoints

### List cities

```bash
curl http://localhost:3000/api/cities
```

### List restaurants in a city

```bash
curl http://localhost:3000/api/cities/london/restaurants
```

Returns 404 if the city does not exist or has no restaurants.

### List bars in a city

```bash
curl http://localhost:3000/api/cities/london/bars
```

Returns 404 if the city does not exist or has no bars.

## Error responses

- **City not found:** `GET /api/cities/unknown/restaurants` → 404 with `{ "error": "City not found", "cityId": "unknown" }`
- **No restaurants in city:** e.g. city exists but has no restaurants → 404 with `{ "error": "No restaurants found in this city", "cityId": "..." }`
- **No bars in city:** same pattern for bars.
