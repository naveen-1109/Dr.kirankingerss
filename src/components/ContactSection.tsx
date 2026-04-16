import { motion } from "framer-motion";
import { memo } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const contactInfo = [
  { icon: Mail, title: "Email Us", lines: ["drkingersclinic@gmail.com"] },
  { icon: Phone, title: "Call Us", lines: ["Doctor: +91 9880677666", "Reception: +91 9042250649"] },
  { icon: WhatsAppIcon, title: "WhatsApp", lines: ["+91 9880677666"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon-Sat: 11:00 AM - 7:00 PM", "Sun: Holiday"] },
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
            const isMail = item.title === "Email Us";

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
                        className="text-sm text-foreground hover:text-primary hover:underline block cursor-pointer transition-all"
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
                  if (isMail) {
                    return (
                      <a
                        key={line}
                        href={`mailto:${line}`}
                        title="Click to send an email"
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
          className="glass-card overflow-hidden shadow-elevated relative group cursor-pointer"
          onClick={() => {
            window.open("https://www.google.com/maps/dir/?api=1&destination=Dr+Kingers+clinic+Bangalore", "_blank");
          }}
        >
          <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
            <div className="md:hidden glass-card px-4 py-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to open in Google Maps
            </div>
            <div className="hidden md:block glass-card px-4 py-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Click to open in Google Maps
            </div>
          </div>
          <iframe
            id="clinic-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.653495818968!2d77.6083!3d12.9967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16629c13b631%3A0xe7268579f1ed7d8!2sDr%20Kingers%20clinic!5e0!3m2!1sen!2sin!4v1713200000000!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[400px] transition-all duration-300"
            style={{ border: 0, pointerEvents: 'none' }}
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

export default memo(ContactSection);
