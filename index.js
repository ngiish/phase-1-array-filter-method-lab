// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }

  const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Jane', hometown: 'Los Angeles' },
    { name: 'Alice', hometown: 'Chicago' },
  ];
  
  const matchingDrivers = findMatching(drivers.map(driver => driver.name), 'jane'); // Case-insensitive match
  console.log(matchingDrivers); // Output: ['Jane']
  
  const fuzzyMatchedDrivers = fuzzyMatch(drivers.map(driver => driver.name), 'j'); // Names starting with 'j'
  console.log(fuzzyMatchedDrivers); // Output: ['John', 'Jane']
  
  const nameMatchedDrivers = matchName(drivers, 'Alice'); // Exact name match
  console.log(nameMatchedDrivers); // Output: [{ name: 'Alice', hometown: 'Chicago' }]
  