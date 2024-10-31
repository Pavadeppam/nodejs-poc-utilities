const axios = require('axios');

// List of URLs to check
const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/postserror/1',
  'https://jsonplaceholder.typicode.com/posts/1/comments',
  'https://jsonplaceholder.typicode.com/comments?postId=1',
];

// Function to check if a URL is valid
async function checkUrl(url) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      console.log(`${url} is valid - Status: ${response.status}`);
    } else {
      console.log(`${url} is invalid - Status: ${response.status}`);
    }
  } catch (error) {
    // Log error status if available, otherwise log the error message
    if (error.response) {
      console.log(`${url} is invalid - Status: ${error.response.status}`);
    } else {
      console.log(`${url} is invalid - Error: ${error.message}`);
    }
  }
}

// Function to loop through all URLs concurrently
async function checkAllUrlsConcurrently() {
  const checkPromises = urls.map((url) => checkUrl(url));
  await Promise.all(checkPromises);
}

// Run the function
checkAllUrlsConcurrently();
