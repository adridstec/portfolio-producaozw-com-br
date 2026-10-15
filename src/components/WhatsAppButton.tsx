import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5555991810490?text=Ol%C3%A1%2C%20Gr%C3%A1fica%20ZW!%20Gostaria%20de%20um%20or%C3%A7amento."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="hidden sm:inline">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
