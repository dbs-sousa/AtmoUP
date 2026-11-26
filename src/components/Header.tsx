import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const engineeringPages = [
    { name: "Engenharia de Equipamentos", href: "/engenharia-de-equipamentos" },
    { name: "Diagnóstico Técnico", href: "/diagnostico-tecnico" },
    { name: "Engenharia de Implantação", href: "/engenharia-de-implantacao" },
    { name: "Retrofit e Adequação", href: "/retrofit-e-adequacao" },
    { name: "Engenharia de Performance", href: "/engenharia-de-performance" },
  ];

  const navigation = [
    { name: "Equipamentos", href: "/equipamentos" },
    { name: "Segmentos", href: "/segmentos" },
    { name: "Estudos de Caso", href: "/cases" },
    { name: "Conteúdo", href: "/conteudo" },
    { name: "A AtmoUP", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(`${path}/`));
  const isEngenhariaActive = engineeringPages.some((item) => location.pathname === item.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6" aria-label="Navegação principal">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logoLight}
            alt="AtmoUP — Engenharia de Equipamentos Industriais"
            className="h-14 md:h-16 w-auto dark:hidden"
          />
          <img
            src={logoDark}
            alt="AtmoUP — Engenharia de Equipamentos Industriais"
            className="h-14 md:h-16 w-auto hidden dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-7 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-accent ${
                isEngenhariaActive ? "text-primary font-bold" : "text-foreground/80"
              }`}
            >
              Engenharia
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {engineeringPages.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="w-full cursor-pointer text-sm font-medium">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isActive(item.href) ? "text-primary font-bold" : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button asChild variant="accent" size="default">
            <Link to="/contato">
              <Phone className="mr-2 h-4 w-4" />
              Falar com a Engenharia
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md text-primary hover:bg-muted transition-colors"
          aria-label="Abrir menu de navegação"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            <div className="flex flex-col gap-1 pl-4 border-l-2 border-accent mb-2 py-1">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Engenharia</span>
              {engineeringPages.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.href) ? "text-primary font-bold" : "text-foreground/75"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 text-base font-semibold transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-primary font-bold" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild variant="accent" size="lg" className="mt-4 w-full">
              <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                Falar com a Engenharia
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
