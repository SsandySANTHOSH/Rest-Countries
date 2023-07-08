// Function to fetch data from the API
function fetchData() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      // Process the fetched data
      displayData(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Function to display the fetched data on the page
function displayData(data) {
  const container = document.getElementById('data-container');
  container.innerHTML = '';

  data.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('country-card');

    const name = document.createElement('h2');
    name.textContent = country.name.common;
    card.appendChild(name);

    if (country.flags && country.flags.svg) {
      const flag = document.createElement('img');
      flag.src = country.flags.svg;
      card.appendChild(flag);
    }

    const capital = document.createElement('p');
    capital.textContent = `Capital: ${country.capital}`;
    card.appendChild(capital);

    const region = document.createElement('p');
    region.textContent = `Region: ${country.region}`;
    card.appendChild(region);

    const countryCode = document.createElement('p');
    countryCode.textContent = `Country Code: ${country.cca3}`;
    card.appendChild(countryCode);

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population}`;
    card.appendChild(population);

    container.appendChild(card);
  });
}

// Fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
