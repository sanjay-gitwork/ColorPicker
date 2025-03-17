import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="p-2 md:hidden fixed top-4 left-4 z-50" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={22} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 p-4 flex flex-col justify-between transform transition-transform overflow-y-auto h-full md:translate-x-0 z-40 bg-gray-900 text-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button for Mobile */}
        <button className="absolute top-3 right-3 text-white md:hidden" onClick={() => setIsOpen(false)}>
          <X size={22} />
        </button>



        {/* Brand Name */}
        <Link to="/" className="text-center text-2xl font-extrabold tracking-wide mb-4">
          ColorShades
        </Link>

        {/* Primary Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">PRIMARY COLORS</h4>
        <nav className="space-y-1">
          <Link to="/red" className="block p-2 rounded bg-[#DC3545]">Red</Link>
          <Link to="/green" className="block p-2 rounded bg-[#28A745]">Green</Link>
          <Link to="/blue" className="block p-2 rounded bg-[#007BFF]">Blue</Link>
        </nav>

        {/* Secondary Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">SECONDARY COLORS</h4>
        <nav className="space-y-1">
          {/* <Link to="/indigo" className="block p-2 rounded bg-[#6610F2]">Indigo</Link>
          <Link to="/pink" className="block p-2 rounded bg-[#E83E8C]">Pink</Link> */}
          <Link to="/cyan" className="block p-2 rounded bg-[#00FFFF]">Cyan</Link>
          <Link to="/magenta" className="block p-2 rounded bg-[#FF00FF]">Magenta</Link>
          <Link to="/Yellow" className="block p-2 rounded bg-[#FFFF00]">Yellow</Link>

          {/* <Link to="/gold" className="block p-2 rounded bg-[#FFC107]">Gold</Link>
          <Link to="/brown" className="block p-2 rounded bg-[#A52A2A]">Brown</Link> */}
        </nav>

        {/* Tertiary Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">TERTIARY COLORS</h4>
        <nav className="space-y-1">

          <Link to="/azure" className="block p-2 rounded bg-[#007FFF]">Azure</Link>
          <Link to="/orange" className="block p-2 rounded bg-[#FF7F00]">Orange</Link>
          <Link to="/spring" className="block p-2 rounded bg-[#00FF7F]">Spring</Link>
          <Link to="/violet" className="block p-2 rounded bg-[#7F00FF]">Violet</Link>
          <Link to="/rose" className="block p-2 rounded bg-[#FF007F]">Rose</Link>
          <Link to="/chartreuse" className="block p-2 rounded bg-[#7FFF00]">Chartreuse</Link>
   
        </nav>


        {/* Quaternary Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">QUATERNARY COLORS</h4>
        <nav className="space-y-1">

          <Link to="/amber" className="block p-2 rounded bg-[#FFBF00]">Amber</Link>
          <Link to="/cobalt" className="block p-2 rounded bg-[#003FFF]">Cobalt</Link>
          <Link to="/lime" className="block p-2 rounded bg-[#BFFF00]">Lime</Link>
          <Link to="/turquoise" className="block p-2 rounded bg-[#00BFBF]">Turquoise</Link>
          <Link to="/vermilion" className="block p-2 rounded bg-[#FF3F00]">Vermilion</Link>
          <Link to="/fuchsia" className="block p-2 rounded bg-[#FF00BF]">Fuchsia</Link>
        
        </nav>




        {/* Accent Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">ACCENT COLORS</h4>
        <nav className="space-y-1">
          <div className="p-2 rounded bg-green-400">Neon Green</div>
          <div className="p-2 rounded bg-yellow-400">Bright Yellow</div>
          <div className="p-2 rounded bg-pink-400">Hot Pink</div>
          <div className="p-2 rounded bg-blue-400">Electric Blue</div>
          <div className="p-2 rounded bg-[#F4A460]">Sandy Brown</div>
          <div className="p-2 rounded bg-[#B22222]">Firebrick</div>
        </nav>

        {/* Text Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">TEXT COLORS</h4>
        <nav className="space-y-1">
          <div className="p-2 rounded bg-black text-white">Primary Text (Black)</div>
          <div className="p-2 rounded bg-[#ffffff] text-black border">Primary Text (White)</div>
          <div className="p-2 rounded bg-gray-500">Secondary Text (Gray)</div>
          <div className="p-2 rounded bg-gray-300">Disabled Text (Light Gray)</div>
          <div className="p-2 rounded bg-[#2F4F4F] text-white">Dark Slate Gray</div>
        </nav>

        {/* Status Colors */}
        <h4 className="text-sm mt-4 mb-2 text-left">STATUS COLORS</h4>
        <nav className="space-y-1">
          <div className="p-2 rounded bg-green-500">Success (Green)</div>
          <div className="p-2 rounded bg-yellow-500">Warning (Yellow/Orange)</div>
          <div className="p-2 rounded bg-red-500">Error (Red)</div>
          <div className="p-2 rounded bg-blue-500">Info (Blue)</div>
          <div className="p-2 rounded bg-[#8B0000]">Danger (Dark Red)</div>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
