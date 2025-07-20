import FileExplorer from "./components/FileExplorer";
import PaginationTest from "./components/Pagination/test";
import "./App.css"
import DummyPagination from "./components/DummyPagination/DummyPagination.jsx/DummyPagination";
import Test from "./components/DummyPagination/DummyPagination.jsx/Dummytest";
import Clock from "./components/Digital-Clock/Clock";
const App = () =>{
  return <div>
    {/* <FileExplorer/> */}

    {/* <PaginationTest/> */}
    <Clock/>



    <Test/>

  </div>
}
export default App;