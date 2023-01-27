import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics"
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import { Home } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/events" element={<Events />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
