import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/kalam";

import MainLayout from './layout/MainLayout'
import ScrollSpy from './components/ScrollSpy';

function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <ScrollSpy />
      <Routes>
        <Route path="/myPortfolio/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
} 

export default App
