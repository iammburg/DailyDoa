import "./styles/index.css";
import { StickyNavbar } from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Feature from "./pages/Feature";
import DoaList from "./pages/DoaList";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StickyNavbar />
      <Hero />
      <About />
      <Feature />
      <QueryClientProvider client={queryClient}>
        <DoaList />
      </QueryClientProvider>
    </>
  );
}
