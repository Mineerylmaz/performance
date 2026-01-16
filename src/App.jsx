// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";               // default export ise
import Tasarim from "./pages/TasarimKonfor";   // Tasarım & Konfor sayfan
import AboutPage from "./pages/BizKimiz";
import Modeller from "./pages/Modeller";
import Iletisim from "./pages/İletisim";
function App() {
  return (
    <>
      {/* İstersen buraya Navbar koyabilirsin */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasarim" element={<Tasarim />} />
        <Route path="/biz-kimiz" element={<AboutPage></AboutPage>} />
        <Route path="/modeller" element={<Modeller></Modeller>} />
        <Route path="/iletisim" element={<Iletisim></Iletisim>}></Route>
      </Routes>

      {/* İstersen buraya Footer koyarsın */}
    </>
  );
}

export default App;
