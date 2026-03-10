
import "./App.css";

// import "./public/assets/css/style.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Route,   BrowserRouter,Routes } from 'react-router-dom';
import HomeMediwave from "../src/components/mediwave/AppMediwave/App";
import PageHomeVRme  from "../src/components/vrme/PageHomeVRme"
import SteriwaveHome from "./components/steriwave/home/Home";
import AppMedilink from "./components/medilink/AppMedilink";
 <link rel="stylesheet" type="text/css" href="./assets/css/style.css" media="screen"></link>

const App = () => {


  return (
 <div id="container">
       <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeMediwave  />} />
          <Route path="vrme" element={<PageHomeVRme />} />
          <Route path="medilink" element={<AppMedilink />} />
          <Route path="steriwave" element={<SteriwaveHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;





