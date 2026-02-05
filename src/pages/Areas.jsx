import CTA from '../components/CTA';

export default function Areas() {
    return (
        <section className="pt-20 pb-12 bg-rose-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <img src="/images/image%20copy%2010.png" alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h1 className="text-5xl font-black mb-12 uppercase text-rose-light-gray font-heading border-b border-rose-dark pb-4">Service Areas</h1>
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {[
                        { area: "Sacramento", cities: "Sacramento, Roseville, Folsom, Elk Grove, Rancho Cordova, Citrus Heights" },
                        { area: "East Bay", cities: "Oakland, Fremont, Concord, Hayward, Berkeley, Richmond, Walnut Creek" },
                        { area: "South Bay", cities: "San Jose, Sunnyvale, Santa Clara, Palo Alto, Mountain View, Milpitas" },
                        { area: "North Bay", cities: "Santa Rosa, San Rafael, Napa, Petaluma, Vallejo, Fairfield" },
                        { area: "Central Valley", cities: "Stockton, Modesto, Tracy, Manteca, Lodi, Turlock" },
                    ].map((a, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-rose-gold/30 bg-rose-dark hover:border-rose-gold transition-colors hover:shadow-[0_0_20px_rgba(255,179,0,0.1)]">
                            <h3 className="text-2xl font-black uppercase mb-3 text-rose-light-gray font-heading tracking-wide flex items-center gap-2">
                                <span className="w-2 h-8 bg-rose-gold rounded-full"></span>
                                {a.area}
                            </h3>
                            <p className="text-rose-gray leading-relaxed pl-4 border-l border-zinc-700">{a.cities}</p>
                        </div>
                    ))}
                    <div className="p-8 rounded-2xl border border-dashed border-rose-gray/30 bg-transparent flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-black uppercase mb-2 text-rose-gray font-heading">Other Areas?</h3>
                        <p className="text-rose-gray text-sm">Call us — we may be able to help!</p>
                    </div>
                </div>
            </div>
            <CTA text="Not Sure? Call Us!" />
        </section>
    );
}
