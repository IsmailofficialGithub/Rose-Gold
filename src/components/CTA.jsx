import { Phone } from 'lucide-react';

export default function CTA({ text = "Call Now For Free Quote" }) {
    return (
        <div className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-rose-orange to-rose-bronze">
            <div className="absolute inset-0 opacity-20 bg-rose-black flex items-center justify-center">
                <p className="text-xs text-center px-4 text-rose-gold">
                    📷 BACKGROUND: Drone shot of truck on highway, or truck parked at job site with crew
                </p>
            </div>
            <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white uppercase font-heading">{text}</h3>
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg bg-rose-black text-rose-gold hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" /> (555) 123-4567
                </a>
            </div>
        </div>
    );
}
