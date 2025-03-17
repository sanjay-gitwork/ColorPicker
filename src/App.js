// import SideNav from "./SideNav";
// import MainContent from "./MainContent";
// import './App.css';
import SideNav from './components/navigations/SideNav';
import MainContent from './components/MainContent';
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (

<BrowserRouter>
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 p-4 md:pl-64 overflow-auto">
        <MainContent /> {/* Your main content component */}
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;




// import Home from './components/pages/Home';
// import SideNav from './components/navigations/SideNav';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BlueShades from './components/pages/primary/Blue';



// function App() {
//   return (

//     <Router>
//     <div className="flex">
//       <SideNav />
//       <div className="flex-1 p-5">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/blue" element={<BlueShades />} />
         
//         </Routes>
//       </div>
//     </div>
//   </Router>
//   );
// }

// export default App;
