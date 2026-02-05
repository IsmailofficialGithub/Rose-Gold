import CTA from '../components/CTA';

export default function About() {
    return (
        <section className="pt-20 pb-12 bg-rose-black">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-5xl font-black mb-10 uppercase text-rose-light-gray font-heading border-b border-rose-dark pb-4">About Us</h1>

                <div className="h-64 rounded-2xl mb-10 overflow-hidden bg-rose-dark border border-rose-bronze/30 shadow-2xl relative group">
                    <img src="/images/image%20copy.png" alt="Our Team" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="space-y-6 mb-12 text-lg text-rose-gray leading-relaxed">
                    <p>Rose Gold Hauling was founded in Northern California with one mission: <strong className="text-rose-light-gray font-bold">reliable, affordable hauling you can count on.</strong></p>
                    <p>We show up on time, work hard, and leave you with a smile. No job too big or small.</p>
                    <p>We donate usable items, recycle responsibly, and only landfill what's truly trash.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[{ n: "500+", l: "Jobs" }, { n: "4.9★", l: "Rating" }, { n: "24HR", l: "Response" }, { n: "100%", l: "Insured" }].map((s, i) => (
                        <div key={i} className="p-6 rounded-2xl text-center bg-rose-dark border border-zinc-800 hover:border-rose-orange transition-colors">
                            <div className="text-3xl font-black text-rose-gold font-heading mb-1">{s.n}</div>
                            <div className="text-xs uppercase font-bold tracking-wider text-rose-gray">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </section>
    );
}
