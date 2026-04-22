/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, Share2, Download, ExternalLink, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Linda Quaynor
TITLE:Independent Non-Executive Director | Strategic Advisor
TEL;TYPE=CELL:+2348022951025
EMAIL:lindaquaynor@hotmail.com
URL:https://lindaquaynor.com
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Linda_Quaynor.vcf';
    a.click();
  };

  const shareProfile = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Linda Quaynor - Digital Business Card',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:relative md:h-[700px] overflow-hidden bg-neutral-950">
        <div className="relative w-full h-[400px] md:absolute md:inset-0 md:h-full">
          <img
            src="https://www.ubaghana.com/wp-content/uploads/sites/14/2026/04/Untitled-design-4.jpg"
            alt="Linda Quaynor"
            className="w-full h-full object-cover object-center opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
        </div>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full px-8 py-10 md:absolute md:bottom-0 md:left-0 md:pb-16 max-w-7xl mx-auto"
        >
          <div className="max-w-3xl">
            <span className="inline-block h-1 w-12 bg-red-700 mb-6"></span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-50 mb-2 leading-tight">LINDA QUAYNOR</h2>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-red-700 italic">Independent Non-Executive Director | Strategic Advisor</p>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 mt-4 max-w-xl">A seasoned executive and board leader with 25+ years of global experience in management consulting, financial services, and corporate strategy, driving high-impact transformations across Africa and international markets.</p>
          </div>
        </motion.div>
      </section>

      {/* Contact & Power-Bio Section */}
      <section className="bg-neutral-950 py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="text-red-700 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Contact & Authority</p>
              
              <div className="space-y-4 mb-8">
                <a href="tel:+2348022951025" className="flex items-center gap-3 text-neutral-300 hover:text-white transition">
                  <Phone className="w-5 h-5 text-neutral-500" />
                  +234 802 295 1025
                </a>
                <a href="mailto:lindaquaynor@hotmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-white transition">
                  <Mail className="w-5 h-5 text-neutral-500" />
                  lindaquaynor@hotmail.com
                </a>
              </div>

              <h3 className="font-serif text-3xl text-neutral-100">Executive Profile</h3>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l border-neutral-800 pl-6">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Strategic Governance</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">25+ years of excellence in Management Consulting, Financial Services, and Corporate Strategy across global markets.</p>
              </div>
              <div className="border-l border-neutral-800 pl-6">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Global Impact</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">Led high-impact policy and transformation initiatives across Africa, UK, Europe, and the United States.</p>
              </div>
              <div className="border-l border-neutral-800 pl-6">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Academic Pedigree</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">MBA (Kent), BA Accounting & Finance (Middlesex), and Executive Education at Harvard University.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Portfolio */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-[10px] tracking-[0.2em] text-neutral-500 font-bold uppercase mb-8">Board Appointments</h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
                {name: "Ghana Infrastructure Investment Fund", role: "Current Board Member"},
                {name: "Delwik Group (Luxembourg)", role: "Current Board Chair & Investment Committee Chair"},
                {name: "ARM Advisory Board", role: "Former Chair"},
                {name: "Nigerian Economic Summit Group", role: "Strategic Advisor"}
            ].map((item) => (
                <motion.div 
                  key={item.name} 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="bg-neutral-900/50 p-6 border border-neutral-800 rounded-sm"
                >
                    <p className="text-xs text-neutral-500 mb-1">{item.name}</p>
                    <p className="text-sm font-semibold text-neutral-100">{item.role}</p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Action Grid */}
      <section className="py-16 bg-neutral-950 mt-auto">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={downloadVCard} className="flex flex-col items-center justify-center py-5 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white rounded-md">
                    <Download className="w-5 h-5 mb-2" />
                    <span className="font-bold tracking-widest uppercase text-[10px]">vCard</span>
                </motion.button>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={shareProfile} className="flex flex-col items-center justify-center py-5 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white rounded-md">
                    <Share2 className="w-5 h-5 mb-2" />
                    <span className="font-bold tracking-widest uppercase text-[10px]">Share</span>
                </motion.button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="whatsapp://send?phone=2348022951025" className="flex flex-col items-center justify-center py-5 bg-red-700 hover:bg-red-800 transition-colors text-white rounded-md">
                <MessageCircle className="w-5 h-5 mb-2" />
                <span className="font-bold tracking-widest uppercase text-[10px]">WhatsApp</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="linkedin://profile/linda-quaynor-a428a011" className="flex flex-col items-center justify-center py-5 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white rounded-md">
                <Linkedin className="w-5 h-5 mb-2" />
                <span className="font-bold tracking-widest uppercase text-[10px]">LinkedIn</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="https://ubaghana.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-5 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white rounded-md">
                <ExternalLink className="w-5 h-5 mb-2" />
                <span className="font-bold tracking-widest uppercase text-[10px]">Website</span>
              </motion.a>
            </div>
        </div>
      </section>
    </div>
  );
}
