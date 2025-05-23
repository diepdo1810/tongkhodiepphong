
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductSelectionProvider } from "@/hooks/useProductSelection";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Combos from "./pages/Combos";
import ComboDetail from "./pages/ComboDetail";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Wholesale from "./pages/Wholesale";
import Chatbot from "./components/chatbot/Chatbot";
import ChatbotAdmin from "./components/chatbot/ChatbotAdmin";
import MobileMenu from "./components/layout/MobileMenu";
import Search from "./pages/Search";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <ProductSelectionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:categorySlug" element={<Products />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/combos" element={<Combos />} />
              <Route path="/combos/:slug" element={<ComboDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search" element={<Search />} />
              <Route path="/order" element={<Order />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/admin/chatbot" element={<ChatbotAdmin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Chatbot />
            <MobileMenu />
          </BrowserRouter>
        </ProductSelectionProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
