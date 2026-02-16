import CTA from '../components/CTA';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-rose-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-5xl font-black mb-10 uppercase text-rose-light-gray font-heading border-b border-rose-dark pb-4">About Us</h1>

                    <div className="h-96 rounded-2xl mb-10 overflow-hidden bg-rose-dark border border-rose-bronze/30 shadow-2xl relative group">
                        <img 
                            src="/images/03 - About Page/Hero-Fleet/1.png" 
                            alt="Our Fleet" 
                            className="w-full h-full object-cover" 
                        />
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
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-rose-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Our Founder</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Founder/1.png" 
                                alt="Founder" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Founder/2.png" 
                                alt="Founder" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-rose-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-2xl overflow-hidden bg-rose-dark border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Team/1.png" 
                                alt="Team" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden bg-rose-dark border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Team/2.png" 
                                alt="Team" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-rose-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="rounded-2xl mb-6 overflow-hidden bg-rose-black border border-rose-bronze/20">
                                <img 
                                    src="/images/03 - About Page/Values Integrity/1.png" 
                                    alt="Integrity" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-black uppercase text-rose-gold mb-3 font-heading">Integrity</h3>
                            <p className="text-rose-gray">Honest pricing, transparent service, and ethical practices in everything we do.</p>
                        </div>
                        <div className="text-center">
                            <div className="rounded-2xl mb-6 overflow-hidden bg-rose-black border border-rose-bronze/20">
                                <img 
                                    src="/images/03 - About Page/Values Community/1.png" 
                                    alt="Community" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-black uppercase text-rose-gold mb-3 font-heading">Community</h3>
                            <p className="text-rose-gray">Supporting our local community through donations and responsible recycling.</p>
                        </div>
                        <div className="text-center">
                            <div className="rounded-2xl mb-6 overflow-hidden bg-rose-black border border-rose-bronze/20">
                                <img 
                                    src="/images/03 - About Page/Values Responsibility/1.png" 
                                    alt="Responsibility" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-black uppercase text-rose-gold mb-3 font-heading">Responsibility</h3>
                            <p className="text-rose-gray">Environmental responsibility through recycling and proper waste management.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Involvement */}
            <section className="py-20 bg-rose-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Community Involvement</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="rounded-2xl overflow-hidden bg-rose-dark border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Community Involvement/1.png" 
                                alt="Community Involvement" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden bg-rose-dark border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Community Involvement/2.png" 
                                alt="Community Involvement" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden bg-rose-dark border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Community Involvement/3.png" 
                                alt="Community Involvement" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Truck Detail */}
            <section className="py-20 bg-rose-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12 uppercase text-rose-light-gray font-heading text-center">Our Fleet</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Truck Detail/1.png" 
                                alt="Truck Detail" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden bg-rose-black border border-rose-bronze/20">
                            <img 
                                src="/images/03 - About Page/Truck Detail/2.png" 
                                alt="Truck Detail" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
