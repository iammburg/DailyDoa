import "./styles/index.css";
import { StickyNavbar } from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Feature from "./pages/Feature";

export default function App() {
  return (
    <>
      <StickyNavbar />
      <Hero />
      <About />
      <Feature />
    </>
  );
}
