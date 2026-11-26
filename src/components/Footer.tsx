import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import { CONTACT_CONFIG } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logoDark}
              alt="AtmoUP — Engenharia de Equipamentos Industriais"
              className="h-14 w-auto"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              AtmoUP — Engenharia de Equipamentos Industriais
            </p>
            <p className="text-sm text-primary-foreground/80">
              Engenharia aplicada para elevar o desempenho, a confiabilidade e a eficiência dos equipamentos e sistemas industriais.
            </p>
            {CONTACT_CONFIG.linkedinUrl && (
              <div className="flex gap-4">
                <a
                  href={CONTACT_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da AtmoUP"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            )}
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-primary-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/engenharia-de-equipamentos" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Engenharia de Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/equipamentos" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Equipamentos e Sistemas
                </Link>
              </li>
              <li>
                <Link to="/segmentos" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Segmentos
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Estudos de Caso
                </Link>
              </li>
              <li>
                <Link to="/conteudo" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Conteúdo Técnico
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  A AtmoUP
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-primary-foreground mb-4">Pilares de Engenharia</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diagnostico-tecnico" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Diagnóstico
                </Link>
              </li>
              <li>
                <Link to="/engenharia-de-implantacao" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Implantação
                </Link>
              </li>
              <li>
                <Link to="/retrofit-e-adequacao" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Retrofit
                </Link>
              </li>
              <li>
                <Link to="/engenharia-de-performance" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Performance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-primary-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              {CONTACT_CONFIG.phone && (
                <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{CONTACT_CONFIG.phone}</span>
                </li>
              )}
              {CONTACT_CONFIG.email && (
                <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{CONTACT_CONFIG.email}</span>
                </li>
              )}
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{CONTACT_CONFIG.location}</span>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm font-semibold text-accent hover:text-secondary transition-colors"
                >
                  Falar com a Engenharia →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} AtmoUP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
