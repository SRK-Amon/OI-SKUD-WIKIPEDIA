import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetUp from "./pages/SetUp.jsx";
import GuestCards from "./pages/GuestCards.jsx";
import HomeLayout from "./Layouts/HomeLayout.jsx";
import ModalWindow from "./Layouts/ModalWindow.jsx";
import SnowEffect from "./Layouts/SnowEffect.jsx";
import Start from "./components/Start.jsx";
import FunctionCards from "./pages/FunctionCards.jsx";
import ReadCards from "./pages/ReadCards.jsx";
const App = () => {
  return (
    <>
      <SnowEffect />
      <ModalWindow />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Start />} />
            <Route path="/setUp" element={<SetUp />} />
            <Route path="/guestCards" element={<GuestCards />} />
            <Route path="/functionCards" element={<FunctionCards />} />
            <Route path="/readCards" element={<ReadCards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
