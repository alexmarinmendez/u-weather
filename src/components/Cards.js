import Card from './Card';

const Cards = (props) => {
  // acá va tu código
  // tip, puedes usar un map
  if (!props.cities) {
    return <h1>No hay ciudad</h1>;
  }
  return (
    <div>
      {props.cities.map((city) => (
        <Card key={city.id} max={city.main.temp_max} min={city.main.temp_min} name={city.name} img={city.weather[0].icon} onClose={() => alert(city.name)} />
      ))}
    </div>
  );
};

export default Cards;
