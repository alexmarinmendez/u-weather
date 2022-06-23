import Card from './Card';

const Cards = (props) => {
  // acá va tu código
  // tip, puedes usar un map
  return <div>{props.cities ? props.cities.map((city) => <Card key={city.id} max={city.main.temp_max} min={city.main.temp_min} name={city.name} img={city.weather[0].icon} onClose={() => alert(city.name)} />) : <h1>NO hay Ciudades</h1>}</div>;
};

export default Cards;
