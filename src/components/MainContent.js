import { Routes, Route } from "react-router-dom";

import BlueShades from "./pages/primary/Blue";
import GreenShades from "./pages/primary/Green";
import RedShades from "./pages/primary/Red";

// Secondary colors 
import MagentaShades from "./pages/secondary/magenta";
import CyanShades from "./pages/secondary/cyan";
import YellowShades from "./pages/secondary/yellow";

// Tertiary colors
import AzureShades from "./pages/tertiary/azure";
import ChartreuseShades from "./pages/tertiary/chartreuse";
import OrangeShades from "./pages/tertiary/orange";
import RoseShades from "./pages/tertiary/rose";
import SpringGreenShades from "./pages/tertiary/spring";
import VioletShades from "./pages/tertiary/violet";

//Quaternary colors
import AmberShades from "./pages/quaternary/amber";
import CobaltShades from "./pages/quaternary/cobalt";
import LimeShades from "./pages/quaternary/lime";
import TurquoiseShades from "./pages/quaternary/turquoise";
import VermilionShades from "./pages/quaternary/vermilion";
import FuchsiaShades from "./pages/quaternary/fuchsia";

import SideNav from "./navigations/SideNav";
import Header from "./navigations/Header";



const MainContent = () => {
  return (
    <>
 
    <div className="flex-1 p-0 md:p-0">
    <SideNav />
    <Header />

      
      <Routes>

        {/* // Primary colors */}
        <Route path="/blue" element={<BlueShades />} />
        <Route path="/green" element={<GreenShades />} />
        <Route path="/red" element={<RedShades />} />

        {/* //Secondary colors */}
        <Route path="/magenta" element={<MagentaShades />} />
        <Route path="/cyan" element={<CyanShades />} />
        <Route path="/yellow" element={<YellowShades />} />
        

        {/* Tertiary Colors */}
        <Route path="/azure" element={<AzureShades />} />
        <Route path="/chartreuse" element={<ChartreuseShades />} />
        <Route path="/orange" element={<OrangeShades />} />
        <Route path="/rose" element={<RoseShades />} />
        <Route path="/spring" element={<SpringGreenShades />} />
        <Route path="/violet" element={<VioletShades />} />

         {/* Quaternary Colors */}
         <Route path="/amber" element={<AmberShades />} />
        <Route path="/Cobalt" element={<CobaltShades />} />
        <Route path="/lime" element={<LimeShades />} />
        <Route path="/turquoise" element={<TurquoiseShades />} />
        <Route path="/vermilion" element={<VermilionShades />} />
        <Route path="/fuchsia" element={<FuchsiaShades />} />

       
        

      </Routes>
    </div>
    </>
  );
};

export default MainContent;
