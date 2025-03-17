import { Routes, Route } from "react-router-dom";
import BlueShades from "./pages/primary/Blue";
import GreenShades from "./pages/primary/Green";
import RedShades from "./pages/primary/Red";

import VermilionShades from "./pages/tertiary/vermilion";
import AmberShades from "./pages/tertiary/amber";
import ChartreuseShades from "./pages/tertiary/chartreuse";
import TealShades from "./pages/tertiary/teal";
import VioletShades from "./pages/tertiary/violet";
import MagentaShades from "./pages/tertiary/magenta";
import LimeShades from "./pages/tertiary/lime";
import TurquoiseShades from "./pages/tertiary/turquoise";

const MainContent = () => {
  return (
    <div className="flex-1 p-5">
      <Routes>
        <Route path="/blue" element={<BlueShades />} />
        <Route path="/green" element={<GreenShades />} />
        <Route path="/red" element={<RedShades />} />
        

        {/* Tertiary Colors */}
        <Route path="/vermilion" element={<VermilionShades />} />
        <Route path="/amber" element={<AmberShades />} />
        <Route path="/chartreuse" element={<ChartreuseShades />} />
        <Route path="/teal" element={<TealShades />} />
        <Route path="/violet" element={<VioletShades />} />
        <Route path="/magenta" element={<MagentaShades />} />
        <Route path="/lime" element={<LimeShades />} />
        <Route path="/turquoise" element={<TurquoiseShades />} />
        

      </Routes>
    </div>
  );
};

export default MainContent;
