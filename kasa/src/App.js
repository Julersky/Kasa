import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Housing from "./pages/Housing/Housing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
