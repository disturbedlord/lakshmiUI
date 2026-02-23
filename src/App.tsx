import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import NotFound from "./pages/NotFound";
import Price from "./pages/Price";
import { PriceProvider } from "./components/contextProvider/PriceContext";
import ScrollToTop from "./hooks/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PriceProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </BrowserRouter>
      </PriceProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
