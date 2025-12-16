import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetUp from "./pages/SetUp";
import GuestCards from "./pages/GuestCards";
import HomeLayout from "./Layouts/HomeLayout";
import ModalWindow from "./Layouts/ModalWindow";
import SnowEffect from "./Layouts/SnowEffect";
import Start from "./components/Start";
import FunctionCards from "./pages/FunctionCards";
import ReadCards from "./pages/ReadCards";
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
