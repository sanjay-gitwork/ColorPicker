import { useState } from "react";
import { Menu, X } from "lucide-react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 p-4 flex flex-col justify-between transform transition-transform overflow-y-auto h-full md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ backgroundColor: "#1E293B", color: "white" }}
      >
        <div>
          {/* Close Button for Mobile */}
          <button className="absolute top-3 right-3 text-white md:hidden" onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
          <h2 className="text-xl font-bold">Brand</h2>

          {/* Primary Colors */}
          <h4 className="text-sm mt-4 mb-2 text-left">PRIMARY COLORS</h4>
          <nav className="space-y-1">
            <div className="p-2 rounded bg-[#007BFF]">Blue</div>
            <div className="p-2 rounded bg-[#DC3545]">Red</div>
            <div className="p-2 rounded bg-[#28A745]">Green</div>
            <div className="p-2 rounded bg-[#6F42C1]">Purple</div>
            <div className="p-2 rounded bg-[#FD7E14]">Orange</div>
          </nav>

          {/* Secondary Colors */}
          <h4 className="text-sm mt-4 mb-2 text-left">SECONDARY COLORS</h4>
          <nav className="space-y-1">
            {/* <div className="p-2 rounded bg-[#20C997]">Teal</div> */}
            <div className="p-2 rounded bg-[#6610F2]">Indigo</div>
            <div className="p-2 rounded bg-[#E83E8C]">Pink</div>
            <div className="p-2 rounded bg-[#17A2B8]">Cyan</div>
          </nav>

          {/* Tertiary Colors */}
          <h4 className="text-sm mt-4 mb-2 text-left">TERTIARY COLORS</h4>
          <nav className="space-y-1">
            <div className="p-2 rounded bg-[#E34234]">Vermilion </div>
            <div className="p-2 rounded bg-[#FFBF00]">Amber </div>
            <div className="p-2 rounded bg-[#7FFF00]">Chartreuse</div>

            <div className="p-2 rounded bg-[#008080]">Teal</div>
            <div className="p-2 rounded bg-[#8F00FF]">Violet</div>
            <div className="p-2 rounded bg-[#FF00FF]">Magenta</div>
          </nav>

          {/* Accent Colors */}
          <h4 className="text-sm mt-4 mb-2 text-left">ACCENT COLORS</h4>
          <nav className="space-y-1">
            <div className="p-2 rounded bg-green-400">Neon Green</div>
            <div className="p-2 rounded bg-yellow-400">Bright Yellow</div>
            <div className="p-2 rounded bg-pink-400">Hot Pink</div>
            <div className="p-2 rounded bg-blue-400">Electric Blue</div>
          </nav>

          {/* Text Colors */}
          <h4 className="text-sm mt-4 mb-2 text-left">TEXT COLORS</h4>
          <nav className="space-y-1">
            <div className="p-2 rounded bg-black text-white">Primary Text (Black)</div>
            <div className="p-2 rounded bg-[#ffffff] text-black border">Primary Text (White)</div>
            <div className="p-2 rounded bg-gray-500">Secondary Text (Gray)</div>
            <div className="p-2 rounded bg-gray-300">Disabled Text (Light Gray)</div>
          </nav>

          {/* Success, Warning, Error, and Info Colors */}
          <h4 className="text-sm mt-4 mb-2 text-left">STATUS COLORS</h4>
          <nav className="space-y-1">
            <div className="p-2 rounded bg-green-500">Success (Green)</div>
            <div className="p-2 rounded bg-yellow-500">Warning (Yellow/Orange)</div>
            <div className="p-2 rounded bg-red-500">Error (Red)</div>
            <div className="p-2 rounded bg-blue-500">Info (Blue)</div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={22} />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard.</p>
      </div>
    </div>
  );
};

export default SideNav;
