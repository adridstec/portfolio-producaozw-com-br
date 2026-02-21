import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
{ label: "Início", href: "#inicio" },
{ label: "Serviços", href: "#servicos" },
{ label: "Portfólio", href: "#portfolio" },
{ label: "Sobre", href: "#sobre" },
{ label: "Contato", href: "#contato" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="flex items-center justify-between section-padding !py-4">
        <a href="#inicio" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-gradient">Gardin</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">

              {item.label}
            </a>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground">

          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen &&
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden glass-card border-t border-border">

            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">

                  {item.label}
                </a>
            )}
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

};

export default Header;