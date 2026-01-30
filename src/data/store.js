const cities = [
  { id: 'london', name: 'London' },
  { id: 'paris', name: 'Paris' },
  { id: 'berlin', name: 'Berlin' },
  { id: 'rome', name: 'Rome' },
  { id: 'madrid', name: 'Madrid' },
  { id: 'amsterdam', name: 'Amsterdam' },
  { id: 'barcelona', name: 'Barcelona' },
  { id: 'vienna', name: 'Vienna' },
  { id: 'lisbon', name: 'Lisbon' },
  { id: 'dublin', name: 'Dublin' },
];

const restaurants = [
  { id: 1, name: 'The Ivy', cityId: 'london' },
  { id: 2, name: 'Dishoom', cityId: 'london' },
  { id: 3, name: 'St. John', cityId: 'london' },
  { id: 4, name: 'Hawksmoor', cityId: 'london' },
  { id: 5, name: 'Le Comptoir du Relais', cityId: 'paris' },
  { id: 6, name: 'L\'Astrance', cityId: 'paris' },
  { id: 7, name: 'Chez L\'Ami Jean', cityId: 'paris' },
  { id: 8, name: 'La Pergola', cityId: 'rome' },
  { id: 9, name: 'Roscioli', cityId: 'rome' },
  { id: 10, name: 'Trattoria Da Enzo', cityId: 'rome' },
  { id: 11, name: 'Botín', cityId: 'madrid' },
  { id: 12, name: 'Casa Lucio', cityId: 'madrid' },
  { id: 13, name: 'Sobrino de Botín', cityId: 'madrid' },
  { id: 14, name: 'DiverXO', cityId: 'madrid' },
  { id: 15, name: 'Tickets', cityId: 'barcelona' },
  { id: 16, name: 'Els Quatre Gats', cityId: 'barcelona' },
  { id: 17, name: 'Café Central', cityId: 'vienna' },
  { id: 18, name: 'Figlmüller', cityId: 'vienna' },
  { id: 19, name: 'Time Out Market', cityId: 'lisbon' },
  { id: 20, name: 'Belcanto', cityId: 'lisbon' },
  { id: 21, name: 'Chapter One', cityId: 'dublin' },
  { id: 22, name: 'The Winding Stair', cityId: 'dublin' },
];

const bars = [
  { id: 1, name: 'The Savoy American Bar', cityId: 'london' },
  { id: 2, name: 'Connaught Bar', cityId: 'london' },
  { id: 3, name: 'Nightjar', cityId: 'london' },
  { id: 4, name: 'Harry\'s Bar', cityId: 'paris' },
  { id: 5, name: 'Little Red Door', cityId: 'paris' },
  { id: 6, name: 'Experimental Cocktail Club', cityId: 'paris' },
  { id: 7, name: 'Berghain', cityId: 'berlin' },
  { id: 8, name: 'Tresor', cityId: 'berlin' },
  { id: 9, name: 'Watergate', cityId: 'berlin' },
  { id: 10, name: 'Door 74', cityId: 'amsterdam' },
  { id: 11, name: 'Winston Kingdom', cityId: 'amsterdam' },
  { id: 12, name: 'Hiding in Plain Sight', cityId: 'amsterdam' },
  { id: 13, name: 'Paradiso', cityId: 'barcelona' },
  { id: 14, name: 'Bobby Gin', cityId: 'barcelona' },
  { id: 15, name: 'Loft Bar', cityId: 'vienna' },
  { id: 16, name: 'Sky Bar', cityId: 'vienna' },
  { id: 17, name: 'Pensão Amor', cityId: 'lisbon' },
  { id: 18, name: 'Pavilhão Chinês', cityId: 'lisbon' },
  { id: 19, name: 'The Long Hall', cityId: 'dublin' },
  { id: 20, name: 'The Brazen Head', cityId: 'dublin' },
];

function getCities() {
  return cities;
}

function getCityById(cityId) {
  return cities.find((c) => c.id === cityId) || null;
}

function getRestaurantsByCityId(cityId) {
  return restaurants.filter((r) => r.cityId === cityId);
}

function getBarsByCityId(cityId) {
  return bars.filter((b) => b.cityId === cityId);
}

module.exports = {
  getCities,
  getCityById,
  getRestaurantsByCityId,
  getBarsByCityId,
};
