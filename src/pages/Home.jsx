import { Shield, Clock, Star, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { services } from '../data/services';

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-rose-dark to-rose-black">
                {/* ACTION SHOT AT TOP - Full Width */}
                <div className="w-full">
                    <div className="h-64 md:h-96 relative overflow-hidden bg-rose-dark border-b-4 border-rose-orange group">
                        <img
                            src="/images/image.png"
                            alt="Rose Gold Hauling Hero"
                            className="w-full h-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-black/80 to-transparent"></div>
                    </div>
                </div>

                {/* Hero Content - CENTERED */}
                <div className="max-w-3xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-rose-gold/15 border border-rose-gold">
                        <Star className="w-4 h-4 text-rose-gold fill-rose-gold" />
                        <span className="text-sm font-bold uppercase text-rose-gold">4.9★ on Google · 47 Reviews</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-4 text-rose-light-gray font-heading leading-none">
                        JUNK GONE. <span className="text-rose-gold">TODAY.</span>
                    </h1>

                    <p className="text-xl mb-6 text-rose-gray">
                        Junk removal · Vehicle transport · Small moves<br />
                        <strong className="text-rose-light-gray">Fast quotes. Fair prices. Same-day service.</strong>
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center mb-8">
                        {[{ icon: Shield, text: "Fully Insured" }, { icon: Clock, text: "Same-Day Service" }, { icon: Star, text: "5-Star Rated" }].map((b, i) => (
                            <div key={i} className="flex items-center gap-2 text-rose-gray">
                                <b.icon className="w-5 h-5 text-rose-gold" /><span className="font-semibold">{b.text}</span>
                            </div>
                        ))}
                    </div>

                    <a href="tel:+15551234567" className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-black text-2xl text-white bg-rose-orange shadow-[0_4px_30px_rgba(255,87,34,0.5)] transition hover:scale-105 hover:bg-[#5a8dad] hover:text-white">
                        <Phone className="w-7 h-7" /> (555) 123-4567
                    </a>
                    <p className="mt-3 text-sm text-zinc-500">Call or text for a free instant quote</p>
                </div>
            </section>

            {/* 6 Services Grid */}
            <section className="py-20 bg-rose-light-gray">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black text-center mb-12 uppercase text-rose-black font-heading">What We Haul</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <Link key={i} to="/services" className="p-6 rounded-2xl bg-white text-center hover:shadow-xl transition-all duration-300 group ring-1 ring-transparent hover:ring-rose-gold">
                                <div className="h-28 rounded-xl mb-4 overflow-hidden bg-rose-dark border border-rose-bronze/20 group-hover:scale-105 transition-transform relative">
                                    <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-rose-orange shadow-lg shadow-rose-orange/20 border-shadow-rose-orange">
                                    <s.icon className="w-6 h-6 text-[#5a8dad]" />
                                </div>
                                <p className="font-black text-lg uppercase text-black font-heading tracking-wide">{s.name}</p>
                                <p className="text-sm font-bold text-rose-orange mt-1">{s.price}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-black text-sm uppercase text-white bg-rose-black shadow-lg hover:bg-[#5a8dad] hover:scale-105 transition-all">
                            View Details <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-24 relative overflow-hidden bg-rose-dark">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/image%20copy%208.png" alt="Testimonial Background" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-rose-gold fill-rose-gold" />)}
                    </div>
                    <p className="text-2xl md:text-3xl italic mb-6 text-rose-light-gray font-light">"Showed up on time, loaded everything fast, price was exactly as quoted. No surprises."</p>
                    <p className="font-bold text-rose-gray tracking-wide uppercase">— Marcus T., Sacramento</p>
                </div>
            </section>

            <CTA />
        </>
    );
}
