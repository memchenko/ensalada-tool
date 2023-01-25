const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);

root.render(<App />);

function App() {
  const [filters, setFilters] = React.useState(["red"]);

  return (
    <div className="app">
      <MapWidget filters={filters} />
      <Filters value={filters} onChange={setFilters} />
    </div>
  );
}
