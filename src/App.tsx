import AppRouter from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Doco() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Doco
