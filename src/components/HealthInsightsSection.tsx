import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { createPortal } from "react-dom";

// Types
interface HealthTip {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  icon?: React.ReactNode;
}

// Data
const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip1",
    title: "Essential Pediatric Nutrition",
    description: "Discover the vital nutrients your child needs for robust growth and cognitive development.",
    fullContent: "A balanced diet is crucial for a child's early development. Ensure your toddler's meals include a colorful variety of fruits, vegetables, lean proteins, and whole grains. Avoid processed sugars where possible. Establishing healthy eating routines early contributes to lifelong well-being.",
    image: "/images/health_tip_1.png",
    icon: <Heart className="w-5 h-5 text-rose-500" />
  },
  {
    id: "tip2",
    title: "Newborn Sleep Patterns",
    description: "Understand infant sleep cycles and create a calming environment for your baby.",
    fullContent: "Newborns sleep up to 16-18 hours a day, usually in short intervals. To encourage better rest, establish a consistent bedtime routine, maintain a comfortable room temperature, and ensure the sleeping area is safe—free of loose blankets or soft toys. Remember, every baby is unique, so patience is key.",
    image: "/images/health_tip_2.png",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />
  },
  {
    id: "tip3",
    title: "Building Strong Immunity",
    description: "Proven strategies to boost your child's natural defenses against common illnesses.",
    fullContent: "Fostering a strong immune system goes beyond just vitamins. Regular outdoor play, adequate sleep, and a balanced diet are your best tools. Additionally, staying up-to-date with vaccinations and practicing good hygiene like regular hand washing significantly reduces the risk of infections.",
    image: "/images/health_tip_3.png",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
  }
];

export default function HealthInsightsSection() {
  const [selectedTip, setSelectedTip] = useState<HealthTip | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedTip) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTip]);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50">
      {/* Subtle floating background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Highlighted Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-800/60 text-blue-800 dark:text-blue-300 font-medium text-xs md:text-base backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500 dark:text-blue-400" />
            Daily Health Tip by Dr. Kiran Kinger
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 mb-4 md:mb-6 tracking-tight px-4"
          >
            Health Insights by Dr. Kiran Kinger
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Expert pediatric advice, health tips, and educational resources for better child care.
          </motion.p>
        </div>

        {/* Top Section - Health Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {HEALTH_TIPS.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedTip(tip)}
              className="group cursor-pointer rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden flex flex-col h-full relative"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-56 md:h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10" />
                <motion.img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white shadow-sm border border-white/30">
                    {tip.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base flex-grow">
                  {tip.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  Read Full Tip
                  <Eye className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover Gradient Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 dark:group-hover:border-blue-500/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal / Dialog for Health Tips - Rendered at root level via Portal to ensure viewport centering */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedTip && (
            <div className="fixed inset-0 z-[99999] pointer-events-none">
              {/* Background Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedTip(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-[5px] z-[99998] cursor-pointer pointer-events-auto"
              />
              
              {/* Modal Popup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-1/2 left-1/2 z-[99999] w-[90%] max-w-[500px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] !m-0 pointer-events-auto"
              >
                <button 
                  onClick={() => setSelectedTip(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative h-48 sm:h-64 w-full flex-shrink-0">
                  <img src={selectedTip.image} alt={selectedTip.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="flex items-center gap-3 mb-2 text-white">
                      <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                        {selectedTip.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">{selectedTip.title}</h3>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow hide-scrollbar">
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {selectedTip.fullContent}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center sm:justify-end">
                    <button 
                      onClick={() => setSelectedTip(null)}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-lg hover:opacity-90 transition-all duration-300"
                    >
                      Close Reading
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
