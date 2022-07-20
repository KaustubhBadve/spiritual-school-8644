import logo from './logo.svg';
import './App.css';
import TempSelection from './components/Template Selection/TempSelectionCombine';
import CombineAllUserDas from './components/user Dashboard/CombineAllUserDas';
// import UserDashNavbar from './components/user Dashboard/UserDashNavbar';
// import UserDashSidebar from './components/user Dashboard/UserDashSidebar';
// import Pricing from "./components/Pricing/Pricing"

function App() {
  return (
    <div className="App">
     {/* <TempSelection/> */}
    <CombineAllUserDas/>
    </div>
  );
}

export default App;
