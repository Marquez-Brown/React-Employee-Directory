import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <EmployeeTable/>
    </div>
  );
}

export default App;
