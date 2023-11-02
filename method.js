async function getData(){
  const data = await fetch('https://restcountries.com/v3.1/all');
  const res = await data.json();
 
  const region = res.filter((c) => c.region === 'Asia');
  const population = res.filter((c) => c.population < 200000);
  res.forEach(e => {
    console.log(e.name,e.capital,e.flag);
  });
  const totalPopulation = res.reduce(((acc,curr) => acc + curr.population ),0);
  console.log(totalPopulation);
  console.log(region);
  console.log(population);
  res.forEach(e => {
    if(e.currencies !== undefined){
      for (const k in e.currencies) {
        if (k === 'USD') {
          console.log(e.name);          
        }            
      }
    }
  });
}
getData();