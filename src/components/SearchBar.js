const SearchBar = (props) => {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={() => props.onSearch('Santiago')}>Agregar</button>
    </div>
  );
};

export default SearchBar;
