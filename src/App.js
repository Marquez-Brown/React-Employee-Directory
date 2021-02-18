import Items from "./components/Items/Items";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dropdown/>
      <Items/>
    </div>
  );
}

export default App;
