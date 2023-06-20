const urlOG = 'https://catfact.ninja/fact';
async function fetchDataOG() {
  try {
    const response = await fetch(urlOG);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

console.log("start");
fetchDataOG();
console.log("computing.."); 
