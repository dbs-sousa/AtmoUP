import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/site";

const WhatsAppButton = () => {
  if (!CONTACT_CONFIG.whatsappNumber) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappDefaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a AtmoUP pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 animate-fade-in-up"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-[#25D366] hover:bg-[#20BD5A]"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
