import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919880677666?text=Hello%20Doctor%2C%20I%20would%20like%20to%20consult"
      target="_blank"
      rel="noopener noreferrer"
      title="Immediate WhatsApp consultation with Dr. Kiran Kinger"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] w-14 h-14 md:w-16 md:h-16 rounded-full gradient-bg flex items-center justify-center shadow-glow hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
