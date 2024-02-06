import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Resumo from "../pages/resumo";
import Experiencias from "../pages/experiencias";
import Pontos_fortes from "../pages/pontos-fortes";
import Pontos_fracos from "../pages/pontos-fracos";
function routes () {

    return(
        <div>
            <BrowserRouter>
           <Routes>

             <Route path="/" element={<Home />} exact />
             <Route path="/Resumo" element={<Resumo />} />
             <Route path="/Experiências" element={<Experiencias />} />
             <Route path="/Pontos-Fortes" element={<Pontos_fortes />} />
             <Route path="/Pontos-Fracos" element={<Pontos_fracos />} />
           </Routes>
            </BrowserRouter>
        </div>
    )
}

export default routes;