import LayoutPrimary from "./components/Layout";
import Home from "./modules/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Summary from "./modules/summary/Summary";
import PlanSelection from "./modules/planSelection/PlanSelection";
import Urls from "./core/constants/urls.constants";

function App() {
  return (
    <div className="h-screen flex flex-col font-['Lato',_sans-serif]">
      <BrowserRouter>
        <LayoutPrimary>
          <Routes>
            <Route path={Urls.HOME} element={<Home />} />
            <Route path={Urls.SELECCION_PLAN} element={<PlanSelection />} />
            <Route path={Urls.RESUMEN} element={<Summary />} />
            <Route path="*" element={<Navigate to={Urls.HOME} replace />} />
          </Routes>
        </LayoutPrimary>
      </BrowserRouter>
    </div>
  );
}

export default App;
