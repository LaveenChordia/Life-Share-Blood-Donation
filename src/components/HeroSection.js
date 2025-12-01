import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center bg-red-800/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm border border-red-400/30">
                        <Heart className="w-4 h-4 mr-2 fill-red-300 text-red-300" />
                        <span className="text-sm font-medium text-red-100">Urgent: O- Blood needed in Pune</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        Give Blood. <br />
                        <span className="text-red-200">Save a Life.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Your donation can make a difference to someone in need. Join our community of heroes today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/donate"
                            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition transform hover:scale-105 shadow-lg flex items-center justify-center"
                        >
                            Donate Now
                            <Heart className="ml-2 w-5 h-5 fill-current" />
                        </Link>
                        <Link
                            href="/request"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition flex items-center justify-center"
                        >
                            Request Blood
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="mt-12 flex justify-center items-center space-x-8 text-red-200">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">10k+</div>
                            <div className="text-sm">Donors</div>
                        </div>
                        <div className="h-8 w-px bg-red-400/50"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">5k+</div>
                            <div className="text-sm">Lives Saved</div>
                        </div>
                        <div className="h-8 w-px bg-red-400/50"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
