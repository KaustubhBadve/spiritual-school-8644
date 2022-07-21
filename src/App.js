import logo from './logo.svg';
import './App.css';
// import TempSelection from './components/Template Selection/TempSelectionCombine';
import MainRoutings from './components/MainRoutings';
import CombineAllUsersDas from "./components/user Dashboard/CombineAllUserDas"
import TemplateSelectionCombine from "./components/Template Selection/TempSelectionCombine"
import Login from './components/Login&Signup/Login';
import Signup from './components/Login&Signup/SignUp';


function App() {
  return (
    <div className="App">
     {/* <TempSelection/> */}
     {/* <CombineAllUsersDas/> */}
     {/* <TemplateSelectionCombine/> */}
     <Login/>
     <Signup/>
    </div>
  );
}

export default App;
