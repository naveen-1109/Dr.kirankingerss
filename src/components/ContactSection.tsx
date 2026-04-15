import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["Dr. Kinger's Clinic", "Bangalore"] },
  { icon: Phone, title: "Call Us", lines: ["Doctor: +91 9880677666", "Reception: +91 9042250649"] },
  { icon: MessageCircle, title: "WhatsApp", lines: ["+91 9880677666"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon-Sat: 11:00 AM - 7:00 PM", "Sun: By Appointment"] },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="gradient-text block mt-1 sm:inline sm:mt-0">Dr. Kiran Kinger</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {contactInfo.map((item, i) => {
            const isWhatsApp = item.title === "WhatsApp";
            const isPhone = item.title === "Call Us";
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center shadow-elevated group relative"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                {item.lines.map((line) => {
                  if (isWhatsApp) {
                    return (
                      <a 
                        key={line} 
                        href="https://wa.me/919880677666?text=Hello%20Doctor%2C%20I%20would%20like%20to%20consult"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to chat with Dr. Kiran Kinger on WhatsApp"
                        className="text-sm text-primary hover:underline block cursor-pointer transition-all"
                      >
                        {line}
                      </a>
                    );
                  }
                  if (isPhone) {
                    const phoneNum = line.split(": ")[1]?.replace(/\s/g, '');
                    return (
                      <a 
                        key={line} 
                        href={`tel:${phoneNum}`}
                        title={`Click to call ${line.split(":")[0]}`}
                        className="text-sm text-muted-foreground hover:text-primary block transition-all"
                      >
                        {line}
                      </a>
                    );
                  }
                  return <p key={line} className="text-sm text-muted-foreground">{line}</p>;
                })}
              </motion.div>
            );
          })}
        </div>

        {/* Map - Bangalore Spencer Road */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden shadow-elevated"
        >
          <iframe
            src="https://maps.google.com/maps?q=Dr%20Kiran%20Kingers%20clinic&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location - Dr. Kiran Kinger's Clinic"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default ContactSection;
