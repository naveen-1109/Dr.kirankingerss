import React, { memo } from "react";
import { motion } from "framer-motion";
import { Syringe, HeartHandshake, Video, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Syringe, title: "Vaccinations for All Ages", desc: "Our clinic provides a comprehensive range of vaccinations and immunizations for infants, children, and adults." },
  { icon: HeartHandshake, title: "Personalized Care", desc: "Every treatment plan is uniquely tailored to your individual health needs." },
  { icon: Video, title: "WhatsApp Consultation by Appointment & Availability", desc: "Book an appointment and consult directly through WhatsApp with continuous support." },
  { icon: ShieldCheck, title: "Proven Results", desc: "99% patient satisfaction rate with thousands of successful treatments." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="gradient-text">Dr. Kiran Kinger</span> Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-3xl glass-card mx-auto mb-6 flex items-center justify-center group-hover:shadow-glow transition-all duration-500">
                <item.icon className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
