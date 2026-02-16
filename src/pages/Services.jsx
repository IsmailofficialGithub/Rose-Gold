import CTA from '../components/CTA';
import { services } from '../data/services';

export default function Services() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-rose-black">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="h-96 rounded-2xl mb-12 overflow-hidden bg-rose-dark border border-rose-bronze/30 shadow-2xl relative group">
                        <img 
                            src="/images/04 - Services/Services Hero/1.png" 
                            alt="Our Services" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase text-white font-heading tracking-wide">Our Services</h1>
                            <p className="text-xl text-rose-light-gray">Professional hauling and removal services you can trust</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="pb-12 bg-rose-black">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="space-y-8">
                        {services.map((s, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden bg-rose-dark border border-zinc-900 shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="h-48 bg-rose-dark border-b border-rose-bronze/20 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent z-10 transition-colors duration-300"></div>
                                    <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center bg-rose-orange shadow-lg shadow-rose-orange/20">
                                        <s.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                            <h3 className="text-2xl font-black uppercase text-rose-light-gray font-heading tracking-wide">{s.name}</h3>
                                            <div className="inline-block px-3 py-1 bg-rose-gold/10 rounded-lg border border-rose-gold/20 mt-2 md:mt-0">
                                                <p className="text-sm font-bold text-rose-gold">{s.price}</p>
                                            </div>
                                        </div>
                                        <p className="text-rose-gray leading-relaxed text-lg">{s.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="mt-16">
                <CTA text="Ready to Book?" />
            </div>
        </>
    );
}
