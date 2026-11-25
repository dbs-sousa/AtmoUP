import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import EngenhariaEquipamentos from "./pages/EngenhariaEquipamentos";
import EngenhariaPilar from "./pages/EngenhariaPilar";
import Equipamentos from "./pages/Equipamentos";
import EquipamentoDetalhe from "./pages/EquipamentoDetalhe";
import Segmentos from "./pages/Segmentos";
import SegmentoDetalhe from "./pages/SegmentoDetalhe";
import Cases from "./pages/Cases";
import ConteudoTecnico from "./pages/ConteudoTecnico";
import ArtigoDetalhe from "./pages/ArtigoDetalhe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/engenharia-de-equipamentos" element={<EngenhariaEquipamentos />} />
            <Route path="/diagnostico-tecnico" element={<EngenhariaPilar slug="diagnostico-tecnico" />} />
            <Route path="/engenharia-de-implantacao" element={<EngenhariaPilar slug="engenharia-de-implantacao" />} />
            <Route path="/retrofit-e-adequacao" element={<EngenhariaPilar slug="retrofit-e-adequacao" />} />
            <Route path="/engenharia-de-performance" element={<EngenhariaPilar slug="engenharia-de-performance" />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/equipamentos/:slug" element={<EquipamentoDetalhe />} />
            <Route path="/segmentos" element={<Segmentos />} />
            <Route path="/segmentos/:slug" element={<SegmentoDetalhe />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/conteudo" element={<ConteudoTecnico />} />
            <Route path="/conteudo/:slug" element={<ArtigoDetalhe />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/servicos" element={<Navigate to="/engenharia-de-equipamentos" replace />} />
            <Route path="/produtos" element={<Navigate to="/equipamentos" replace />} />
            <Route path="/artigos" element={<Navigate to="/conteudo" replace />} />
            <Route path="/produtos/engenharia-completa" element={<Navigate to="/engenharia-de-equipamentos" replace />} />
            <Route path="/produtos/ventiladores-centrifugos" element={<Navigate to="/equipamentos/ventiladores-industriais" replace />} />
            <Route path="/produtos/reforma-ventiladores" element={<Navigate to="/retrofit-e-adequacao" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
