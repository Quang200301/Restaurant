
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from './Component/Header';
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Detail from "./Component/Detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
