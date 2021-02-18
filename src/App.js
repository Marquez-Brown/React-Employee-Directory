import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dropdown/>
      <EmployeeTable/>
    </div>
  );
}

export default App;
