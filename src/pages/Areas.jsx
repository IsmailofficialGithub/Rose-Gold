import CTA from '../components/CTA';

export default function Areas() {
    const serviceAreas = [
        { 
            area: "Sacramento Metro", 
            cities: "Sacramento, Roseville, Folsom, Elk Grove, Rancho Cordova, Citrus Heights",
            img: "/images/05 - Services Area Page Images/Sacramento Metro/1.png"
        },
        { 
            area: "East Bay Area", 
            cities: "Oakland, Fremont, Concord, Hayward, Berkeley, Richmond, Walnut Creek",
            img: "/images/05 - Services Area Page Images/East Bay Area/1.png"
        },
        { 
            area: "Central Valley", 
            cities: "Stockton, Modesto, Tracy, Manteca, Lodi, Turlock",
            img: "/images/05 - Services Area Page Images/Central Valley/1.png"
        },
        { 
            area: "South Bay", 
            cities: "San Jose, Sunnyvale, Santa Clara, Palo Alto, Mountain View, Milpitas",
            img: null
        },
        { 
            area: "North Bay", 
            cities: "Santa Rosa, San Rafael, Napa, Petaluma, Vallejo, Fairfield",
            img: null
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-rose-black relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="h-96 rounded-2xl mb-12 overflow-hidden bg-rose-dark border border-rose-bronze/30 shadow-2xl relative group">
                        <img 
                            src="/images/05 - Services Area Page Images/Areas Page Hero/1.png" 
                            alt="Service Areas" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase text-white font-heading tracking-wide">Service Areas</h1>
                            <p className="text-xl text-rose-light-gray">Serving Northern California with reliable hauling services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas List */}
            <section className="pb-12 bg-rose-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <img 
                        src="/images/05 - Services Area Page Images/Areas Page Hero/2.png" 
                        alt="Background" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {serviceAreas.map((a, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden border border-rose-gold/30 bg-rose-dark hover:border-rose-gold transition-colors hover:shadow-[0_0_20px_rgba(255,179,0,0.1)]">
                                {a.img && (
                                    <div className="h-48 overflow-hidden relative">
                                        <img 
                                            src={a.img} 
                                            alt={a.area} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-rose-dark/80 to-transparent"></div>
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-2xl font-black uppercase mb-3 text-rose-light-gray font-heading tracking-wide flex items-center gap-2">
                                        <span className="w-2 h-8 bg-rose-gold rounded-full"></span>
                                        {a.area}
                                    </h3>
                                    <p className="text-rose-gray leading-relaxed pl-4 border-l border-zinc-700">{a.cities}</p>
                                </div>
                            </div>
                        ))}
                        <div className="p-8 rounded-2xl border border-dashed border-rose-gray/30 bg-transparent flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-black uppercase mb-2 text-rose-gray font-heading">Other Areas?</h3>
                            <p className="text-rose-gray text-sm">Call us — we may be able to help!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area Map */}
            <section className="py-20 bg-rose-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Service Area Map</h2>
                    <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20 shadow-2xl">
                        <img 
                            src="/images/05 - Services Area Page Images/Service Area Map/1.png" 
                            alt="Service Area Map" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <CTA text="Not Sure? Call Us!" />
        </>
    );
}
