import "./styles/index.css";
import { StickyNavbar } from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <StickyNavbar />
      <Hero />
      <About />
    </>
  );
}
