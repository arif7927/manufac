import { WINEDATA } from "./data";
import Tabular from "./components/Tabular";
function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Flavanoids Table Mean Median Mode</h1>
      <Tabular rowData={WINEDATA} tableHeader="Flavanoids" />

      <h1>Gamma Table Mean Median Mode</h1>
      <Tabular rowData={WINEDATA} tableHeader="Gamma" />
    </div>
  );
}

export default App;
