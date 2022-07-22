import "./App.css";
// import EnterpriseNavbar from "./components/Enterprise/Content/EnterpriseNavbar";
import EnterpriseContent from "./components/Enterprise/EnterpriseContent";
import LandingPage from "./components/Landingpage/LandingPage";
// import CompletePricing from "./components/Pricing/CompletePricing";
// import Pricing from "./components/Pricing/Pricing";

// import TempSelection from "./components/Template Selection/TempSelectionCombine";

function App() {
  return (
    <div className="App">
      {/* <TempSelection/> */}
      {/* <LandingPage /> */}
      {/* <Pricing/> */}
      <EnterpriseContent/>
      
    </div>
  );
}

export default App;
