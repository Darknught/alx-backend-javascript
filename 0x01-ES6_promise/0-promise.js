function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = { data: 'This is the response from the API' };
      resolve(response);
    }, 2000); // Simulating a 2-second delay

    // Handle errors
    // reject(new Error('Error fetching data from API'));
  });
}

export default getResponseFromAPI;
