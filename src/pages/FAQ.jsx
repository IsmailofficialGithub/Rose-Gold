import CTA from '../components/CTA';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-xl bg-rose-dark border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-zinc-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left"
            >
                <span className="font-black uppercase text-lg text-rose-light-gray font-heading tracking-wide pr-4">{q}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-rose-gold flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-rose-gray flex-shrink-0" />}
            </button>
            <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
            >
                <p className="text-rose-gray leading-relaxed text-sm">{a}</p>
            </div>
        </div>
    );
};

export default function FAQ() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-rose-black relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="h-96 rounded-2xl mb-12 overflow-hidden bg-rose-dark border border-rose-bronze/30 shadow-2xl relative group">
                        <img 
                            src="/images/06 - FAQ Page Imges/FAQ Page Hero/1.png" 
                            alt="FAQ" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase text-white font-heading tracking-wide">Frequently Asked Questions</h1>
                            <p className="text-xl text-rose-light-gray">Get answers to common questions about our services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="pb-12 bg-rose-black min-h-[60vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <img 
                        src="/images/06 - FAQ Page Imges/FAQ Page Hero/2.png" 
                        alt="Background" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <div className="space-y-4 mb-16">
                        {[
                            { q: "How is pricing determined?", a: "Based on volume, weight, and distance. Free upfront quotes — what we quote is what you pay." },
                            { q: "What don't you haul?", a: "Hazardous materials, chemicals, paint, asbestos, medical waste. Ask if unsure!" },
                            { q: "Do I need to be home?", a: "Usually yes, so you can show us what goes. We can arrange alternatives." },
                            { q: "How fast can you come?", a: "Same-day and next-day service available for most areas." },
                            { q: "What happens to my stuff?", a: "We donate usable items, recycle what we can, landfill only what's necessary." },
                            { q: "Are you insured?", a: "Yes, fully insured for your protection." },
                        ].map((f, i) => (
                            <FAQItem key={i} {...f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Support Section */}
            <section className="py-20 bg-rose-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Customer Support</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20">
                            <img 
                                src="/images/06 - FAQ Page Imges/Customer Support/1.png" 
                                alt="Customer Support" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20">
                            <img 
                                src="/images/06 - FAQ Page Imges/Customer Support/2.png" 
                                alt="Customer Support" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTA text="Still Have Questions? Call Us!" />
        </>
    );
}
